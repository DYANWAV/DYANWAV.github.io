const acordeon = document.getElementById('acordeon');
const burgerMenu = document.getElementById('burger-menu');
const navHidden = document.getElementById('nav-hidden');
const burgerMenuQuitar = document.getElementById('burger-menu-quitar');

burgerMenu.addEventListener('click', () => {
	navHidden.classList.add('true');
});

burgerMenuQuitar.addEventListener('click', () => {
	navHidden.classList.remove('true');
});
