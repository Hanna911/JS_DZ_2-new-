 document.getElementById('button').onclick = date_p;
	function date_p() {
			var number1 = Number(document.getElementById('n1').value);
			var number2 = Number(document.getElementById('n2').value);
			var number3 = Number(document.getElementById('n3').value);
			
		
		if((number1 > number2) && (number1 > number3)) {
			alert('number1 - максимальное число');
		}
				
		else if((number2 > number1) && (number2 > number3)) {
			alert('number2 - максимальное число');
		}

		else if((number3 > number2) && (number3 > number1)) {
			alert('number3 - максимальное число');
		}

		else{
			alert('нет максимального числа');
		}
}