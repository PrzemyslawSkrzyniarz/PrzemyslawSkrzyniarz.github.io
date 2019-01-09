$(document).ready(function(){
	$('#get-data').click(function(){
		$.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl', function(data){
			var parId = $('<p>'); //tworzenie elementy w jQuery - analogia do document.createElement();

			parId.text('User id: ' + data.userId);
			
			var parName = $('<p>'); 
			parName.text('User name: ' + data.userName);
			
			var parUrl = $('<p>'); 
			parUrl.text('User name: ' + data.userURL);
			
			
			var userDiv = $('<div>');
			
			$(userDiv).append(parId, parName, parUrl);
			$('body').append(userDiv);
		});

	});
});