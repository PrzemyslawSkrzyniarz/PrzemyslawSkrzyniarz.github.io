/*
let button = document.querySelector('button');

button.addEventListener('click',
    function () {
        console.log('działa');
        this.innerHTML = 'Zmieniono';
    });
    */

document.querySelector('button').addEventListener('click',
    function () {
        console.log('działa');
        this.innerHTML = 'Zmieniono';
    });