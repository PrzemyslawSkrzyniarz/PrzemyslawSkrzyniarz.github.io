'use strict';



// definicja funkcji ajax
function ajax(method, url) {


    // utworzenie obiektu - tworzy się instancja czyli obiekt stworzony na podstawie wbudowanej klasy XMLHttpRequest()
    var httpReq = new XMLHttpRequest();


    // otwarcie polaczenia - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
    httpReq.open(method, url); // Przekazujemy metodę get lub post i url czyli adres



    // jesli status polaczenia zostal zmieniony -> httpReq.readyState
    // 0: połączenie nie nawiązane,
    // 1: połączenie nawiązane,
    // 2: żądanie odebrane,
    // 3: przetwarzanie,
    // 4: dane zwrócone i gotowe do użycia.
    httpReq.onreadystatechange = function () {

        // jeśli 4: dane zwrócone i gotowe do użycia
        if (httpReq.readyState == 4) {

            // sprawdź kod statusu połączenia - https://pl.wikipedia.org/wiki/Kod_odpowiedzi_HTTP
            if (httpReq.status == 200) { //200 prawidłowa odp serwera, 404 - strona nieistnieje, 500, 503 - błąd serwera


                var returnData = httpReq.responseText;
                var jsonData = JSON.parse(returnData);
                //                console.log(returnData);     
                console.log(jsonData);

                /* Pobieramy dane z obiektu który jest tablicą obiektów - pobrane z >> https://jsonplaceholder.typicode.com/posts */
                jsonData.forEach(function (element) {
                    //tworzę nagłówki
                    var heading = document.createElement('h2');
                    //                    console.log(heading);
                    //                    console.log(element);
                    //Nagłówek wypełniamy title
                    heading.innerText = element.title;
                    //                    console.log(heading);
                    //zamiast innerHTML - ono zamiast tego co jest wstawia swoje i zastosowane na body usuneło by nasze skrypty - używamy zatem appendChild które dodaje do tego co jest
                    document.body.appendChild(heading);

                });

                // zeruj obiekt, aby nie utrzymywać nie potrzebnego już połączenia z serwerem
                httpReq = null;

            }

        }

    }


    // wysłanie danych do serwera
    httpReq.send();
}


document.getElementById('get-data').addEventListener('click', function() {
    // wywołujemy naszą funkcję ajax() :) 
    // dodane tu a nie przed by po kliknięciu doładowywały się tutaj tytuły
    ajax("GET", "https://jsonplaceholder.typicode.com/posts");
});