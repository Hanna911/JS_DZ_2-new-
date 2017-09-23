 document.getElementById('button').onclick = date_p;
	function date_p() {
			var number_1 = Number(document.getElementById('n_1').value);
			var number_2 = Number(document.getElementById('n_2').value);
		

		if(number_1 > number_2){
			alert('number_1 > number_2');
				
		}

		else if(number_2 > number_1){
			alert('number_2 > number_1');
		}

		else {
			alert('number_2 = number_1');
		}

}