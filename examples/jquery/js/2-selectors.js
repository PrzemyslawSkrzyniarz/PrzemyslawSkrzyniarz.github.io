$(document).ready(function(){
    
    /* selektory id */
    var heading = $('#first');
    
    console.log(heading);
    
    /* selektor klasy*/ 
    var listItems = $('.item');
    //var listItems = $('.item:nth-of-type(even)'); //po parzystych - opcja
    console.log(listItems);
    listItems.css('background-color', 'red');
    
//    Opcja w JS poniżej
    
//    var listItems = document.getElementsByClassName('item');
//    console.log(listItems);
//    listItems.style.backgroundFColor = 'red';
    
});




