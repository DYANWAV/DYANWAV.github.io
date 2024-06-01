const form = document.querySelector('#form');
const inputs = document.querySelectorAll('#form input, #form textarea');

const regex = {
	first_name: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜüs]{2,15}$/,
	last_name: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜüs]+$/,
	email: /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/,
	message: /^.{1,255}$/,
};

const {first_name, last_name, email, message} = regex;

const AddRemove = (regex, i) => {
	if (regex.test(i.value)) {
		i.classList.add('fino');
		i.classList.remove('nega');
	} else {
		i.classList.add('nega');
		i.classList.remove('fino');
	}
};

const validarForm = (e) => {
	const i = e.target;

	switch (i.name) {
		case 'first_name':
			AddRemove(first_name, i);
			break;

		case 'last_name':
			AddRemove(last_name, i);
			break;

		case 'email':
			AddRemove(email, i);
			break;

		case 'message':
			AddRemove(message, i);
			break;
	}
};

inputs.forEach((input) => {
	input.addEventListener('keyup', validarForm);
	input.addEventListener('blur', validarForm);
});

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const data = Object.fromEntries(new FormData(e.target));

	form.reset();
	inputs.forEach((input) => {
		input.classList.remove('fino');
	});
});
