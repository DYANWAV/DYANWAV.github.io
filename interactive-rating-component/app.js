const ratingCard = document.querySelector('.rating-card');
const thankyouCard = document.querySelector('.thankyou-card');

const ratingForm = document.querySelector('#rating-form');
const youSelected = document.querySelector('#rated-value');

ratingForm.addEventListener('click', (e) => {
	e.preventDefault();
	PrintSelectedValue(e);
	showThankYouCard(e);
});

thankyouCard.addEventListener('click', (e) => {
	e.preventDefault();
	showRatingCard(e);
});

const PrintSelectedValue = (e) => {
	if (e.target.classList.contains('number-value')) {
		selectedValue = e.target.value;
		youSelected.textContent = selectedValue;
	}
};

const showThankYouCard = (e) => {
	if (e.target.classList.contains('submit')) {
		ratingCard.classList.add('hidden');
		thankyouCard.classList.remove('hidden');
	}
};

const showRatingCard = (e) => {
	if (e.target.classList.contains('try-again')) {
		ratingCard.classList.remove('hidden');
		thankyouCard.classList.add('hidden');
	}
};
