var type = 0
function desaparece(){
    var foto = document.getElementById("foto")
    var botao = document.getElementById("botao")
    if(type == 0){
        foto.style.backgroundImage = "url(imagens/cortina.jpg)"
        botao.style.display = "none"
        type = 1
    }else{
        foto.style.backgroundImage = "url(imagens/foto2.jpg)"
        botao.style.display = "inline-block"
        type = 0
    }
}