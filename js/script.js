const buttons = document.querySelectorAll('[data-button]')
const counterTextElem = document.getElementById('counter')
const image = document.querySelector('img')
const menu = document.getElementById('menu')
const subMenu = document.getElementById('sub-menu')
const dayButton = document.getElementById('day-button')
const nightButton = document.getElementById('night-button')
const counterPage = document.getElementById('counter-page')

let count = 0;

menu.addEventListener('mouseleave', () => {
	subMenu.classList.remove('visible')
	subMenu.classList.add('hidden')
})

subMenu.addEventListener('mouseleave', ()=> {
	subMenu.classList.remove('visible')
	subMenu.classList.add('hidden')
})

image.addEventListener('mouseover', () => {
	subMenu.classList.remove('hidden')
	subMenu.classList.add('visible')
})

dayButton.addEventListener('click', ()=>{
	counterPage.classList.remove('night-mode')
	counterPage.classList.add('day-mode')
	for (let button of buttons) {
		button.style.color = 'rgba(13,73,116,0.9)'
		button.style.backgroundColor = 'rgba(0,0,0,0.10)'
	}
})

nightButton.addEventListener('click', ()=>{
	counterPage.classList.remove('day-mode')
	counterPage.classList.add('night-mode')
	for (let button of buttons) {
		button.style.color = 'rgba(147,233,255,0.8)'
		button.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
	}
})

buttons.forEach(button => {
	button.addEventListener('click', ()=> {
		if (button.innerText === '+') {
			count++
		} else {
			count--
		}
		updateDisplay()
	})
})

function updateDisplay(){
	counterTextElem.innerText = `${count}`
}

