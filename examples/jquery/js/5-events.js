/*$(document).ready(function() {
   
    function animateHeading() {
        $('#first').hide(500).show(500);
    }
    
    $('button').click(animateHeading);
    */
    /*$('button').click(function(){
      $('#first').hide(500).show(500);*/ 
//   });
//});

$(document).ready(function() {
   
    function animateHeading() {
        $('#first').hide(500).show(500);
    }
    
    $('button').click(animateHeading);
    $('button').click(function() {
        $(this).css('background-color', 'red');
    });
          
    $('#fname').focusin(function(){
        $('.alert').remove();
        $(this).after('<span class="alert">Podaj swoje prawdziwe imię</span>');
    });
    
    $('#fname').keypress(function(){
        //console.log('skasuj gdy wpisuję');
        $('.alert').remove();
    });
    
    
});

