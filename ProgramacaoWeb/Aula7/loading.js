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
        .then(data => {
            let allMinicards = '';
            for (let i = 0; i < 5; i++) {
                allMinicards += data;
            }
            document.getElementById('minicards-mainpage').innerHTML = allMinicards;
        });
}

document.addEventListener('DOMContentLoaded', loadMiniCard)

function loadBigCard(){

    fetch('bigcard.html')
        .then(response => response.text())
        .then(data => {
            let allBigcards = '';
            for (let i = 0; i < 3; i++) {
                allBigcards += data;
            }
            document.getElementById('bigcards-mainpage1').innerHTML = allBigcards;
        });
        
        fetch('bigcard.html')
            .then(response => response.text())
            .then(data => {
                let allBigcards = '';
                for (let i = 0; i < 3; i++) {
                    allBigcards += data;
                }
                document.getElementById('bigcards-mainpage2').innerHTML = allBigcards;
            });
}

document.addEventListener('DOMContentLoaded', loadBigCard)

function loadFacilidades(){

    fetch('facilidades.html')
        .then(response => response.text())
        .then(data => document.getElementById('facilidades').innerHTML = data)
}

document.addEventListener('DOMContentLoaded', loadFacilidades)