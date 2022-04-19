const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
	header.innerHTML =
		'<img src="https://i.picsum.photos/id/144/1000/800.jpg?hmac=5_nELwZsH9Ck2Xx0h_d5qYS6qejdSQyBNmX3SZ3TMKw" alt="" />';
	title.innerHTML = 'Lorem ipsum dolor sit amet';
	excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis';
	profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/29.jpg" alt="" />';
	name.innerHTML = 'John Doe';
	date.innerHTML = 'Apr 13, 2022';

	animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
	animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
