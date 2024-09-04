const filmes = [];
const descricoes = [];

// Preenche os arrays com os IDs dos elementos
for (let i = 1; i <= 6; i++) {
    filmes[i] = document.getElementById(`filme${i}`);
    descricoes[i] = document.getElementById(`describe${i}`);
}

// Função para mostrar a descrição e ocultar o filme
function verDescricao(filme) {
    filmes[filme].style.display = 'none';
    descricoes[filme].style.display = 'flex';
}

// Função para mostrar a capa e ocultar a descrição
function verCapa(filme) {
    filmes[filme].style.display = 'flex';
    descricoes[filme].style.display = 'none';
}

function selecionarFilme(){
    
}