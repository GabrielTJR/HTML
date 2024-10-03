var gastos=[], ganhos=0, sobra;
const valorGanhos = document.getElementById('valorGanhos')
const valorGastos = document.getElementById('valorGastos')

function adicionarGastos(){
    gasto = parseFloat(document.getElementById('gasto').value)
    var nomeGasto = document.getElementById('nomeGasto').value
    var parcelas = parseInt(document.getElementById('parcelas').value)
    gastos += {nome:nomeGasto, valor:gasto, parcelas:parcelas}
    valorGastos.innerHTML += `Pagamento de ${nomeGasto}: R$${gasto}, durante ${parcelas} parcelas.<br>`
}

function adicionarGanhos(){
    ganho = parseFloat(document.getElementById('ganho').value)
    ganhos+= ganho;
    valorGanhos.innerText = `Valor ganho por mês: R$${ganhos}`
}

function gerarSobra(){

}

function limparGanhos(){
    ganhos=0;
    valorGanhos.innerText =''
}

function limparGastos(){
    gastos=0;
    valorGastos.innerText =''
}