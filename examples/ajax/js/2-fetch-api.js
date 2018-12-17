// Niekompatybilne z IE

/// Za pomoca metody FETCH - pobierz json i wyświetl go


//widać tu funkcję strzałkową - przyjmuje jeden parametr i zwraca (return) to co po strzałce
/*fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(response => {
        console.log(response);

        response.forEach(function (element) {
            let heading = document.createElement('h2');
            heading.innerText = element.title;
            console.log(heading);
            document.body.appendChild(heading);
        });
    })*/

document.getElementById('get-data').addEventListener('click', function() {
    // wywołujemy naszą funkcję fetch() 
    // dodane tu a nie przed by po kliknięciu w przycisk doładowywały się tutaj tytuły
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(response => { 
//        console.log(response); //To wyświetla tylko w konsoli obiekt który jest tablicą obiektów - czyli tym co pobraliśmy

        response.forEach(function (element) {
            let heading = document.createElement('h2');
            heading.innerText = element.title;
            console.log(heading);
            document.body.appendChild(heading);
        });
    })
});