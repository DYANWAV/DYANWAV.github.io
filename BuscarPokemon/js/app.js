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
	fetchPoke(value);
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
		console.log(stats[stat].stat.name);
		console.log(stats[stat].base_stat);
		// console.log(stats[stat].base_stat);
	}
};

const renderNotFound = () => {
	pokeName.textContent = 'Papi Tas Loco';
	const pokeShadowPng =
		'https://raw.githubusercontent.com/accesibleprogramacion/pokedex/main/poke-shadow.png';
	pokeImg.setAttribute('src', pokeShadowPng);
	pokeImg.style.background = 'transparent';
	pokeTypes.innerText = '';
	pokeStats.innerText = '';
	pokeId.innerText = '';
};
