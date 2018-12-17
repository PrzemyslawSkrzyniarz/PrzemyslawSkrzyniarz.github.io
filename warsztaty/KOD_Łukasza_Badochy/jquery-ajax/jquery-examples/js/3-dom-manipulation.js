$(document).ready(function() {
	
	/* Pobieranie treści elementu */
	var headingText = $('#first').text();
	console.log(headingText);
	
	/* Ustawianie nowej zawartości tekstowej */
	$('#first').text('Nowy nagłówek');
	
	/* Ustawianie nowej zawartości jako kodu html */
	$('#first').html('Nowy nagłówek ze <span>spanem</span>');
	
	/* Wstawianie zawartości na końcu */
	$('#first').append(' na końcu');
	
	/* Wstawianie zawartości na początku */
	$('#first').prepend('Na początku ');
	
	/* Wstawianie zawartości przed */
	$('#first').before('<h2>Przed h1</h2>');
	
	/* Wstawianie zawartości po */
	$('#first').after(' Po h1');
	
	/* Usuwanie zawartości */
	$('ul').empty();
	
	/* Modyfikacja wyglądu */
	$('p').css('font-family', 'Roboto, sans-serif');
	$('p').eq(0).css({fontStyle: 'italic', fontSize: '3em'});

	/* Dodawanie klasy */
	$('p').eq(0).addClass('first-paragraph');

});