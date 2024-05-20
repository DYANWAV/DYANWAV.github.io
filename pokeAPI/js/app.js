const listaPokemons = document.querySelector('#listaPokemons');
const btnsHeader = document.querySelectorAll('.btn-header');

let URL = 'https://pokeapi.co/api/v2/pokemon/';


const pokeAPI = async() => {
  for(let i=1; i<=151; i++) {
    const res = await fetch(URL + i)
    const data = await res.json()
    mostrarPokemon(data)
  }
}

pokeAPI()

const mostrarPokemon = (data) => {

  let types = data.types.map(type => `<p class='${type.type.name} tipo'>${type.type.name}</p>`)
  types = types.join(' ');
  
  let pokeID = data.id.toString();
  
  if(pokeID.length === 1) {
    pokeID = '00' + pokeID;
  } else if (pokeID.length === 2) {
    pokeID = '0' + pokeID;
  }
  
	const div = document.createElement('div');
	div.classList.add('pokemon');
	div.innerHTML = `
        <p class="pokemon-id-back">#${pokeID}</p>
        <div class="pokemon-imagen">
          <img
            src="${data.sprites.other['official-artwork'].front_default}"
            alt="${data.name}" />
        </div>

        <div class="pokemon-info">
          <div class="nombre-contenedor">
            <h2 class="pokemon-nombre">${data.name}</h2>
            <p class="pokemon-id">#${pokeID}</p>
          </div>
          <div class="pokemon-tipos">
            ${types}
          </div>

          <div class="pokemon-stats">
            <p class="stat">${data.height}m</p>
            <p class="stat">${data.weight}kg</p>
          </div>
        </div>
    `;

	listaPokemons.appendChild(div);
};

btnsHeader.forEach(btn => btn.addEventListener('click', e => {
  const btnID = e.target.id;
  listaPokemons.innerHTML = '';

  const pokeAPI = async() => {
    for (let i = 1; i <= 151; i++) {
      const res = await fetch(URL + i)
      const data = await res.json()

      if(btnID === 'ver-todos') {
        mostrarPokemon(data);
      } else {
        const buscaTypes = data.types.map(type => type.type.name);

        if(buscaTypes.some(type => type.includes(btnID))) {
          mostrarPokemon(data)
        }
      }
        
    }
  }

  pokeAPI()
 
}))