window.onscroll = function showHeader() {
	var header = document.querySelector('.header');
	if(window.pageYOffset > 0){
		header.classList.add('header_fixed');
	} else{
		header.classList.remove('header_fixed');
	}
}

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close-btn');
const links = document.querySelectorAll('header nav ul li a');

burger.addEventListener('click',e=>menu.classList.toggle('open'));
closeBtn.addEventListener('click',e=>menu.classList.remove('open'));
[...links].forEach(link=>link.addEventListener('click',e=>menu.classList.remove('open')));