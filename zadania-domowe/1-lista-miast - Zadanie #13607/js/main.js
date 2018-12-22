let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

/*Stworzyłem funkcję do tworzenia tagów HTML, bo mam aż trzy wystapienia*/
function createHTMLtag(tag) {
    //    console.log(tag);
    return result = document.createElement(String(tag));
}

let section = createHTMLtag('section');
let ol = createHTMLtag('ol');
//console.log(ol);

section.appendChild(ol); // podpinam ol pod section


///*let section = document.createElement('section');
//console.log(section);
//let ol = document.createElement('ol');
//console.log(ol);


// Inspiracja >> https://stackoverflow.com/questions/11351135/create-ul-and-li-elements-in-javascript
for (let i = 0; i < cities.length; i++) {

    let li = createHTMLtag('li');
    ol.appendChild(li); // podpinam li pod ol
    li.innerText = cities[i];
    li.setAttribute('class', 'city');

    //let li = document.createElement('li');
    //console.log(li); 

}

document.body.appendChild(section); // podpinam section pod body