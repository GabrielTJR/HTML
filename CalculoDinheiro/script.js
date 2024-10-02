var gastos=[], ganhos=0, sobra;
const valorGanhos = document.getElementById('valorGanhos')
const valorGastos = document.getElementById('valorGastos')

function adicionarGastos(){
    gasto = parseFloat(document.getElementById('gasto').value)
    parecelas = 
    gastos+= gasto;
    valorGastos.innerText = `Valor ganho por mês: R$${gastos}`
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