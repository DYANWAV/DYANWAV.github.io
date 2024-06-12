const btnContainer = document.querySelector('.buttons-container');
const buttons = document.querySelectorAll('.btn');
const h2 = document.querySelector('h2');

btnContainer.addEventListener('click', (e) => {
	if (e.target.matches('BUTTON')) {
		buttons.forEach((button) => button.classList.remove('active'));
		e.target.classList.add('active');
		h2.textContent = e.target.textContent;
	}

	if (e.target.matches('svg') || e.target.matches('path')) {
		buttons.forEach((button) => button.classList.remove('active'));
		e.target.closest('BUTTON').classList.add('active');
		h2.textContent = e.target.closest('BUTTON').textContent;
	}
});
