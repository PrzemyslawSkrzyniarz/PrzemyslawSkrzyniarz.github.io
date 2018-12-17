$(document).ready(function() {
	
	/* Selektor id */
	var heading = $('#first');
	console.log(heading);
	
	
	/* Selektor klasy */
	var listItems = $('.item:nth-of-type(even)');
	console.log(listItems);
	listItems.css('background-color', 'red');
	
//	var listItems = document.getElementsByClassName('item');
//	console.log(listItems);
//	listItems.style.backgroundColor = 'red';
	
});




