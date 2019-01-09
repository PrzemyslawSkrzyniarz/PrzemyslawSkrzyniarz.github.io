$(document).ready(function() {
	
	function animateHeading() {
		$('#first').hide(500).show(500);
	}
	
	
	$('button').click(animateHeading);
	
	$('button').click(function() {
		$(this).css('background-color', 'red');
	});
	
	$('#fname').focusin(function(){
		$('.alert').remove();
		$(this).after('<span class="alert">Podaj prawdziwe imię</span>');
	});
	
	$('#fname').keypress(function(){
		$('.alert').remove();
	});
	
});