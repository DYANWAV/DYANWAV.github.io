const pokeCard = document.querySelector('.poke-card');
const pokeName = document.querySelector('.poke-name');
const pokeImgContainer = document.querySelector('.poke-figure');
const pokeImg = document.querySelector('.poke-image');
const pokeId = document.querySelector('.poke-id');
const pokeTypes = document.querySelector('.poke-types');
const pokeStats = document.querySelector('.poke-stats');
const pokeForm = document.querySelector('.poke-form');

const typeColors = {
	electric: '#FFEA70',
	normal: '#B09398',
	fire: '#FF675C',
	water: '#0596C7',
	ice: '#AFEAFD',
	rock: '#999799',
	flying: '#7AE7C7',
	grass: '#4A9681',
	psychic: '#FFC6D9',
	ghost: '#561D25',
	bug: '#A2FAA3',
	poison: '#795663',
	ground: '#D2B074',
	dragon: '#DA627D',
	steel: '#1D8A99',
	fighting: '#2F2F2F',
	default: '#2A1A1F',
};

const fetchPoke = async (value) => {
	console.log(value);
	try {
		const res = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`
		);
		const data = await res.json();
		renderPokemon(data);
	} catch (error) {
		renderNotFound();
	}
};

pokeForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const {value} = e.target.pokemon;
	if (value.toLowerCase() === 'camila') {
		PintarFotoCamila();
	} else {
		fetchPoke(value);
	}
});

const renderPokemon = (data) => {
	const sprite = data.sprites.front_default;
	const {types, stats} = data;

	pokeName.textContent = data.name;
	pokeImg.setAttribute('src', sprite);
	pokeId.textContent = `Nº ${data.id}`;
	setCardColor(types);
	renderPokemonTypes(types);
	renderPokemonStats(stats);
};

const setCardColor = (types) => {
	const colorOne = typeColors[types[0].type.name];
	const colorTwo = types[1]
		? typeColors[types[1].type.name]
		: typeColors.default;
	pokeImg.style.background = `radial-gradient(${colorOne} 33%, ${colorTwo}) 33%`;
	pokeImg.style.backgroundSize = ' 5px 5px';
};

const renderPokemonTypes = (types) => {
	pokeTypes.innerText = '';
	types.forEach((type) => {
		const typesContainer = document.createElement('div');
		typesContainer.style.color = typeColors[type.type.name];
		typesContainer.textContent = type.type.name;
		pokeTypes.appendChild(typesContainer);
	});
};

const renderPokemonStats = (stats) => {
	pokeStats.innerText = '';
	for (stat in stats) {
		const statsContainer = document.createElement('div');
		const statName = document.createElement('div');
		const statAmount = document.createElement('strong');
		statName.textContent = stats[stat].stat.name;
		statAmount.textContent = stats[stat].base_stat;
		statName.append(statAmount);
		statsContainer.append(statName);
		pokeStats.append(statName);
	}
};

const renderNotFound = () => {
	pokeName.textContent = 'Tas Loco';
	const pokeShadowPng =
		'https://raw.githubusercontent.com/accesibleprogramacion/pokedex/main/poke-shadow.png';
	pokeImg.setAttribute('src', pokeShadowPng);

	pokeImg.style.background = 'transparent';
	pokeTypes.innerText = '';
	pokeStats.innerText = '';
	pokeId.innerText = '';
};

const PintarFotoCamila = () => {
	pokeStats.textContent = '';
	pokeName.textContent = 'Camila';
	const fotoCamila = 'img/camila.jpeg';
	pokeImg.setAttribute('src', fotoCamila);
	pokeImg.style.borderRadius = '0';
	// pokeImg.style.clipPath = 'inset(0 0 10px 0)';
	pokeTypes.innerText = 'PAPI TAS LOCO';

	// vida
	const vida = document.createElement('span');
	vida.textContent = 'Vida';
	// vida valor
	const vidaValor = document.createElement('strong');
	vidaValor.textContent = '0. No tengo corazón';
	// div
	const div = document.createElement('div');
	div.append(vida, vidaValor);

	// ataque especial
	const ataqueEspecial = document.createElement('span');
	ataqueEspecial.textContent = 'Ataque Especial';
	// ataque especial valor
	const ataqueEspecialValor = document.createElement('strong');
	ataqueEspecialValor.textContent = 'Te ilusiono y me voy';
	// div2
	const div2 = document.createElement('div');
	div2.append(ataqueEspecial, ataqueEspecialValor);

	// distancia
	const distancia = document.createElement('span');
	distancia.textContent = 'Distancia';
	const distanciaValor = document.createElement('strong');
	distanciaValor.textContent = 'Lejos de tu alcance';

	const div3 = document.createElement('div');
	div3.append(distancia, distanciaValor);

	pokeStats.append(div, div2, div3);
};
