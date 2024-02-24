var type = 0
function avancar(){
    var foto = document.getElementById("foto")
    if(type == 4){
        foto.style.backgroundImage = "url(imagens/cortina.jpg)"
        type = 0
    }else if(type == 0){
        foto.style.backgroundImage = "url(imagens/foto1.jpg)"
        type = 1
    }
    else if(type == 1){
        foto.style.backgroundImage = "url(imagens/foto2.jpg)"
        type = 2
    }
    else if(type == 2){
        foto.style.backgroundImage = "url(imagens/foto3.jpg"
        type = 3
    }
    else{
        foto.style.backgroundImage = "url(imagens/foto4.jpg)"
        type = 4
    }    
}
function voltar(){
    var foto = document.getElementById("foto")
    if(type == 1){
        foto.style.backgroundImage = "url(imagens/cortina.jpg)"
        type = 0
    }else if(type == 2){
        foto.style.backgroundImage = "url(imagens/foto1.jpg)"
        type = 1
    }
    else if(type == 3){
        foto.style.backgroundImage = "url(imagens/foto2.jpg)"
        type = 2
    }
    else if(type == 4){
        foto.style.backgroundImage = "url(imagens/foto3.jpg)"
        type = 3
    }
    else{
        foto.style.backgroundImage = "url(imagens/foto4.jpg)"
        type = 4
    }    
}