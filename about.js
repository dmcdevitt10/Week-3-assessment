console.log("hello world");
let image = document.querySelector('img')


function handleSubmit(e) {
	e.preventDefault();
	alert('Form has been submitted');
}

function imageAlert(){
	alert('You are amazing')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
image.addEventListener('mouseover', imageAlert)