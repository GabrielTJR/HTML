var table = document.getElementById("tabela-container");
var tabela = document.getElementById("tabela");
var form = document.getElementById("formulario");
var novamente = document.getElementById("novamente");
form.addEventListener('submit', gerarPoupanca);

function gerarPoupanca(event) {
    event.preventDefault();
    
    var objetivo = parseFloat(document.getElementById("objetivo").value);
    var inicial = parseFloat(document.getElementById("inicial").value);
    var mensal = parseFloat(document.getElementById("mensal").value);

    form.style.display = 'none'
    novamente.style.display = 'block'
    table.style.display = 'flex'

    var atual = inicial;
    var meses = 0;

    var novalinha = tabela.insertRow();
    var celula1 = novalinha.insertCell(0);
    var celula2 = novalinha.insertCell(1);
    celula1.textContent = atual.toFixed(2);
    celula2.textContent = meses;
    

    while(atual < objetivo){
        atual += mensal;
        atual = atual * 1.005;
        meses++;
        var novalinha = tabela.insertRow();
        var celula1 = novalinha.insertCell(0);
        var celula2 = novalinha.insertCell(1);
        celula1.textContent = atual.toFixed(2);
        celula2.textContent = meses;
    }
}

function novaPoupanca(){
    var objetivo = document.getElementById("objetivo")
    var inicial = document.getElementById("inicial")
    var mensal = document.getElementById("mensal")

    objetivo.value ="";
    inicial.value ="";
    mensal.value="";

    form.style.display = 'flex'
    table.style.display = 'none'
    novamente.style.display = 'none'
    tabela.innerHTML = ""
}

