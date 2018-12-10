let addButton = document.getElementById('add-user-button');

addButton.addEventListener('click',
    function () {
        let userListLength = document.getElementsByClassName('user-item').length; //nie ma znaczenia ile elemntów jest - może być ich zero czyli można zacząć dodawać od pierwszego - bardzo użyteczne dynamiczne dodawanie elementów w js
        let newUserItem = document.createElement('li');
        newUserItem.setAttribute('class', 'user-item');
        newUserItem.innerHTML = 'User ' + (userListLength + 1);
        
        document.querySelector('.users').appendChild(newUserItem);  
    
        console.log(newUserItem);

    })