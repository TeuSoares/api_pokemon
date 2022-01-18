var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/home/',
        url: 'index.html',
      },
    ],
    // ... other parameters
  });
  var mainView = app.views.create('.view-main');

const n_pokemon = 964;

const FetchPokemon = async () =>{
  for(var i=1; i<=n_pokemon; i++){
    await getData(i);
  }
}

// Função assíncrona
async function getData(id){ // async = declarar que a função é assíncrona
  // const api_url = "https://pokeapi.co/api/v2/pokemon/";
  const api_url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(api_url);
  const pokemon = await response.json();
  // console.log(pokemon);
  // let nome = document.querySelector(".item-title").innerHTML = pokemon.name;
  conteudo_Pokemon(pokemon);
}

FetchPokemon();

const pokemon_container = document.querySelector("#pokemon_container");

function conteudo_Pokemon(pokemon){
  const DIVpokemon = document.createElement("li");
  const types = pokemon.types.map(type => type.type.name);

  DIVpokemon.classList.add("item-content");
  DIVpokemon.classList.add(`${types[0]}`);

  const TagsPokemon = `
    <div class='col text-center'>
      <div class='img-pokemon'>
      <img src='${pokemon.sprites.front_default}'>
      </div>
      <h1 class='item-title'>${pokemon.name} | <small>ID:${pokemon.id}</small></h1>
      <h2 class='item-types item-text'>${types}</h2>
      <small>Weight: ${pokemon.weight}</small>
      <small>Height: ${pokemon.height}</small>
    </div>
  `;

  DIVpokemon.innerHTML = TagsPokemon;
  pokemon_container.appendChild(DIVpokemon);
}

// create searchbar
var searchbar = app.searchbar.create({
  el: '.searchbar',
  searchContainer: '.list',
  searchIn: '.item-title, .item-types',
});