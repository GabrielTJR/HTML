var img, id;
function getPokemons(){
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=50&limit=50')
    .then(response => response.json())
    .then(pokemons => {

        const cards = document.getElementById('posts');
        

        pokemons.results.forEach(pokemon => {
            const card = document.createElement('div');
            fetch(pokemon.url)
            .then(response => response.json())
            .then(pokemon_1url => {
                fetch(pokemon_1url.forms[0].url)
                .then(response => response.json())
                .then(pokemon_2url => {
                    img = pokemon_2url.sprites.front_default;
                    id = pokemon_2url.id;
                })
            })
            

            card.className = 'card col-2 m-2'
            card.innerHTML = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${img}.png">
            <div class='card-body pb-0'>
                <h2 class = 'card-title fs-6 pb-0'>${pokemon.name} </h2>
            </div>
            <div class = 'card-footer text-end'>ID: ${id} </div>`;

            cards.appendChild(card);
        });
    })
}

document.addEventListener('DOMContentLoaded', getPokemons)