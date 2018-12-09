let button = document.getElementById('set-background');

function setBackground() {
    console.log('działa');
    document.getElementsByTagName('p')[0].classList.add('red');
    document.getElementsByTagName('p')[1].classList.add('yellow');
}

button.addEventListener('click', setBackground);