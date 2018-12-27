let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

// Inspirowałem się >> https://medium.com/@naveenkarippai/learning-how-references-work-in-javascript-a066a4e15600 >> How to store a compound value through assign-by-value?
let citiesOriginalLetter = cities.slice(); //swallow copy - płytkie kopiowanie >> https://we-are.bookmyshow.com/understanding-deep-and-shallow-copy-in-javascript-13438bad941c

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

//console.log(cities);

let buttonBackSort = document.getElementById("backSortCities");

function backSortCities() {

    console.log(citiesOriginalLetter);

    for (let i = 0; i < citiesOriginalLetter.length; i++) {
        ol.firstChild.remove();
    }

    for (let i = 0; i < citiesOriginalLetter.length; i++) {

        li = createHTMLtag('li');
        ol.appendChild(li); // podpinam li pod ol    
        li.innerText = citiesOriginalLetter[i];
        li.setAttribute('class', 'city');
    }

    section.appendChild(ol); // podpinam ol pod section
}

buttonBackSort.addEventListener("click", backSortCities);

let buttonSort = document.getElementById("sortCities");

function sortCities() {
    let citiesSorted = cities;
    citiesSorted.sort();

    console.log(citiesSorted);

    for (let i = 0; i < citiesSorted.length; i++) {
        ol.firstChild.remove();
    }

    liCreate();

    section.appendChild(ol); // podpinam ol pod section
}

buttonSort.addEventListener("click", sortCities);

document.body.appendChild(section); // podpinam section pod body