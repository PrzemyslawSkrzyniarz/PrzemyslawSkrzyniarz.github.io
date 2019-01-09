$(document).ready(function() {
	
	/* Znikanie i pojawianie */
	
	//$('#first').hide(3000).show(3000);
	
	/* fadeout i fadein */
	//$('#first').fadeOut(3000).fadeIn(3000);
	
	/* slideup i slidedown */
	//	$('#first').slideUp(3000).slideDown(3000, function() {
	//		window.location.href = 'https://google.com';
	//	});
	
	
	/* Animacje niestandardowe */
	
	$('#first').animate({fontSize: '3em'}, 2000, function() {
		alert('koniec animacji');
	});
	
	
//	$('#first').css({transform: 'rotateX(180deg)', transition: 'all 3s'});
});