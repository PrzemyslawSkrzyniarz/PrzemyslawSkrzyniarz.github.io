fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(response=>{
    
    
    response.forEach(function(user){
        console.log(user);
        
        let divRow = document.createElement('div');
        divRow.setAttribute('class', 'user-row');
        
        let divId = document.createElement('div');
        divId.setAttribute('class', 'user-id');
        divId.innerText = user.id;
        divRow.appendChild(divId);
        
        let divName = document.createElement('div');
        divName.setAttribute('class', 'user-name');
        divName.innerText = user.name;
        divRow.appendChild(divName);
        
        let divCity = document.createElement('div');
        divCity.setAttribute('class', 'user-city');
        divCity.innerText = user.address.city;
        divRow.appendChild(divCity);
        
        document.getElementById('list-container').appendChild(divRow);
        
    });
    
    
});

//$(document).ready(function () {
//
//    $.getJSON('https://jsonplaceholder.typicode.com/users', function (data) {
//
////        for (i = 0; i < data.length; i++) {
////            console.log(data);
////            var paramId = $('<div>');
////            paramId.text(data[i].id);
////            console.log(data[i].id);
////
////            var paramName = $('<div>');
////            paramName.text(data.name);
////            console.log(data[i].name);
////
////            var paramCity = $('<div>');
////            paramCity.text(data[i].address.city);
////            console.log(data[i].address.city);
////        };
////
////        var userDiv = $('<div class="Users">');
////        $(userDiv).append(paramId);
////        $('body').prepend(userDiv);
//        
//        
//
//    });
//
//});