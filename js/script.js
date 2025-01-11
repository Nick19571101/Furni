window.onload = function () {
	const mobileMenu = document.getElementById('mobile-menu')
	const navList = document.querySelector('.nav-list')
	const iconMenu = document.querySelector('.icon-menu')

	mobileMenu.addEventListener('click', () => {
		navList.classList.toggle('active')
		iconMenu.classList.toggle('active')
	})
}
const swiper = new Swiper('.slider-swiper', {
	loop: true,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})
