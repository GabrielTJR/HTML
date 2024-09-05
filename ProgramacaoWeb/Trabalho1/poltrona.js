// Função que será chamada quando uma célula for clicada
function marcarAssento(event) {
    // Obtém o texto da célula clicada
    const texto = event.target.textContent;
    
    // Exibe o texto em um alerta (ou realiza qualquer outra ação desejada)
    if(event.target.classList.contains('clicada')){
        event.target.classList.remove('clicada');
    }
    else if(texto == "💺"){
        // Adiciona a classe 'clicada' à célula que foi clicada
        event.target.classList.add('clicada');
    }else{
        alert('Assento indisponível');
    }

}

function selecionarPoltrona(){
    const poltronaSelecionada = document.querySelectorAll('.clicada');
    poltronaSelecionada.forEach(poltrona => {
        alert(poltrona.id);
    });
}

const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
const colunas = 9;
const statusPoltronas = [
    ['❌', '💺', '❌', '💺', '💺', '💺', '❌', '❌', '💺'],
    ['❌', '❌', '❌', '❌', '💺', '💺', '💺', '💺', '❌'],
    ['💺', '❌', '❌', '💺', '❌', '❌', '💺', '❌', '💺'],
    ['💺', '❌', '❌', '💺', '💺', '💺', '💺', '❌', '❌'],
    ['💺', '❌', '❌', '❌', '❌', '💺', '💺', '💺', '💺'],
    ['❌', '❌', '💺', '💺', '💺', '💺', '💺', '❌', '❌'],
    ['💺', '❌', '💺', '💺', '💺', '💺', '💺', '💺', '❌'],
    ['💺', '💺', '❌', '❌', '💺', '💺', '❌', '❌', '💺'],
    ['💺', '❌', '❌', '💺', '💺', '💺', '💺', '💺', '💺']
];

// Gera o cabeçalho da tabela
const thead = document.getElementById('table-header');
let headerRow = '<tr><th></th>';
for (let i = 1; i <= colunas; i++) {
    headerRow += `<th>${i}</th>`;
}
headerRow += '</tr>';
thead.innerHTML = headerRow;

// Gera o corpo da tabela com ID nas células
const tbody = document.getElementById('table-body');
let bodyRows = '';
letras.forEach((letra, i) => {
    let row = `<tr><th>${letra}</th>`;
    statusPoltronas[i].forEach((status, j) => {
        const cellId = `${letra}${j + 1}`;  // Exemplo: A1, B2
        row += `<td id="${cellId}">${status}</td>`;
    });
    row += '</tr>';
    bodyRows += row;
});
tbody.innerHTML = bodyRows;

// Obtém todas as células da tabela
const todasAsCelulas = document.querySelectorAll('td');

// Adiciona um evento de clique a cada célula
todasAsCelulas.forEach(celula => {
    celula.addEventListener('click', marcarAssento);
});