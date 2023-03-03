let color = document.querySelector('#color')
let place = document.querySelector('#place')
let ritual = document.querySelector('#ritual')
let submit = document.querySelector('.submit-button')

function colorAlert(){
    alert('My favorite color is maroon')
}

function placeAlert(){
    alert('My favorite place is my bed')
}

function ritualAlert(){
    alert('My favorite ritual is 8+ hours of sleep every night')
}

function suggestion(e) {
	e.preventDefault();
	alert('Thank you for your suggestion!');
}

color.addEventListener('click', colorAlert)
place.addEventListener('click', placeAlert)
ritual.addEventListener('click', ritualAlert)
submit.addEventListener('click', suggestion)