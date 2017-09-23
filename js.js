document.getElementById('button').onclick = date_p;
		function date_p() {
			var years = document.getElementById('birth_year').value;
		

				if(years >= 100){
					
					alert(2017 - years);
						
				}

				else if(years < 100){
					alert(17 - years);
				}
				else {
					alert('Error of user')
				}

}