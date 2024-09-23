var pagina = 0;
var inicio = 0;
var limite = 50;

function getPokemons() {
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${inicio}&limit=${limite}`)
        .then(response => response.json())
        .then(pokemons => {
            const cards = document.getElementById('posts');
            cards.innerHTML = '';
            const consultas = pokemons.results.map(pokemon => 
                fetch(pokemon.url)
                    .then(response => response.json())
                    .then(pokemon_1url => 
                        fetch(pokemon_1url.forms[0].url)
                            .then(response => response.json())
                            .then(pokemon_2url => ({
                                name: pokemon.name,
                                img: pokemon_2url.sprites.front_default,
                                id: pokemon_2url.id
                            }))
                    )
            );

            Promise.all(consultas).then(pokemons => {
                pokemons.forEach(({ name, img, id }) => {
                    const card = document.createElement('div');
                    card.className = 'card col-2 m-2';
                    card.innerHTML = `
                        <img src="${img}">
                        <div class='card-body pb-0'>
                            <h2 class='card-title fs-6 pb-0'>${name}</h2>
                        </div>
                        <div class='card-footer text-end'>ID: ${id}</div>`;
                    cards.appendChild(card);
                });
            });
        });
}

function passarPagina(){
    inicio+=50;
    limite+=50;
    getPokemons();
}

function voltarPagina(){
    inicio-=50;
    limite-=50;
    getPokemons();
}

document.addEventListener('DOMContentLoaded', getPokemons)