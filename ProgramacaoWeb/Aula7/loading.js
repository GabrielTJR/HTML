function loadNavBar(){

    fetch('navbar.html')
        .then(response => response.text())
        .then(data => document.getElementById('navbar-mainpage').innerHTML = data)
}

document.addEventListener('DOMContentLoaded', loadNavBar)

function loadCarousel(){

    fetch('carousel.html')
        .then(response => response.text())
        .then(data => document.getElementById('carousel-mainpage').innerHTML = data)
}

document.addEventListener('DOMContentLoaded', loadCarousel)

function loadMiniCard(){

    fetch('minicard.html')
        .then(response => response.text())
        .then(data => 
            document.getElementById('minicards-mainpage').innerHTML = data)
}

document.addEventListener('DOMContentLoaded', loadMiniCard)