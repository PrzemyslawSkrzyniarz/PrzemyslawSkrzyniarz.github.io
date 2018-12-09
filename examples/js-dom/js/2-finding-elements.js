/* Znajdowanie elementu za pomocą id */

let sectionAbout = document.getElementById('about');

console.log(sectionAbout);

sectionAbout.style.backgroundColor = 'gray';
/*sectionAbout.innerHTML = '<p>zmiana</p>';*/


/* Znajdowanie elementów po klasie */


let listItems = document.getElementsByClassName('list-item');

console.log(listItems); //uzyskujemy kolekcję HTML - podobne do tablicy, ale nie tablica (push i pop nie działa), ale można przeszukiwać jak tablicę

listItems[2].style.backgroundColor = 'red';

for(let i = 0; i<listItems.length; i++) {
    
    if(i%2 == 0) continue;
        
    listItems[i].style.backgroundColor = 'pink';
}

let aboutHeading = document.getElementsByClassName('about-heading'); //działają szybciej od querySelectorAll

console.log(aboutHeading);

aboutHeading[0].style.backgroundColor = 'yellow'; //Nawet jeśli w kolekcji HTML jest jeden element to trzeba się do niego odwołać jak w tablicy (bo to kelkcja HTML)

/* Znajdowanie elementów po znaczniku */

let links = document.getElementsByTagName('a'); //działają szybciej od querySelectorAll

console.log(links);

/* Znajdowanie elementów po selektorze */

let userList = document.querySelector('.users'); //Znajduje TYLKO pierwszy element który pasuje

console.log(userList);

let usersItems = document.querySelectorAll('.user-item');

console.log(usersItems);

//lub

let usersItemss = document.querySelectorAll('.users li'); //działa woniej ale wygodnie adresować i działają pseudoselektory

console.log(usersItemss);




