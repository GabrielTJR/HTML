let menu = document.getElementById('menu');
let fechar = document.getElementById('fechar');
let opcoes = document.getElementById('opcoes');
let i=0;

function abrirMenu(){
    if(i == 0){
        opcoes.style.display = 'block'
        menu.style.display ='none'
        fechar.style.display = 'block'
        i++;
    }else{       
        opcoes.style.display = 'none'
        menu.style.display ='block'
        fechar.style.display = 'none'
        i =0;
    }
}