$(document).ready(function () {

    $('#get-data').click(function () {
        $.getJSON('https://jsonplaceholder.typicode.com/posts', function (data) {

            data.forEach(function (element) {
                $('body').append('<h2>' + element.title + '</h2>')
            });
        });
    });
});



/*$(document).ready(function () {
    //    $.getJSON('https://jsonplaceholder.typicode.com/posts', function (data) {
    //        console.log(data);
    //    })


    // Było >> 
    //document.getElementById('get-data').addEventListener('click', function () {
    //Jest
    $('#get-data').click, function () {
        // wywołujemy naszą funkcję fetch() 
        // dodane tu a nie przed by po kliknięciu w przycisk doładowywały się tutaj tytuły
        $.getJSON('https://jsonplaceholder.typicode.com/posts', function (data) {
            //        console.log(data); //To wyświetla tylko w konsoli obiekt który jest tablicą obiektów - czyli tym co pobraliśmy

            data.forEach(function (element) {
                //            let heading = document.createElement('h2');
                //            heading.innerText = element.title;
                //            console.log(heading);
                //            document.body.appendChild(heading);
                /*Można to zrobic prościej bo jquery*/
/*$('body').append('<h2>' + element.title + '</h2>') //title - nazwa klucza w obiekcie
});
});
});
});*/