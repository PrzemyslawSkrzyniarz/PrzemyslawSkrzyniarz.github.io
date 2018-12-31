$(document).ready(function () {

    $("#startAnimation").click(function () {
        $.fn.animationSquare = function () {
            $("#square").animate({
                left: '100px',
            }, 1500, reductionInSize);
        };

        $().animationSquare();

        function reductionInSize() {
            $("#square").animate({
                height: '100px',
                width: '100px',
            }, 1500, changeColor);
        };

        function changeColor() {
            $("#square").animate({
                backgroundColor: 'blue',
            }, 5000, visible);
        };

        function visible() {
            $('h2').css({
                color: 'white'
            });
            $('h2').css({
                fontSize: '1.3vw' /*Na stronie repl.it lepiej gdy jest 3vw*/
            });
            $('h2').css({
                opacity: '1'
            });
        };

    });

// Inspiracja >>https://hype.codes/how-refresh-page-jquery
    $('#comeBack').click(function () {
        location.reload(false);
    });

});