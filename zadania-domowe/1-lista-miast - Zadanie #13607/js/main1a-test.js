let myArr = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

let myArrOriginal = myArr.slice();

function showElt(element, index, array) {
    console.log("Index: [" + index + "] jest Elementem: " + element);
}

myArr.forEach(showElt);

console.log("\n");
myArrOriginal.forEach(showElt);

myArr.sort();

console.log("--1--");
console.log("\n")
myArr.forEach(showElt);

console.log("\n")
myArrOriginal.forEach(showElt);

myArr.sort();

console.log("--2--");
console.log("\n")
myArr.forEach(showElt);

console.log("\n")
myArrOriginal.forEach(showElt);


