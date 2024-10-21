function loadNavBar(){

    fetch('components/navbar.html')
        .then(response => response.text())
        .then(data => document.getElementById('header').innerHTML = data)
}

document.addEventListener('DOMContentLoaded', loadNavBar)

function loadSelect(){
    var select = document.getElementById('select');
    for(i=0; i<7; i++){
        select.innerHTML += 
        `<select class="p-3 col form-select" aria-label="Default select example">
            <option selected>Select</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>`
        
    }
}

document.addEventListener('DOMContentLoaded', loadSelect)

function loadMiniCard(){
    for(i=0; i<12; i++){
        fetch('components/minicard.html')
            .then(response => response.text())
            .then(data => document.getElementById('cards').innerHTML += data)
    }
}

document.addEventListener('DOMContentLoaded', loadMiniCard)