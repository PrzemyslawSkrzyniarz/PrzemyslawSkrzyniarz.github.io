$(document).ready(function(){
	
	
	$('#get-data').click(function(){
		$.getJSON('https://jsonplaceholder.typicode.com/posts', function(data){
			data.forEach(function(element){
				$('body').append('<h2>' + element.title + '</h2>');
			});
		});
	});

});