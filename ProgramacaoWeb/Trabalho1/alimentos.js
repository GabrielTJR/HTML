function verificarFilme(){
    let filme = sessionStorage.getItem("filmeSelecionado");
    let teste = document.getElementById("filme");
    teste.innerHTML = filme;
}