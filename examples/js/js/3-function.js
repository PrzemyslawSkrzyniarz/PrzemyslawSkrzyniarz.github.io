/* Funkcje w JavaScript */

addNumbers(); //Hoisting
function addNumbers() {
    console.log(2 + 2);
}

addNumbers(); //Wywołanie funkcji
addNumbers(); // by skopiować szybko linię Ctrl+D
addNumbers();
addNumbers();

const printName = function () {
    console.log('Przemek');
}

printName();

/* Funkcje w JavaScript - parametry */


function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}

addTwoNumbers(5, 7);
addTwoNumbers(10, -100);
addTwoNumbers(13, 7);

/* Funkcje w JavaScript - zwracanie wartości */
function addThreeNumbers(num1, num2, num3) {
    return num1 + num2 + num3;
}

let results = addThreeNumbers(1, 2, 3);

console.log(results);



/* Napisz funkcję która przyjmuje dwa parametry - wzrost w metrach i wagę w kg - 
funkcja zwraca wartość wskaźnika BMI obliczonego na podstawie wzoru masa/wzrost^2 */

function countBmi(weight = 60, height = 1.60) {
    let bmi = weight / (height * height);
    console.log('przed return')
    return bmi;
    console.log('po return')
}

let myBmi = countBmi(72, 1.70);

console.log(myBmi);

console.log('Mój BMI to ' + countBmi(72, 1.72))


/* Funkcje strzałkowe */
const add = () => {
    console.log(2 + 2);
}

add();

//const devide = (num1=2, num2=2) => {
//    return num1/num2;
//}

const devide = (num1 = 2, num2 = 2) => num1 / num2;

console.log(devide(4, 2));

function squareArea = a => a * a; // Z przypisaniem: function squareArea = (a=2) => a*a;
/*

Odpowiednik dłuższy - bez przypisania:

function squareArea(a) {
    return a*a
}

*/

console.log(squareArea(10));