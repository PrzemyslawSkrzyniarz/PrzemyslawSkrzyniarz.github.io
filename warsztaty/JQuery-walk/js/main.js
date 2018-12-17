$(document).ready(function () {
    //        console.log('jQuery działa');

    //    var userCount = + $('.user').length; //Dodane poniżej by liczyło po kliknięciu ilość elementów a nie tylko przy załadowaniu strony - i wstawiało włąściwy numer

    $('#add').click(function () {
        //        console.log('dodaj');
        var userCount = $('.user').length; //Tu liczy długość za każdym razem gdy klikniemy czyli po kliknięciu a przed wstawieniem
        $('.users-list').append('<li class="user">user ' + (userCount + 1) + '</li>');
    });

    $('#remove').click(function () {
        //        console.log('usuń');
                var userCount = $('.user').length; //Tu liczy długość za każdym razem gdy klikniemy czyli po kliknięciu a przed wstawieniem
//       $('.user:last-child').remove(); //krótszy sposób to ten i można powyższą linijkę zakomnetować
        $('.user').eq(userCount-1).remove(); //popraw
    });
});