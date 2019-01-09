fetch('https://jsonplaceholder.typicode.com/users')
	.then(response=>response.json())
	.then(response=>{
		
	
		response.forEach(function(user){
			console.log(user);

			let divRow = document.createElement('div');
			divRow.setAttribute('class', 'user-row');
			
			let divId = document.createElement('div');
			divId.setAttribute('class', 'user-id');
			divId.innerText = user.id;
			divRow.appendChild(divId);
			
			let divName = document.createElement('div');
			divName.setAttribute('class', 'user-name');
			divName.innerText = user.name;
			divRow.appendChild(divName);
			
			let divCity = document.createElement('div');
			divCity.setAttribute('class', 'user-city');
			divCity.innerText = user.address.city;
			divRow.appendChild(divCity);
			
			document.getElementById('list-container').appendChild(divRow);
		});
		
	
	});