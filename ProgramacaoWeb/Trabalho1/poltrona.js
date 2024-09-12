// Função que será chamada quando uma célula for clicada
function marcarAssento(event) {
    const texto = event.target.textContent;
    
    if(event.target.classList.contains('clicada')){
        event.target.classList.remove('clicada');
    }
    else if(texto == "💺"){
        event.target.classList.add('clicada');
    }else{
        alert('Assento indisponível');
    }

}
// Função para salvar as poltronas selecionadas
function selecionarPoltrona(){
    let poltronas = 0;
    const poltronaSelecionada = document.querySelectorAll('.clicada');
    poltronaSelecionada.forEach(poltrona => {
        sessionStorage.setItem(`poltrona${poltronas}`, poltrona.id);
        poltronas++;
    });
    sessionStorage.setItem('qntPoltronas', poltronas)
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
        const cellId = `${letra}${j + 1}`;
        row += `<td id="${cellId}">${status}</td>`;
    });
    row += '</tr>';
    bodyRows += row;
});
tbody.innerHTML = bodyRows;

// Obtém todas as células da tabela e adiciona a função marcarAssento nelas
const todasAsCelulas = document.querySelectorAll('td');
todasAsCelulas.forEach(celula => {
    celula.addEventListener('click', marcarAssento);
});