let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

function createHTMLtag(tag) {
    return result = document.createElement(String(tag));
}

let section = createHTMLtag('section');
let ol = createHTMLtag('ol');
section.appendChild(ol); // podpinam ol pod section
let li;

function liCreate() {
    for (let i = 0; i < cities.length; i++) {

        li = createHTMLtag('li');
        ol.appendChild(li); // podpinam li pod ol    
        li.innerText = cities[i];
        li.setAttribute('class', 'city');
    }
}

liCreate();

console.log(cities);

let buttonBackSort = document.getElementById("backSortCities");

function backSortCities() {

    cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];
    
    console.log(cities);

    for (let i = 0; i < cities.length; i++) {
        ol.firstChild.remove();
    }

    liCreate();

    section.appendChild(ol); // podpinam ol pod section
}

buttonBackSort.addEventListener("click", backSortCities);

let buttonSort = document.getElementById("sortCities");

function sortCities() {
    cities.sort();

    console.log(cities);

    for (let i = 0; i < cities.length; i++) {
        ol.firstChild.remove();
    }

    liCreate();

    section.appendChild(ol); // podpinam ol pod section
}

buttonSort.addEventListener("click", sortCities);

document.body.appendChild(section); // podpinam section pod body