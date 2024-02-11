const options = {
	root: null,
	rootMargin: "0px",
	threshold: 0.5,
};

const observerEffect = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('start-effect');
			observerEffect.unobserve(entry.target);
		}
	});
}, options);
document.querySelectorAll('.js-effect').forEach(element => {
	observerEffect.observe(element);
});

const observerSkills = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.remove('js-skills-title');
			observerEffect.unobserve(entry.target);
		}
	});
}, options);

document.querySelectorAll('.js-skills-title').forEach(element => {
	observerSkills.observe(element);
});