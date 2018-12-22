/* Zdarzenia jako właściwości obiektu DOM */


let button = document.getElementById('add-user-button');


function changeBackground() {
    //    console.log('zmień tło');
    //    document.querySelector('h1').classList.toggle('red');
    console.log(this);
    this.classList.toggle('red');
}


//button.onclick = changeBackground; //przypisujemy metodę do właściwości onclick obiektu button

button.addEventListener('click', changeBackground) //ten sposób przechwytywania zdarzeń w js jest wykorzystywany dlatego, że ten nasłuch (1) można usunąć zdarzenie o nazwane funkcje (nie anonimowe), (2) dodać dodatkowe zdarzenie/akcję, (3) dodać funkcję anonimową, (4) ustawić nową wartość na zdarzenie/akcje zaraz po poprzednim jak poniższe dwa

button.addEventListener('mouseover',
    function () { //funkcji anonimowych nie używa się w dużych projektach bo ciężko je potem znaleźć, a poza tym nie można ich wykorzystać w innych przypadkach
        this.style.fontSize = '2em';
    });

button.addEventListener('click',
    function () {
        this.style.fontSize = '16px';
    });


document.getElementById('stop').addEventListener('click',
    function () {
        button.removeEventListener('click', changeBackground);
    });

/* Przechwytywanie zdarzeń */
//robimy to jako parametr funkcji - to jest obiekt HTML
button.addEventListener('click',
    function (event) {
        console.log(event);
    });

document.getElementById('first-link').addEventListener('click',
    function (event) {
        event.preventDefault(); //blokowanie zdarzenia by strona się nie przeładowała i pozostał efekt, ale ten link już mnie nigdzie nie przeniesie - często wykorzystywane na linku (tak jak tu) lub na formularzu ze zdarzeniem Submit
        event.stopPropagation(); //zatrzymujesz zdarzenie tam gdzie ono występuje
        this.style.backgroundColor = 'darkorange';
    });

/* Propagacja zdarzeń */
//od najniższego do najwyższego elementu - można to zablokować
document.getElementById('about').addEventListener('click',
    function () {
        this.style.backgroundColor = 'pink';
    });