const faqsCard = document.querySelector('.faqs-card');
const questions = document.querySelectorAll('.question');

faqsCard.addEventListener('click', (e) => {
	const x = e.target.classList;
	const question = e.target;
	if (x.contains('h3') || x.contains('icon-plus') || x.contains('icon-minus')) {
		const parent = question.parentNode;
		parent.classList.toggle('active');
		console.log(parent);
	}
});
