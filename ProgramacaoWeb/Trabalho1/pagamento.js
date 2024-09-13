let totalIngressos = sessionStorage.getItem("qntPoltronas");
let valorIngressos = totalIngressos * 20;

let totalCombo = 0;
let qntCombos = sessionStorage.getItem("qntCombos");

for(let i=0; i<qntCombos; i++){
    totalCombo += parseFloat(sessionStorage.getItem(`precoCombo${i}`).replace('R$', '').replace(',', '.').trim());  
}

let valorTotal = totalCombo + valorIngressos;

document.getElementById('valorTotal').innerText = `Valor total: R$${valorTotal}`

sessionStorage.setItem('valorTotal', valorTotal)

function confirmarPagamento() {
    let selectedRadio = document.querySelector('input[name="payment"]:checked');
    if (selectedRadio) {
        let metodoPag = document.querySelector(`label[for="${selectedRadio.id}"]`).innerText;
        sessionStorage.setItem('metodoPag', metodoPag)
        window.location.href = "final.html"
    } else {
        alert('Selecione uma opção de pagamento')
    }
}


