$(document).ready(function(){
   
    /* Pobieranie treści elementu */
    var headingText = $('#first').text();
    console.log(headingText);

    /* Ustawianie nowej zawartości tekstowej */
    $('#first').text('Nowy nagłówej'); //nie można dodawać znaczników html
    
    /* Ustawianie nowej zawartości jako kodu html */
    $('#first').html('Nowy nagłówej ze <span>spanem</span>');
    
    /* wstaw zawartości na końcu */
    $('#first').append(' na końcu'); //czesto używane
    
    /* wstaw zawartości na początku*/
    $('#first').prepend('Na początku ');
    
    /* wstaw zawartości na początku*/
    $('#first').before('Przed h1');
    
    /* wstaw zawartości po*/
    $('#first').after('<h2>Po h1</h2>'); //często używane
    
    /* Usuwanie zawartości */
    $('ul').empty();
    
    /* Modyfikacja wyglądu */
    $('p').css('font-family', 'Roboto, sans-serif');
    //$('p').eq(0).css({fontStyle: 'italic', fontSize: '3em'});
    // lub
    $('p:first-of-type').css({fontStyle: 'italic', fontSize: '3em'});
    
    /* Dodawanie klasy */
    $('p').eq(0).addClass('first-paragraph');
    
    
    
    
    
});