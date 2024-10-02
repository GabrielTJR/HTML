const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const pergunta = document.getElementById('pergunta')
const container = document.getElementById('main');
const header = document.getElementById('header')
let confirmadas = 0

function posicionarBotao() {

    // Tamanho do botão
    const botaoWidth = button2.offsetWidth;
    const botaoHeight = button2.offsetHeight;

    // Dimensões do container
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Cálculo da posição aleatória
    const posX = Math.random() * (containerWidth - botaoWidth);
    const posY = Math.random() * (containerHeight - botaoHeight);

    // Aplicando a nova posição ao botão
    button2.style.left = `${posX}px`;
    button2.style.top = `${posY}px`;
}

function confirmar(){
    switch(confirmadas){
        case 0:
            pergunta.innerText = "Tem certeza?"
            break
        case 1:
            pergunta.innerText = "Absoluta?"
            break
        case 2:
            pergunta.innerText = "Verdade mesmo?"
            break
        case 3:
            pergunta.innerText = "Bastante?"
            break
        case 4:
            pergunta.innerText = "Do fundo do coração?"
            break
        case 5:
            pergunta.innerText = "O amor te ama muito mais!!!"
            button1.style.display = 'none'
            button2.style.display = 'none'
            container.style.backgroundImage = 'url(./amores.jpg)'
            break
    }
    header.style.backgroundColor = 'gray';
    setTimeout(() => {
        header.style.backgroundColor = 'transparent';
    }, 500);
    confirmadas++
}