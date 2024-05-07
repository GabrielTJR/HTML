function generateSudoku() {
    const order = parseInt(document.getElementById('order').value);
    const startRow = parseInt(document.getElementById('startRow').value) - 1;
    const startCol = parseInt(document.getElementById('startCol').value) - 1;
    const Raiz = Math.sqrt(order);
    if(Number.isInteger(Raiz)){    
        const sudoku = generateSudokuGrid(order, startRow, startCol);
        drawSudoku(sudoku);
        createSudokuGraph(sudoku);
    }else{
        alert('Digite um número com raiz inteira para a ordem da matriz');
    }
}

function generateSudokuGrid(order, startRow, startCol) {
    const grid = [];
    const subgridSize = Math.sqrt(order);
    let num = 1;

    for (let i = 0; i < order; i++) {
        const row = [];
        for (let j = 0; j < order; j++) {
            const rowIndex = (startRow + i) % order;
            const colIndex = (startCol + j) % order;
            const value = (num + rowIndex + colIndex * subgridSize - 1) % order + 1;
            row.push(value);
            num = value;
        }
        num = (num + subgridSize) % order + 1;
        grid.push(row);
    }

    return grid;
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

function createSudokuGraph(sudoku) {
    var tamanho = sudoku.length;
    var nodes = [];
    var edges = [];

    // Criar nós
    for (var i = 0; i < tamanho; i++) {
        for (var j = 0; j < tamanho; j++) {
            var id = i * tamanho + j;
            var label = sudoku[i][j] !== 0 ? sudoku[i][j].toString() : '';
            var x = (j + 1) * 100;
            var y = (i + 1) * 100;
            var group = sudoku[i][j]; // Define o grupo de cada nó como o valor do sudoku
            nodes.push({ id: id, label: label, x: x, y: y, group: group });
        }
    }

    // Criar arestas
    for (var i = 0; i < tamanho; i++) {
        for (var j = 0; j < tamanho; j++) {
            var id = i * tamanho + j;

            // Arestas na mesma linha
            for (var k = 0; k < tamanho; k++) {
                if (k !== j) {
                    edges.push({ from: id, to: i * tamanho + k });
                }
            }

            // Arestas na mesma coluna
            for (var k = 0; k < tamanho; k++) {
                if (k !== i) {
                    edges.push({ from: id, to: k * tamanho + j });
                }
            }

            // Arestas no mesmo bloco
            var blockSize = Math.sqrt(tamanho);
            var blockStartRow = Math.floor(i / blockSize) * blockSize;
            var blockStartCol = Math.floor(j / blockSize) * blockSize;
            for (var k = blockStartRow; k < blockStartRow + blockSize; k++) {
                for (var l = blockStartCol; l < blockStartCol + blockSize; l++) {
                    if (k !== i || l !== j) {
                        edges.push({ from: id, to: k * tamanho + l });
                    }
                }
            }
        }
    }

    // Ordenar os vértices em ordem não crescente de grau
    nodes.sort((a, b) => {
        const degreeA = edges.filter(edge => edge.from === a.id || edge.to === a.id).length;
        const degreeB = edges.filter(edge => edge.from === b.id || edge.to === b.id).length;
        return degreeB - degreeA;
    });

    // Colorir os vértices
    var colors = {};
    var colorIndex = 1;
    var colored = {};
    nodes.forEach(function(node) {
        var id = node.id;
        var adjacentColored = {};

        // Verificar cores dos vértices adjacentes
        edges.forEach(function(edge) {
            if (edge.from === id && colored[edge.to]) {
                adjacentColored[colored[edge.to]] = true;
            }
            if (edge.to === id && colored[edge.from]) {
                adjacentColored[colored[edge.from]] = true;
            }
        });

        // Encontrar a primeira cor disponível para o vértice
        var colorFound = false;
        for (var i = 1; !colorFound; i++) {
            if (!adjacentColored[i]) {
                node.color = { background: "hsl(" + (360 * i / tamanho) + ",100%,70%)" };
                colored[id] = i;
                colorFound = true;
            }
        }
    });

    // Opções de configuração do gráfico
    var options = {
        physics: false, // Desabilitar a simulação física para evitar que os vértices se movam
        nodes: {
            shape: "circle",
            tamanho: 20
        }
    };

    // Criação do gráfico
    var container = document.getElementById('graph');
    var data = { nodes: nodes, edges: edges };
    var network = new vis.Network(container, data, options);
}