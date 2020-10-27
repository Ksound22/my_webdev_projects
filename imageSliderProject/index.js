//alert("Hello World!");

var images = [
	'freeCodeCamp.png',
	'Laurence.png',
	'Ryan.png',
	'Qaifi.png',
	'w3schools.png',
	'Codeliber.png',
	'Nithya.png',
	'DThompson.png',
	'Emmanuel.png',
	'Esther.png',
	'Milica.png',
	'Mina.png',
	'Jessy.png',
	'Bots.png',
	'everyone.png',
	'Kallaway.png'   
];

var num = 0;
function next() {
	var slider = document.getElementById('slider');
	num++;
	if(num >= images.length) {
		num = 0;
	}
	slider.src = images[num];
}

function prev() {
	var slider = document.getElementById('slider');
	num--;
	if(num < 0) {
		num = images.length-1;
	}
	slider.src = images[num];
}; 

