/* Typ liczbowy */
let age = 31;

console.log(age);
console.log(typeof age); //zwraca nazwę typu danej zmiennej w tym wypadku age


/* Typ łańcuchowy */
let name = '31';

console.log(name);
console.log(typeof name);

let topic = 'Luke\'s car is black';
//let topic = "Luke's car is black";
//let topic = Luka << szuka zmiennej o nazwie Luka

let quote = '"Ale iacta est"'
let sentence = 'Juliusz Cezar powiedział: ' + quote + ' i się zatrzymał'; //konkatenacja
let sentence2 = `Juliusz Cezar powiedział: ${quote} i poszedł dalej zdobywać`; //EC6 - string interpolowany

console.log(topic);
console.log(typeof topic);

console.log(sentence);
console.log(sentence2);

/* Typ logiczny */

let isDone = true;

console.log(isDone);
console.log(typeof isDone);

/* Typy specjalne */
let isNull = null;
let isUndefined;
let isZero = 0;

/* Pułapki typowania */
console.log('2'+2); //przerobił na znak i dodał znaki
console.log('2'-2); //przrobił na liczby i odjął liczby

console.log(true+17);
console.log(false+17);



