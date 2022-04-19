const nav = document.querySelector('.nav');
window.addEventListener('scroll', fixNav);

function fixNav() {
	if (window.scrollY > nav.offsetTop + 150) {
		nav.classList.add('active');
	} else {
		nav.classList.remove('active');
	}
}
