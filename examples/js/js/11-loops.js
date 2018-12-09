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

/* Instrukcja break */

/*for(let i = 0; i < 1000; i++) {
    
    if(i > 100) break; //Jak mamy jednolinijkowy if to możemy go zapisać bez klamr
    
    console.log(i);
}*/

/* Instrukcja continue */

    //wyśietla tylko liczby podzielne przez 3
/*for(let i = 0; i < 100; i++) {
    
    if(!(i%3 == 0)) {
        continue;
    };*/
    
//lub tak
    
for(let i = 0; i < 100; i++) {
    
    if(i%3 != 0) { //reszta z dzielenia przez 3 różna od zera to prawda i wykonaj czyli wróć bez logowania/zwracania wyniku (czyli ten wynik to są liczby niepodzielne przez 3)
        continue;
    };
    
    console.log(i);
}


