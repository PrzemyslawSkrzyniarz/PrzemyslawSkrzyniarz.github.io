/* Tworzenie elementów */

/* Tworzę li, tworzę tekst, tworzę powiązanie, tworzę dowiązanie li i tekstu do konkretnego elementu/noda w dokumencie o klasie .users jako ostatnie dziecko czyli na koniec itd. */

let userItem = document.createElement('li');

let textNode = document.createTextNode('User 11');

userItem.appendChild(textNode);

//dodajemy atrybut czyli klasę user-item
userItem.setAttribute('class', 'user-item');

console.log(userItem);
// document.querySelector('.users').appendChild(userItem); //na koniec

//document.querySelector('.users').insertBefore(userItem, document.querySelector('.users').firstElementChild); //na początek

document.querySelector('.users').replaceChild(userItem, document.querySelector('.users').firstElementChild); //zamiana na początku

/* Usuwanie elementów */
document.querySelector('.users').removeChild(document.querySelector('.users').lastElementChild); //usuwanie ostatniego dziecka


