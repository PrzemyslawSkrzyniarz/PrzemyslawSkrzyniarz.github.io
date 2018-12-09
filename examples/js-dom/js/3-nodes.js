/* Węzły rodzica */

let usersList = document.querySelector('.users');

console.log(usersList.parentElement);

usersList.parentElement.classList.add('users-container'); //w sensie dynamicznym dodajemy do rodzica klasę users-container czyli nieobchodzi nas gdzie znajduje się lub będzie znajdował element bo klasę users-container dodamy zawsze do rodzica


/* Węzły potomstwa */

console.log(usersList.childNodes); //węzłem sa także komentarze
console.log(usersList.children); //Zwraca kolekcję wszytskich dzieci będących znacznikami HTML

usersList.children[0].innerText = 'Nowy tekst'; //Dodaję tekst do pierwszego znacznika

console.log(usersList.firstElementChild); //tylko pierwsze dziecko czyli jedno
console.log(usersList.lastElementChild); //tylko ostatnie dziecko czyli jedno

/* Węzły rodzeństwa */
console.log(usersList.previousElementSibling);
console.log(usersList.nextElementSibling); //zwróci null gdy brak na tym samym poziomie elementu (czyli rodzeństwa)


