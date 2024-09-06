let cont = 1;
const filmes = document.querySelectorAll('.filmes');
const descricoes = document.querySelectorAll('.movie-describe');
const selecionar = document.querySelectorAll('.selecionarFilme')

filmes.forEach((filme, index) => {
    filme.addEventListener('click', () => verDescricao(index));
});

descricoes.forEach((descricao, index) => {
    descricao.addEventListener('click', () => verCapa(index));
});

selecionar.forEach((selecao, index) => {
    selecao.addEventListener('click', () => selecionarFilme(index));
});

// Função para mostrar a descrição e ocultar o filme
function verDescricao(index) {
    filmes[index].style.display = 'none';
    descricoes[index].style.display = 'flex';
}

// Função para mostrar a capa e ocultar a descrição
function verCapa(index) {
    filmes[index].style.display = 'flex';
    descricoes[index].style.display = 'none';
}

function selecionarFilme(filme){
    let htmltext = document.getElementById(`filme${filme+1}`).innerHTML;
    sessionStorage.setItem("filmeSelecionado", htmltext);
}