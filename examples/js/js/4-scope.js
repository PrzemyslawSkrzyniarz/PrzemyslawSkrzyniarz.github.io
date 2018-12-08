/* zasięg zmiennych w JavaScript */

function addNumbers(num1, num2) {
    let result = num1 + num2; //let/var sprawia, że zmienna jest lokalna czyloi tylko w tej funkcji
    console.log(result);
}

addNumbers(10, 12);

//console.log(result);


function devide(num1, num2) {
    let result = num1 / num2;
    console.log(result);
}

devide(10, 5);