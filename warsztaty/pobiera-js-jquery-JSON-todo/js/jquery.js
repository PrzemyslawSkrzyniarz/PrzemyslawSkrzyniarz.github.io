$(document).ready(function () {
    $.getJSON('https://jsonplaceholder.typicode.com/todos', function (data) {
        console.log(data);

        $.each(data, function (id, data) {
            //            console.log(data);

            let divRow = $('<div id="user-row">');

            let divMark = $('<div class="user-mark">');
            divMark.text(data.completed);
                        console.log(divMark);
            //            console.log(data.completed);

            let divId = $('<div class="user-id">');
            divId.text(data.id);

            let divTitle = $('<div class="user-title">');
            divTitle.text(data.title);

            $(divRow).append(divMark, divId, divTitle);

            $('#list-container').append(divRow);

        });
    });
});