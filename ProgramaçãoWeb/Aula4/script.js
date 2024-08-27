function gerarPoupanca(){
    event.preventDefault();
    var tabela = document.getElementById("tabela");
    var form = document.getElementById("formulario");
    var novamente = document.getElementById("novamente");
    var objetivo = parseFloat(document.getElementById("objetivo").value);
    var inicial = parseFloat(document.getElementById("inicial").value);
    var mensal = parseFloat(document.getElementById("mensal").value);

    form.style.display = 'none'
    novamente.style.display = 'block'

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
    var tabela = document.getElementById("tabela");
    var form = document.getElementById("formulario");
    var novamente = document.getElementById("novamente");
    form.style.display = 'flex'
    novamente.style.display = 'none'
    tabela.innerHTML = ""
}