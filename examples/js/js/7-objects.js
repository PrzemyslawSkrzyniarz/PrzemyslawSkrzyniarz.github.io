/* Obiekty w JavaScript */

let person = {
    name: 'Tomek',
    height: 172,
    hobbies: ['Muzyka', 'Piłka nożna'],
    children: [{name: 'Zuzanna', age: 4}, {name: 'Liliana', age: 3}, {name: 'Anna', age: 5}],
    partner: {name: 'Jagoda', status: 'żona'},
    
    printInfo() {
        console.log(`Mam na imię ${this.name}. Interesuje mnie ${this.hobbies[0]} i ${this.hobbies[1]}. Mam ${this.children.length} dzieci`);
    }
}

//właściwości obiektu person
console.log(person);
console.log(person.name);
console.log(person['name']); //równoważne z poprzednim
console.log(person.children[1].name);
console.log(person.partner.name);

//metody obiektu person
person.printInfo();

//dokładanie klucz-wartość << właściwość obiektu
person.age = 31;

console.log(person);


/* Klasy */
//zawsze tworzymy przy użyciu Dużej Litery
class Car {
    constructor(brand, color){
        this.brand = brand; //możemy wybrać tworząc klasę dowolnie czyli np. a zamiast brand a wtedy >> this.a = brand;
        this.color = color; //tutaj tak samo dowolnie jak powyżej 
    }
    
    printInfo() {
        console.log(`Samochód marki ${this.brand} ma kolor ${this.color}`);
    }
}

//tworzymy obiekt na podstawie klasy
let ford = new Car('ford', 'red');

/*
//po staremu
let ford = {
    brand: 'ford',
    color: 'red'
}
*/

//tworzymy obiekt na podstawie klasy
let audi = new Car('audi', 'blue');

console.log(ford);
console.log(ford.color);
console.log(audi);

ford.printInfo();
    
//tworzymy dodatkową metodę obiektu na podstawie klasy z użyciem funkcji strzałkowej
Car.prototype.makeBrum = () => {
    console.log('brum');
}

//
////po staremu
//Car.prototype.makeBrum = function() {
//    console.log('brum');
//}
//

audi.makeBrum();
    
    
    
    
    
    
    
    
    
    