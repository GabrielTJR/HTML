let filme = document.getElementById('filme');
filme.innerHTML = sessionStorage.getItem('filmeSelecionado');

let infCompra = document.getElementById('infCompra');

let qntPoltronas = sessionStorage.getItem('qntPoltronas')
let polSelecionada = sessionStorage.getItem(`poltrona${0}`)

let polt = document.getElementById('polt')
let comb = document.getElementById('comb')
let prec = document.getElementById('prec')
let paga = document.getElementById('paga')

polt.innerHTML += `${polSelecionada}`
for(let i=1; i<qntPoltronas; i++){
    polSelecionada = sessionStorage.getItem(`poltrona${i}`)
    polt.innerHTML += `, ${polSelecionada}`
}

let qntCombos = sessionStorage.getItem('qntCombos')
let combSelecionado = sessionStorage.getItem(`combo${0}`)
comb.innerHTML += `${combSelecionado}`
for(let i=1; i<qntCombos; i++){
    combSelecionado = sessionStorage.getItem(`combo${i}`)
    comb.innerHTML += `, ${combSelecionado}`
}

let valorTotal = sessionStorage.getItem('valorTotal');
prec.innerHTML = `R$ ${valorTotal}`

let metodoPag = sessionStorage.getItem('metodoPag')
paga.innerHTML = metodoPag
