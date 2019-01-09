$(document).ready(function() {
	$('li').each(function(index){	
		$(this).css('margin-left', index * 10 + 'px');
	});
});