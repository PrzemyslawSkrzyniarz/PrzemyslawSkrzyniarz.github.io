$(document).ready(function () {
    $.getJSON('https://jsonplaceholder.typicode.com/todos', function (data) {

        $.each(data, function (id, data) {

            let divRow = $('<div id="user-row">');

            let divMark = $('<div class="user-mark">');
                
            let trueFalseWords = JSON.stringify(data.completed);
            let yesFalseWords = trueFalseWords.replace('true', 'Yes');
            let yesNoWords = yesFalseWords.replace('false', 'No');

            divMark.text(yesNoWords);

            let divId = $('<div class="user-id">');
            divId.text(data.id);

            let divTitle = $('<div class="user-title">');
            divTitle.text(data.title);

            $(divRow).append(divMark, divId, divTitle);

            $('#list-container').append(divRow);

        });
    });
});