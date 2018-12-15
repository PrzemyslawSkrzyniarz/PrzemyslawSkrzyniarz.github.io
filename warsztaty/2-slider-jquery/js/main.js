$(function () {
    //   console.log('test');

    /* Pobierz do zmiennych:
    slideShow - referecje do elementu z klasą .slide-show
    slideCount - ilość pojedynczych slajdów
    slideWidth - 100 dzielone na ilość slajdów
    slideIndex - równy 0
    */

    var slideShow = $('.slide-show');
    var slideCount = $('.single-slide').length;
    var slideWidth = 100 / slideCount;
    var slideIndex = 0;


    /* Ustaw szerokość kontenera slide-show na slideCount * 100 */

    slideShow.css('width', slideCount * 100 + '%');

    /* Dla każdego elementu z klasą single-slide ustaw szerokość na podstawie zmiennej slideWidth oraz przesunięcie odpowiadające jego szerokości pomnożonej przez index */

    $('.single-slide').each(function (index) {
        $(this).css({
            width: slideWidth + '%',
            /*trzeba dodać % bo inaczej doda nam wartość w px*/
            left: slideWidth * index + '%'
        });
    });
    
    function hideButtons(currentSlideIndex) { //ukrywamy przyciski
        if(currentSlideIndex <= 0) {
            $('.prev-slide').hide();
        } else {
            $('.prev-slide').show();
        }
        
        if(currentSlideIndex >= slideCount -1) {
            $('.next-slide').hide();
        } else {
            $('.next-slide').show();
        }
    }

    /* Napisz funkcję slide(), która przyjmie jeden parametr - nowy index aktywnego slajdu poprzez dodanie lub odjęcie a od aktualnego indexu */
    /*Definujemy funckcję przed jej użyciem*/
    function slide(newSlideIndex) {
            if (newSlideIndex < 0 || newSlideIndex > slideCount - 1) {
                return;
            }
        //return;
        
        slideShow.animate({left: newSlideIndex * (-100) + '%'}, 800,
        function () {
            slideIndex = newSlideIndex;
            
            hideButtons(slideIndex); //usuwamy przycisk w ta stronę w którą nie ma możliwości przewijania 
        });
        
    }
    
    /* Napisz akcję na strzałkę/button w lewo i prawo aby po kliknięciu nastąpiło przesunięcie slajdu odpowiednio w lewo i prawo */

    $('.prev-slide').click(function () {
        
        slide(slideIndex - 1);
        
    });

    $('.next-slide').click(function () {

        slide(slideIndex + 1);

    });

    hideButtons(slideIndex); //wyłona tu po to by przycisk przy pierwszym otwarciu lub odświeżeniu strony niestniał, a pojawił się po pierwszym przewinięciu
    
});