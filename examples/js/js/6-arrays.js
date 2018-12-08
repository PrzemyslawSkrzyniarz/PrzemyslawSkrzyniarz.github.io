/* Definiowanie tablic */

let names = ['Adam', 'Kasia', 'Piotr'];

console.log(names);
console.log(names[1]);
console.log(names[4]); //undefined

names[1] = 'Krzysztof';
console.log(names[1]);

names[3] = 'Anna';
console.log(names);

//
//names[7] = 'Basia';
//console.log(names);
//

/* Metody tablicowe */
names.push('Jan'); //dodaje na koniec
console.log(names);


names.pop(); //usuwa z końca
console.log(names);


names.unshift('Ola'); //dodaje na początek
console.log(names);

names.shift();
console.log(names); //usuwa z początku

// zbijamy tablice do jednego ciągu znaków
console.log(names.join());
console.log(names.join('+'));
console.log(names.join(''));
console.log(names.join(' '));

names.reverse(names);
console.log(names);

names.sort();
console.log(names);

/* Długość tablicy */
console.log(names.length);

let arrayInArray = [['Adam', 'Nowak'], ['Łukasz', 'Badocha'], ['Tadeusz', 'Kowalski']]; 
//2 kolumny i 3 wiersze

console.log(arrayInArray[1][1]); //Badocha
console.log(arrayInArray[2][0]); //Tadeusz

let numbers = [1,2,3,4,5];
//chcę znaleźć wszystkie mniejsze od 3
//let findedValues = numbers.filter(function(elem){
//                                return elem > 3
//                                })
//                                console.log(findedValues);

/*
let findedValues = numbers.map(function(elem){
                                return elem > 3
                                })
                                console.log(findedValues);
*/

let findedValues = numbers.map(function(elem){
                                return elem * 3
                                })
                                console.log(findedValues);




