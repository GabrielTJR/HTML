const imagensFundo = ["imagens/foto1.jpg", "imagens/foto2.jpg", "imagens/foto3.jpg", "imagens/foto4.jpg", "imagens/foto5.jpg", "imagens/foto6.jpg"];
let indiceAtual = 0;
const foto = document.getElementById("foto")
const fototext1 = document.getElementById("foto1")
const fototext2 = document.getElementById("foto2")


function avancar(){
    indiceAtual = (indiceAtual + 1) % imagensFundo.length;
    const proximaImagemURL = imagensFundo[indiceAtual];
    foto.style.opacity = 0;
    setTimeout(function() {
        foto.style.backgroundImage = `url('${proximaImagemURL}')`,
        foto.style.opacity = 1;
    }, 300);
}
function voltar(){
    if(indiceAtual == 0){        
        indiceAtual = imagensFundo.length;
    }
    indiceAtual = (indiceAtual - 1) % imagensFundo.length;
    const proximaImagemURL = imagensFundo[indiceAtual];
    foto.style.opacity = 0;
    setTimeout(function() {
        foto.style.backgroundImage = `url('${proximaImagemURL}')`,
        foto.style.opacity = 1;
    }, 300);  
}

setInterval(function() {
    indiceAtual = (indiceAtual + 1) % imagensFundo.length;
    const proximaImagemURL = imagensFundo[indiceAtual];
    fototext1.style.opacity = 0;
    setTimeout(function() {
        fototext1.style.backgroundImage = `url('${proximaImagemURL}')`,
        fototext1.style.opacity = 1;
    }, 300);
}, 5000);