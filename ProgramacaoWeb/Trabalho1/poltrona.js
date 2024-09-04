// Função que será chamada quando uma célula for clicada
function aoClicarNaCelula(event) {
    // Obtém o texto da célula clicada
    const texto = event.target.textContent;
    
    // Exibe o texto em um alerta (ou realiza qualquer outra ação desejada)
    if(texto == "💺"){
        alert('Você clicou na célula com o texto: ' + texto);
    }else{
        alert('Assento indisponível');
    }

}

// Obtém todas as células da tabela
const todasAsCelulas = document.querySelectorAll('td');

// Adiciona um evento de clique a cada célula
todasAsCelulas.forEach(celula => {
    celula.addEventListener('click', aoClicarNaCelula);
});