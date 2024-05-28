const getRandomAdvice = document.querySelector('#get-random-advice');
const advice = document.querySelector('#advice-text');
const id = document.querySelector('#advice-id');
const diceIcon = document.querySelector('.dice-icon');

const RandomID = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

const adviceSlip = async () => {
	try {
		let randomID = RandomID(1, 224);
		let res = await fetch(`https://api.adviceslip.com/advice/${randomID}`);
		let data = await res.json();
		PrintAdvice(data.slip);
	} catch (error) {
		console.log(`Error: ${error}`);
	}
};

adviceSlip();

const PrintAdvice = (text) => {
	advice.textContent = `"${text.advice}"`;
	id.textContent = text.id;
};

getRandomAdvice.addEventListener('click', adviceSlip);
getRandomAdvice.addEventListener('click', () => {
	diceIcon.classList.add('animate-dice');
	setTimeout(() => {
		diceIcon.classList.remove('animate-dice');
	}, 600);
});
