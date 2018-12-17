$(document).ready(function () {

    $('#get-data').click(function () {
        //        console.log('click');
        $.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl', function(data){
//            console.log(data);
            var parId = $('<p>'); //tworzenie elementu w jQuery - analogia do document.createElement();
//            console.log(data);
            parId.text('User id: ' + data.userId); //przekazujemy jako text do stworzonego elementu czyli tutaj paragrafu
//            $('body').append(parId); //dodadjemy na stronie
            
            var parName = $('<p>');
            parName.text('User name: ' + data.userName);            
//            $('body').append(parName);
            
            var parUrl = $('<p>');
            parUrl.text('User URL: ' + data.userURL);            
//            $('body').append(parUrl);
            
            var userDiv = $('<div>');
            $(userDiv).append(parId, parName, parUrl); //podpinam do Diva trzy paragrafy powyższe
            $('body').append(userDiv); //podpinam Diva do Body w drzewie     DOM
            
//            $('body').append(parId, parName, parUrl); //można trzy parametry w jednym w jQuery, a w JS nie
            
            });
        });
    });
//});