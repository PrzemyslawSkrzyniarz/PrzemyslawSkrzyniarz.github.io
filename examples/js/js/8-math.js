/* Właściwości obiektu Math */


console.log(Math.PI);
console.log(Math.E);

/* Metody obiektu Math */

console.log(Math.pow(2, 8)); //podnoszę 2 do potegi 8
console.log(Math.random()); //zwróci losową liczbę od 0 do 1
console.log(Math.random() * 10); //zwróci losową liczbę od 0 do 10

//
///*https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range*/
///**
// * Returns a random number between min (inclusive) and max (exclusive)
// */
//function getRandomArbitrary(min, max) {
//    return Math.random() * (max - min) + min;
//}
//

/* Napisz funkcję która przyjmuje jeden parametr - promień koła.
Funkcja zwraca pole koła liczone wg wzoru Pi*r^2 */

function circleArea(r) {
    return Math.PI * Math.pow(r, 2);
}

console.log(circleArea(1));
console.log(circleArea(2));
console.log(circleArea(2));
console.log(circleArea(4));