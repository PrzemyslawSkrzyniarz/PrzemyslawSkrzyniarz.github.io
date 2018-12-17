document.getElementById('get-data').addEventListener('click', function () {
    fetch('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl')
        .then(response => response.json())
        .then(response => {
            console.log(response);
            let parId = document.createElement('p');
            parId.innerText = 'User id: ' + response.userId;

            let parName = document.createElement('p');
            parName.innerText = 'User name: ' + response.userName;

            let parUrl = document.createElement('p');
            parUrl.innerText = 'User url: ' + response.userURL;

            document.body.appendChild(parId);
            document.body.appendChild(parName);
            document.body.appendChild(parUrl);
        });
})