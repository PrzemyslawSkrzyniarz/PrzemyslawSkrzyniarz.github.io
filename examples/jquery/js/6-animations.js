$(document).ready(function() {
   
    /* Znikanie i pojawianie */
    
//    $('#first').hide(3000).show(3000);
    
    /* Ściemnianie i zanikanie */
    
//    $('#first').fadeOut(3000).fadeIn(3000);
    
    /* Zasłanianie i odsłanianie */
    
//    $('#first').slideUp(3000).slideDown(3000);
    
    /* Przeładowanie strony i załadowanie innego adresu */
//    $('#first').slideUp(3000).slideDown(3000, function() {
//        window.location.href = 'https://google.com';
//    });
    
    /* Animacje niestandardowe - transform i animacja koloru - tego się nie da w jQuery */
    
//    $('#first').animate({fontSize: '3em'}, 2000, function() {
//        alert('koniec animacji');
//    });
    
    
    $('#first').css({transform: 'rotateX(180deg)',
                    transition: 'all 3s'});
    
    
});