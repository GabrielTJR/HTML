function verificarFilme(){
    let filme = sessionStorage.getItem("filmeSelecionado");
    let teste = document.getElementById("filme");
    teste.innerHTML = filme;
}

let combos = document.querySelectorAll('.combos');

combos.forEach(combo => {
    combo.addEventListener('click', function() {
        combo.classList.toggle('clicada');
    });
});

function confirmarCombo(){
    let qntCombos = 0;
    let selecionados = document.querySelectorAll('.clicada');
    selecionados.forEach(selecao => {
        sessionStorage.setItem(`combo${qntCombos}`, selecao.id.replace('-', ' '));
        let preco = selecao.querySelector('.preco').textContent;      
        sessionStorage.setItem(`precoCombo${qntCombos}`, preco);
        qntCombos++;
    });
    sessionStorage.setItem(`qntCombos`, qntCombos);
}