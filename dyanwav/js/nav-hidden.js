const NavHidden = document.querySelector('.nav-hidden');
const BurgerMenu = document.querySelector('#burger-menu');
const xMark = document.querySelector('#xmark');
const body = document.querySelector('html');

BurgerMenu.addEventListener('click', () => {
	NavHidden.classList.remove('hidden');
});

xMark.addEventListener('click', () => {
	NavHidden.classList.add('hidden');
});
