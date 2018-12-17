document.getElementById('get-data').addEventListener('click', function() {
	fetch('https://jsonplaceholder.typicode.com/posts')
	.then(response=>response.json())
	.then(response=>{
		console.log(response);
	
		response.forEach(function(element){
			let heading = document.createElement('h2');
			heading.innerText = element.title;
			console.log(heading);
			document.body.appendChild(heading);
		});
	})
});
