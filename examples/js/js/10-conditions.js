let userOneAge = 15;
let userTwoAge = 15;

/* Warunek if */
if (userOneAge > userTwoAge) {
    console.log('Pierwszy jest starszy')
}

/* Warunek if-else */
if (userOneAge > userTwoAge) {
    console.log('Pierwszy jest starszy')
} else {
    console.log('Drugi jest starszy')
}

/* Warunek else if */
if (userOneAge > userTwoAge) {
    console.log('Pierwszy jest starszy')
} else if (userOneAge == userTwoAge) {
    console.log('Pierwszy jest w tym samym wieku co drugi');
} else {
    console.log('Drugi jest starszy')
}

// lub - else if może mieć n-przypadków; zatrzyma się konstrukcja warunkowa na pierwszym prawdziwym warunku
if (userOneAge > userTwoAge) {
    console.log('Pierwszy jest starszy')
} else if (userOneAge == userTwoAge) {
    console.log('Pierwszy jest w tym samym wieku co drugi');
} else if (userOneAge < userTwoAge) {
    console.log('Drugi jest starszy')
}


/* Instrukcja switch */
let lightColor = 'green';

switch (lightColor) {
    case 'red':
        console.log('stój');
        break;
    case 'yellow':
        console.log('czekaj');
        break;
    case 'green':
        console.log('jedź');
        break;
    default:
        console.log('uważaj, światła zepsute');
}



