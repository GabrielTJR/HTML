var pagina = 1;
var inicio = 0;

const cards = document.getElementById('posts');
const proxPagina = document.getElementById('proxPagina');
const voltPagina = document.getElementById('voltPagina');
const paginas = document.getElementById('paginas');
const atualPagina = document.getElementById('atualPagina');
const voltarbutton = document.getElementById('voltar')

function getPokemons() {
    cards.innerHTML = '';
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${inicio}&limit=50`)
        .then(response => response.json())
        .then(pokemons => {
            const consultas = pokemons.results.map(pokemon => 
                fetch(pokemon.url)
                    .then(response => response.json())
                    .then(pokemonInfo => 
                        fetch(pokemonInfo.forms[0].url)
                            .then(response => response.json())
                            .then(pokemonForma => ({
                                nome: pokemon.name,
                                img: pokemonForma.sprites.front_default,
                                id: pokemonForma.id
                            }))
                    )
            );

            Promise.all(consultas).then(pokemons => {
                pokemons.forEach(({nome, img, id }) => {
                    criarCard(nome, img, id);
                });
            });
        });
        atualPagina.innerText = `Página: ${pagina}`
}

function pesquisarPokemon(){
    cards.innerHTML = '';
    const pesquisa = document.getElementById('pesquisa').value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1302`)
        .then(response => response.json())
        .then(pokemons => {
            const pokemonEncontrado = pokemons.results.find(pokemon => pokemon.name.toLowerCase() == pesquisa);
            if (pokemonEncontrado) {
                fetch(pokemonEncontrado.url)
                    .then(response => response.json())
                    .then(pokemonInfo => {
                        fetch(pokemonInfo.forms[0].url)
                            .then(response => response.json())
                            .then(pokemonForma => {
                                criarCard(pokemonForma.name, pokemonForma.sprites.front_default, pokemonForma.id);
                            });
                    });
            } else {
                criarCard('Nenhum Pokemon Encontrado', './assets/imagem/nonePokemon.png', '#')
            }
            
        });
    paginas.style.display = 'none';
    voltarbutton.style.display = 'flex';

}

function buscarPagina(){
    pagina = parseInt(document.getElementById('paginaPesquisa').value);
    inicio = (pagina-1)*50;
    getPokemons();
}

function voltar(){
    paginas.style.display = 'flex';
    voltarbutton.style.display = 'none';
    getPokemons();
}

function criarCard(nome, img, id){
    const card = document.createElement('div');
    card.className = 'card col-2 m-2';
    card.innerHTML = `
        <img src="${img}">
        <div class='card-body pb-0'>
            <h2 class='card-title fs-6 pb-0'>${nome}</h2>
        </div>
        <div class='card-footer text-end'>ID: ${id}</div>`;
    cards.appendChild(card);
}

function passarPagina(){
    inicio+=50;
    pagina++;
    getPokemons();
    if(pagina == 1){
        voltPagina.style.display = 'block'
    }
}

function voltarPagina(){
    inicio-=50;
    pagina--;
    getPokemons();
    if(pagina == 0){
        voltPagina.style.display = 'none'
    }
}

document.addEventListener('DOMContentLoaded', getPokemons)