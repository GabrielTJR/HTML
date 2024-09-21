function getPokemons(){
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=50')
    .then(response => response.json())
    .then(pokemons => {

        const cards = document.getElementById('posts');

        pokemons.results.forEach((pokemon, index) => {
            const card = document.createElement('div');
            card.className = 'card col-2 m-2'
            card.innerHTML = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png">
            <div class='card-body pb-0'>
                <h2 class = 'card-title fs-6 pb-0'>${pokemon.name} </h2>
            </div>
            <div class = 'card-footer text-end'>ID: ${index+1} </div>`;

            cards.appendChild(card);
        });
    })
}

document.addEventListener('DOMContentLoaded', getPokemons)