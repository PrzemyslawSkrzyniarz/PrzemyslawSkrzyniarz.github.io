fetch('https://jsonplaceholder.typicode.com/todos')
    .then(responce => responce.json())
    .then(responce => {

        responce.forEach(function (user) {

            let divRow = document.createElement('div');
            divRow.setAttribute('id', 'user-row')


            let divMark = document.createElement('div');
            divMark.setAttribute('class', 'user-mark');
            divMark.innerText = user.completed;
            divRow.appendChild(divMark);

            let trueFalseWords = user.completed.toString();
            let yesFalseWords = trueFalseWords.replace("true", "Yes");
            let yesNoWords = yesFalseWords.replace("false", "No");
            
            divMark.innerText = yesNoWords;

            let divId = document.createElement('div');
            divId.setAttribute('class', 'user-id');
            divId.innerText = user.id;
            divRow.appendChild(divId);

            let divTitle = document.createElement('div');
            divTitle.setAttribute('class', 'user-title');
            divTitle.innerText = user.title;
            divRow.appendChild(divTitle);

            document.getElementById('list-container').appendChild(divRow);

        });

    });