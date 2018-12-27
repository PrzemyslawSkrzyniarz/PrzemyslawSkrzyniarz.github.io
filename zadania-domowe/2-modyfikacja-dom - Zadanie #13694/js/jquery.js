// Inspiracja >> https://www.elated.com/articles/jquery-removing-replacing-moving-elements/

$(document).ready(function () {

    $("#up").click(function () {
        $.fn.liftUp = function () {
            if ($("p:last")) {
                console.log($("p:last"));
                var myUpPinNewPosition = $($("p:last")).detach(); //odepnij z ostatniej pozycji
                console.log($("p:last"));
                myUpPinNewPosition.prependTo($("section")); //przypnij na pierwszą pozycję
                console.log($("p:last"));
            }
        };
        $().liftUp();
    });

    $("#down").click(function () {
        $.fn.liftDown = function () {
            if ($("p:first")) {
                console.log($("p:first"));
                var myDownPinNewPosition = $($("p:first")).detach(); //odepnij z pierwszej pozycji
                console.log($("p:first"));
                myDownPinNewPosition.appendTo($("section")); // przypnij na ostatnia pozycję
                console.log($("p:first"));
            }
        };
        $().liftDown();
    });
    
});