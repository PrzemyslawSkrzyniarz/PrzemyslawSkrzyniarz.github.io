/* Napisz obsługe kliknięcia w button "oblicz", po kliknięciu wywołaj funkcję - oblicz() */

/* Nie używam globalnej zmiennej dla przycisku bo używam go tylko raz */

//console.log('Test');

function oblicz() {
    //console.log('obliczam');
    /* Wewnątrz funkcji oblicz() pobierz do zmiennych wartości pól formularza*/

    let wplata = parseFloat(document.getElementById('wplata').value);
    // console.log(wplata);
    // console.log(typeof wplata);

    let iloscLat = parseFloat(document.getElementById('ilosc-lat').value);
    // console.log(iloscLat);

    let okresKapitalizacji = parseFloat(document.getElementById('okres-kapitalizacji').value);
    // console.log(okresKapitalizacji);          

    let oprocentowanie = parseFloat(document.getElementById('oprocentowanie').value) / 100;
    // console.log(oprocentowanie);

    let podatek = document.getElementById('podatek').checked;
    // console.log(podatek);
    // console.log(typeof podatek);

    let oprocentowanieOpodatkowane; //zasięg zmiennych - brak zmiennych globalnych

    /* Stwórz niesdefiniowaną zmienną 'oprocentowanieOpodatkowane'. Napisz warunek, który przypisz do niej wartość podatku - jeśli checkbox jest zaznaczony to przypisz oprocentowanie * 0,81, jeśli jest odzanczony to przypisz oprocentowanie bez żadnych zmian */

    if (podatek) { //zmiast warunku >> podatek == true
        oprocentowanieOpodatkowane = oprocentowanie * 0.81;
    } else {
        oprocentowanieOpodatkowane = oprocentowanie;
    }

    let wynik = wplata * Math.pow(1 + (oprocentowanieOpodatkowane / okresKapitalizacji), iloscLat * okresKapitalizacji);

    console.log(wynik);

    /* Wartość zmiennej wynik wyświetl w divie z id wynik */
    document.getElementById('wynik').innerText = wynik;
}

/* Stwórz zmienną wynik do której przypisz wynik obliczenia odsetek ze wzoru na procent składamy */


document.getElementById('oblicz').addEventListener('click', oblicz);