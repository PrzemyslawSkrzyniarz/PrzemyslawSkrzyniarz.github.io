$(document).ready(function () {

    $.getJSON('https://jsonplaceholder.typicode.com/users', function (data) {
        console.log(data);

        $.each(data, function (id, data) {

            var divRow = $('<div class="user-row">');

            var divId = $('<div class="user-id">');
            divId.text(data.id);

            var divName = $('<div class="user-name">');
            divName.text(data.name);

            var divCity = $('<div class="user-city">');
            divCity.text(data.address.city);


            $(divRow).append(divId, divName, divCity);
            
            $('#list-container').append(divRow);

        });

    });

});