function generateSudoku() {
    const ordem = parseInt(document.getElementById('ordem').value);
    const LinhaIni = parseInt(document.getElementById('LinhaIni').value) - 1;
    const ColunaIni = parseInt(document.getElementById('ColunaIni').value) - 1;
    const Raiz = Math.sqrt(ordem);
    if(Number.isInteger(Raiz)){
        createSudokuGraph(ordem, LinhaIni, ColunaIni);
        
    }else{
        alert('Digite um número com raiz inteira para a ordem da matriz');
    }
}

function createSudokuGraph(ordem, LinhaIni, ColunaIni) {
    var tamanho = ordem;
    var nos = [];
    var arestas = [];
    const subgridSize = Math.sqrt(ordem);

    // Criar nós
    for (var i = 0; i < tamanho; i++) {
        for (var j = 0; j < tamanho; j++) {
            var id = i * tamanho + j;
            var label = '';
            var x = (j + 1) * 100;
            var y = (i + 1) * 100;
            nos.push({ id: id, label: label, x: x, y: y});
        }
    }

    // Enumera o grafo com as regras do sudoku
    function findNodeById(nodeId) {
        return nos.find(function(node) {
            return node.id === nodeId;
        });
    }

    for (var i = 0; i < tamanho; i++) {
        for (var j = 0; j < tamanho; j++) {
            var id = ((LinhaIni+i)%tamanho) * tamanho + ((ColunaIni+j)%tamanho);
            const value = (i * subgridSize + Math.floor(i / subgridSize) + j) % ordem + 1;
            var node = findNodeById(id);
            if (node) {
                node.label = value.toString();
            }
        }
    }

    // Criar arestas
    for (var i = 0; i < tamanho; i++) {
        for (var j = 0; j < tamanho; j++) {
            var id = i * tamanho + j;

            // Arestas na mesma linha
            for (var k = 0; k < tamanho; k++) {
                if (k != j) {
                    arestas.push({ from: id, to: i * tamanho + k });
                }
            }

            // Arestas na mesma coluna
            for (var k = 0; k < tamanho; k++) {
                if (k != i) {
                    arestas.push({ from: id, to: k * tamanho + j });
                }
            }

            // Arestas no mesmo bloco
            var blockSize = Math.sqrt(tamanho);
            var blockLinhaIni = Math.floor(i / blockSize) * blockSize;
            var blockColunaIni = Math.floor(j / blockSize) * blockSize;
            for (var k = blockLinhaIni; k < blockLinhaIni + blockSize; k++) {
                for (var l = blockColunaIni; l < blockColunaIni + blockSize; l++) {
                    if (k != i || l != j) {
                        arestas.push({ from: id, to: k * tamanho + l });
                    }
                }
            }
        }
    }

    // Colorir o grafo
    nos.forEach(function(node) {
        node.color = { background: "hsl(" + (360 * node.label / tamanho) + ",100%,70%)" };
    });

    // Opções de configuração do grafo
    var options = {
        physics: false,
        nos: {
            shape: "circle",
            tamanho: 20
        }
    };

    // Criação do grafo
    var container = document.getElementById('grafo');
    var data = { nodes: nos, edges: arestas };
    var network = new vis.Network(container, data, options);
}

/*function generateSudokuGrid(order) {
    const grid = [];
    const subgridSize = Math.sqrt(order);
    let num = 1;

    // Gera um sudoku com distribuição começando da primeira linha e primeira coluna
    for (let i = 0; i < order; i++) {
        const row = [];
        for (let j = 0; j < order; j++) {
            const value = (i * subgridSize + Math.floor(i / subgridSize) + j) % order + 1;
            row.push(value);
            num = value;
        }
        num = (num + subgridSize) % order + 1;
        grid.push(row);
    }

    return grid;
}*/

// Colorir os vértices
    /*var colorido = {};
    nos.forEach(function(node) {
        var id = node.id;
        var adjacentcolorido = {};

        // Verificar cores dos vértices adjacentes
        arestas.forEach(function(edge) {
            if (edge.from == id && colorido[edge.to]) {
                adjacentcolorido[colorido[edge.to]] = true;
            }
            if (edge.to == id && colorido[edge.from]) {
                adjacentcolorido[colorido[edge.from]] = true;
            }
        });

        // Encontrar a primeira cor disponível para o vértice
        var colorFound = false;
        for (var i = 1; !colorFound; i++) {
            if (!adjacentcolorido[i]) {
                node.color = { background: "hsl(" + (360 * i / tamanho) + ",100%,70%)" };
                node.label = i.toString();
                colorido[id] = i;
                colorFound = true;
            }
        }
    });*/

    