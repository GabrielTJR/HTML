var gastos=[], ganhos=0, sobra, poupanca=0, ganho, totalPagar, gasto;
const valorPoupanca = document.getElementById('valorPoupanca')
const valorGanhos = document.getElementById('valorGanhos')
const valorGastos = document.getElementById('valorGastos')
const valorTotal = document.getElementById('valorTotal')

function adicionarPoupanca(){
    if(document.getElementById('poupanca').value == ''){
        poupanca=0
    }else{
        poupanca += parseFloat(document.getElementById('poupanca').value)
    }
    valorPoupanca.innerText = `Valor em poupança: R$${poupanca}`
}

function adicionarGanhos(){
    if(document.getElementById('ganho').value == ''){
        ganho=0
    }else{
        ganho = parseFloat(document.getElementById('ganho').value)
    }
    ganhos+= ganho;
    valorGanhos.innerText = `Valor ganho por mês: R$${ganhos}`
}

function adicionarGastos(){
    gasto = parseFloat(document.getElementById('gasto').value)
    var nomeGasto = document.getElementById('nomeGasto').value
    var parcelas = parseInt(document.getElementById('parcelas').value)
    if(nomeGasto == '' || document.getElementById('parcelas').value == '' || document.getElementById('gasto').value == ''){
        alert("Preencha todas as informações")
    }else{
        gastos.push({nome:nomeGasto, valor:gasto, parcelas:parcelas})
        valorGastos.innerHTML += `${nomeGasto}: R$${gasto}, ${parcelas}x.<br>`
        totalPagar=0;
        gastos.forEach(parcela=>{
            totalPagar += parcela.valor*parcela.parcelas;
        });
        valorTotal.innerText = `Total a pagar: R$${totalPagar}`
    }
}

function gerarSobra(){

}

function limparPoupanca(){
    poupanca=0;
    valorPoupanca.innerText =''
}

function limparGanhos(){
    ganhos=0;
    valorGanhos.innerText =''
}

function limparGastos(){
    gastos=0;
    valorGastos.innerText =''
}