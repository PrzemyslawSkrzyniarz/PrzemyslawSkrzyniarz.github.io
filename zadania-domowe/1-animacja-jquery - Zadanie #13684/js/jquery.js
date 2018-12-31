$(document).ready(function () {

    $("#startAnimation").click(function () {
        $.fn.animationSquare = function () {
            $("#square").animate({
                left: '100px',
                height: '100px',
                width: '100px',
                backgroundColor: 'blue',
            }, 3000, visible);
        };
        $().animationSquare();

        function visible() {
            $('h2').css({
                color: 'white'
            });
            $('h2').css({
                fontSize: '2vw'
            });
            $('h2').css({
                opacity: '1'
            });
        };

    });
});