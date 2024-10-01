const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')

function posicionarBotao() {
    const container = document.getElementById('main');

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