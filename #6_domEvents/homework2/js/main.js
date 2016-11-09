let getRandomColor = require('js/getRandomColorModule.js');
console.log(getRandomColor());

let button = document.querySelector('.button');

button.addEventListener('mouseover', function(e) {
	e.preventDefault();
	console.log(getRandomColor());
	button.style.backgroundColor = getRandomColor();
	// button.style.color = getRandomColor();
});