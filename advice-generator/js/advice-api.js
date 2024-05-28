const randomAdvice = document.querySelector('#get-random-advice');
const advice = document.querySelector('#advice-text');
const id = document.querySelector('#advice-id');

const RandomID = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

const adviceSlip = async () => {
	try {
		let randomID = RandomID(1, 100);
		let res = await fetch(`https://api.adviceslip.com/advice/${randomID}`);
		let data = await res.json();
		PrintAdvice(data.slip);
	} catch (error) {
		console.log(`Erro: ${error}`);
	}
};

adviceSlip();

const PrintAdvice = (text) => {
	advice.textContent = `"${text.advice}"`;
	id.textContent = text.id;
};

randomAdvice.addEventListener('click', adviceSlip);
