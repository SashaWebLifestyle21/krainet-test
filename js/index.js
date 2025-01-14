const burgerButton = document.querySelector('.burger-button')
const closeButton = document.querySelector('.navigation__button-close')
const navigation = document.querySelector('.hero-navigation')
const hero = document.querySelector('.hero')

const openMenu = () => {
	navigation.style.display = 'block'
	hero.classList.add('overlay')
	burgerButton.disabled = true
}
const closeMenu = () => {
	navigation.style.display = 'none'
	hero.classList.remove('overlay')
	burgerButton.disabled = false
}

burgerButton.addEventListener('click', () => {
	openMenu()
})

closeButton.addEventListener('click', () => {
	closeMenu()
})
