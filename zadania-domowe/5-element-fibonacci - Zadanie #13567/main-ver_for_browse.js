var num = prompt("Please enter a positive number");

if (isNaN(num)) { // Sprawdza, czy argument nie ma wartości NaN ("nie-liczba").
    console.log("This is not a number");
} else if (num <= 0) {
        console.log("There is negative number");
    } else {
        console.log(num + " expression of the fibonacci sequence");
        console.log(fibonacci(num));
    }

function fibonacci(num) {
    var a = 1,
        b = 0,
        temp;

    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }
    return b;
}