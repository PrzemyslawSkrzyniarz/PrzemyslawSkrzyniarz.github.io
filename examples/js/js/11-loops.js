/* Pętla for */


/*for(let i = 0; i<10; i++) {
    console.log(i);
}


let randoms = [];

for(let i = 0; i<100; i++) {
    randoms.push(Math.random());
}

console.log(randoms);*/


/* Metoda foreach */

let names = ['Adam', 'Olga', 'Tomek', 'Anna'];

/*for(let i = 0; i<names.length; i++) {
    console.log(names[i]);
}*/

//lub

/*
names.forEach(function (elem) {
    console.log(elem);
});

names.forEach(function (elem, index) {
    console.log(elem  + ' ma indeks ' + index);
});
*/


/* Pętla for in */

//tylko klucze
//let person = {name: 'Przemek', surname: 'Skrzyniarz', age: 36}
//
//for(let key in person) {
//    console.log(key);
//}

let person = {name: 'Przemek', surname: 'Skrzyniarz', age: 31}

for(let key in person) {
    console.log(person[key]); // Gdyby tak było >> console.log(person.key); >> to szukało by klucza o nazwie key w obiekcie person
}

/* Pętla while */
let randomNumber = Math.round(Math.random()*10); //losujemy liczbę losowo z przedziału od 0 do 9

/*console.log(randomNumber);*/

/*while (randomNumber != 5) {
    console.log(randomNumber);
    randomNumber = Math.round(Math.random()*10);    
}*/

//Pierwszy raz się wykona bez sprawdzenia warunku
do{
    console.log(randomNumber);
    randomNumber = Math.round(Math.random()*10);    
} while (randomNumber != 5)




