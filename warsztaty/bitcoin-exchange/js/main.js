/* Za pomocą funkcji fetch pobierz dane z api https://blockchain.info/pl/ticker. Wyświetl ostatnią (last) wartość kursu PLN/BTC w paragrafie z id exchange-rate */

function getExchangeData() {

    let exchangeRateSpan = document.getElementById('exchange-rate');
    let previousPrice = parseFloat(exchangeRateSpan.innerText);
    let rateArrow = document.getElementById('rate-arrow');

//        console.log(previousPrice);

    fetch('https://blockchain.info/pl/ticker')
        .then(response => response.json())
        .then(response => {
        
            let lastPrice = response.PLN.last;

//            document.getElementById('rate-arrow').className = 'fas fa-arrow-up';

//            console.log(response);
            console.log(response.PLN.last); //mamy obiekt (czyli coś większego niż tablica) z tablicą/kluczem PLN z kluczem last
//            document.getElementById('exchange-rate').innerText = response.PLN.last;
//            console.log(response.PLN.last);
        
        
        /* Napisz warunek, który sprawdzi czy nowa cena jest większa, mniejsza lub równa od poprzedniej */
        
            console.log(lastPrice); //testujemy czy strzałki się zmieniają
        
            if (previousPrice > lastPrice && previousPrice !== 0) {
                rateArrow.className = 'fas fa-arrow-down red';
            } else if (previousPrice < lastPrice  && previousPrice !== 0) {
                rateArrow.className = 'fas fa-arrow-up green';
            } else {
                rateArrow.className = 'fas fa-minus-square';
            }
        
            exchangeRateSpan.innerText = lastPrice;

        });
};

getExchangeData();

 let exchangeInterval = setInterval(getExchangeData, 5000);

/*To tu jest lepiej napisane*/

document.getElementById('interval-panel')
.addEventListener('click', function(e) {
    if(e.target && e.target.nodeName == 'BUTTON') { //drugi warunek sprawdza czy to na dziecku rodzica klikneliśmy
        clearInterval(exchangeInterval); //czyścimy interwał by ustawić buttonem
        exchangeInterval = setInterval(getExchangeData, parseInt(e.target.value)); //ustawia się teraz wartością z buttona która jest zamianiona na liczbą parseInt
        document.getElementById('interval-time').innerText = e.target.innerText; //podpis na dole buttonów
        //console.log(e.target.value); //wartość elementu klikniętego
    } 
});

//Powyżej jest jeszcze lepiej napisane

//let allButtons = document.getElementsByTagName('button');
//
//for(let i = 0; i < allButtons.length; i++) {
//    allButtons[i].addEventListener('click', function() {
//        console.log(this.value);
//    });
//}



