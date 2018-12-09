
let mainHeading = document.querySelector('h1');

/* Manipulacja zawartością */


mainHeading.innerHTML = 'Nowa <span>zawartość</span>';
mainHeading.innerText = 'Jeszcze nowsza <span>zawartość</span>';

document.querySelector('.users').innerHTML = '<li class="user-item">User 11</li>'; //nadpisuje wszystko co było, bo użyliśmy innerHTML zamiast innerText - patrz plik 4-creating-elements.js

//mainHeading.outerHTML = '<h2>Nowy nagłówek h2</h2>' //podmienia oprócz treści także kod HTML

console.log(document.querySelector('.about-heading').innerText) //wyciągam zawartość tekst ze znacznika

console.log(document.querySelector('.about-heading').innerHTML) //wyciągam zawartość czyli tekst ze znacznika

/* Manipulacja Atrybutami */

document.querySelector('.first a').href = 'https://google.com';

console.log(document.querySelector('.first a').id);
console.log(document.querySelector('.first a').href);

document.querySelector('.first a').classList.add('first-link1', 'first-link2');
document.querySelector('.first a').classList.add('new-class');
document.querySelector('.first a').classList.remove('first-link1');
document.querySelector('.first a').style.fontSize = '3em';

