$(function(){
	/* Pobierz do zmiennych :
		slideShow - referencje do elementu z klasą .slide-show
		slideCount - ilość pojednych slidów
		slideWidth - 100 dzielone na ilość slidów
		slideIndex - równy 0
	*/ 
	
	var slideShow = $('.slide-show');
	var slideCount = $('.single-slide').length;
	var slideWidth = 100/slideCount;
	var slideIndex = 0;
	
	/* Ustaw szerokość kontenera slide-show na ilośćSlidów * 100% */
	slideShow.css('width', slideCount * 100 + '%');
	
	/* Dla każdego elementu z klasą single-slide ustaw szerokość na postawie zmiennej slideWidth oraz przesunięcie odpowadające jego szerokości pomnożonej przez index */
	
	$('.single-slide').each(function(index){
		$(this).css({
			width: slideWidth + '%', 
			left: slideWidth * index + '%'
		});
	});
	
	
	function hideButtons(currentSlideIndex) {
		
		if(currentSlideIndex <= 0) {
			$('.prev-slide').hide();
		} else {
			$('.prev-slide').show();
		}
		
		if(currentSlideIndex >= slideCount - 1) {
			$('.next-slide').hide();
		} else {
			$('.next-slide').show();
		}
		
	}
	
	/* Napisz funkcję slide(), która przyjmie jeden parameter - nowy index aktywnego slidu poprzed dodanie lub odjęcie 1 od aktualnego indexu */
	function slide(newSlideIndex) {
		
		if(newSlideIndex < 0 || newSlideIndex > slideCount - 1) {
			return;
		}
		
		
		slideShow.animate({left: newSlideIndex * (-100) + '%'}, 800, function(){
			slideIndex = newSlideIndex;
			
			hideButtons(slideIndex);
		});
		
	}

	/* Napisz obsługę kliknięcia w strzałkę w lewo i w prawo */
	
	$('.prev-slide').click(function(){		
		slide(slideIndex - 1);
	});
	
	$('.next-slide').click(function(){
		slide(slideIndex + 1);		
	});
	
	hideButtons(slideIndex);

});