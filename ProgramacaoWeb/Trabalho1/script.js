var card1 = document.getElementById("filme1");
var card2 = document.getElementById("filme2");
var card3 = document.getElementById("filme3");
var card4 = document.getElementById("filme4");
var card5 = document.getElementById("filme5");
var card6 = document.getElementById("filme6");


var describe1 = document.getElementById("describe1");
var describe2 = document.getElementById("describe2");
var describe3 = document.getElementById("describe3");
var describe4 = document.getElementById("describe4");
var describe5 = document.getElementById("describe5");
var describe6 = document.getElementById("describe6");

function verDescricao(filme){
    if(filme == 1){
        card1.style.display = "none";
        describe1.style.display = "flex";
    }else if(filme == 2){
        card2.style.display = "none";
        describe2.style.display = "flex";
    }else if(filme == 3){
        card3.style.display = "none";
        describe3.style.display = "flex";
    }else if(filme == 4){
        card4.style.display = "none";
        describe4.style.display = "flex";
    }else if(filme == 5){
        card5.style.display = "none";
        describe5.style.display = "flex";
    }else if(filme == 6){
        card6.style.display = "none";
        describe6.style.display = "flex";
    }
}

function verCapa(filme){
    if(filme == 1){
        card1.style.display = "flex";
        describe1.style.display = "none";
    }else if(filme == 2){
        card2.style.display = "flex";
        describe2.style.display = "none";
    }else if(filme == 3){
        card3.style.display = "flex";
        describe3.style.display = "none";
    }else if(filme == 4){
        card4.style.display = "flex";
        describe4.style.display = "none";
    }else if(filme == 5){
        card5.style.display = "flex";
        describe5.style.display = "none";
    }else if(filme == 6){
        card6.style.display = "flex";
        describe6.style.display = "none";
    }
}

function selecionarFilme(){
    
}