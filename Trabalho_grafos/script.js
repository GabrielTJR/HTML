function generateSudoku() {
    const order = parseInt(document.getElementById('order').value);
    const start = parseInt(document.getElementById('start').value) - 1;
    const Raiz = Math.sqrt(order);
    if(Number.isInteger(Raiz)){    
        const sudoku = generateSudokuGrid(order);
        const graph = sudokuToGraph(sudoku);

        drawSudoku(sudoku);
        drawGraph(graph);
    }else{
        alert('Digite um número com raiz inteira para a ordem da matriz');
    }
}

function generateSudokuGrid(order) {
    const grid = [];
    const subgridSize = Math.sqrt(order);

    for (let i = 0; i < order; i++) {
        const row = [];
        for (let j = 0; j < order; j++) {
            const value = (i * subgridSize + Math.floor(i / subgridSize) + j) % order + 1;
            row.push(value);
        }
        grid.push(row);
    }

    return grid;
}

function sudokuToGraph(sudoku) {
    const order = sudoku.length;
    const graph = [];

    // Criar uma função auxiliar para adicionar uma aresta entre dois nós
    function addEdge(node1, node2) {
        if (!graph[node1]) graph[node1] = [];
        if (!graph[node2]) graph[node2] = [];

        if (!graph[node1].includes(node2)) {
            graph[node1].push(node2);
        }
        if (!graph[node2].includes(node1)) {
            graph[node2].push(node1);
        }
    }

    // Criar nós e arestas para cada célula do Sudoku
    for (let i = 0; i < order; i++) {
        for (let j = 0; j < order; j++) {
            const cell = sudoku[i][j];
            const node = i * order + j;

            // Adicionar arestas para células na mesma linha
            for (let col = 0; col < order; col++) {
                if (col !== j) {
                    const neighbor = i * order + col;
                    addEdge(node, neighbor);
                }
            }

            // Adicionar arestas para células na mesma coluna
            for (let row = 0; row < order; row++) {
                if (row !== i) {
                    const neighbor = row * order + j;
                    addEdge(node, neighbor);
                }
            }

            // Adicionar arestas para células no mesmo bloco (sub-grade)
            const subgridSize = Math.sqrt(order);
            const subgridRow = Math.floor(i / subgridSize) * subgridSize;
            const subgridCol = Math.floor(j / subgridSize) * subgridSize;
            for (let m = subgridRow; m < subgridRow + subgridSize; m++) {
                for (let n = subgridCol; n < subgridCol + subgridSize; n++) {
                    if (m !== i || n !== j) {
                        const neighbor = m * order + n;
                        addEdge(node, neighbor);
                    }
                }
            }
        }
    }

    return graph;
}

function drawSudoku(grid) {
    const table = document.getElementById('sudoku');
    table.innerHTML = '';

    for (let i = 0; i < grid.length; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < grid[i].length; j++) {
            const cell = document.createElement('td');
            cell.textContent = grid[i][j];
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

function drawGraph(graph) {
    const div = document.getElementById('graph');
    div.innerHTML = '';

    for (let i = 0; i < graph.length; i++) {
        const nodeContainer = document.createElement('div');
        nodeContainer.className = 'node-container';

        const node = document.createElement('div');
        node.className = 'graph-node';
        node.innerText = i;
        nodeContainer.appendChild(node);

        graph[i].forEach(neighbor => {
            const edge = document.createElement('div');
            edge.className = 'graph-edge';
            nodeContainer.appendChild(edge);

            const neighborNode = document.createElement('div');
            neighborNode.className = 'graph-node';
            neighborNode.innerText = neighbor;
            nodeContainer.appendChild(neighborNode);
        });

        div.appendChild(nodeContainer);
    }
}