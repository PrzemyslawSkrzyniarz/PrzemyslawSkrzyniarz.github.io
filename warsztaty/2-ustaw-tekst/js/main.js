/*
let button = document.querySelector('button');

button.addEventListener('click',
    function () {
        console.log('działa');
        this.innerHTML = 'Zmieniono';
    });
    */

//lub jak poniżej krócej


document.querySelector('button').addEventListener('click',
    function () {
        console.log('działa');
        this.innerHTML = 'Zmieniono';
    });



//Jednak wciąż przy użyciu funkcji anonimowej, której używa się by coś na szybko i małego (parę linijek kodu) przetestować, ale nie w większych projektach (przy większej ilości kodu) czy dla klienta