/* Operatory arytmetyczne */

console.log(2+3);
console.log(2-3);
console.log(2*3);
console.log(2/2);
console.log(2/0);
console.log(typeof(2/0)); //to nas nie uchroni przed błędem dzielenia przez zero
console.log(10%3); //reszta z dzielenia - przydaje się do wyłuskania np. co 3/itp. elementu

let number = 10;
console.log(number);

console.log('inkrementacja');
console.log(++number);
console.log(number++);

console.log('sprawdzam');
console.log(number);
console.log('dekrementacja');

console.log(number--);
console.log(--number);

/* Operator przypisania */

let age = 30;

console.log('sprawdzam');
console.log(age);

age += 5;

console.log('inkrementuję');
console.log(age);

age = 30;

age /= 5;

console.log('dzielę przez 5');
console.log(age);

console.log('sprawdzam');
console.log(age);

age /= 5;

console.log('mnożę przez 5');
console.log(age);

/* Operatory porównania */
console.log('Operatory porównania');
console.log(2==2); //true
console.log(2==3); //false

console.log(2=='2'); //true
console.log(2==='2'); //false

console.log(2!==2); //false
console.log(2!==3); //true

console.log(2>2); //false
console.log(1<2); //true

console.log(2>=2); //true

/* Operatory logiczne */

console.log('Operatory logiczne');

console.log('Iloczyn logiczne');

console.log(2==2 && 3>1); //true
console.log(2==2 && 3<1); //false
console.log(2==1 && 3<1); //false

console.log('Suma logiczna');

console.log(2==2 || 3>1); //t
console.log(2==2 || 3<1); //t
console.log(2==1 || 3<1); //f

console.log('Negacja logiczna');

console.log(!(2==1)); //t

/* Operator warunkowy ? */

let userAge = 15;

let isUserMature = (userAge>18)?'pełnoletni':'niepełnoletni'; // pełnoletni lub niepełnoletni

console.log(isUserMature);











