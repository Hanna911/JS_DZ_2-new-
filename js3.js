 document.getElementById('button').onclick = date_p;
	function date_p() {
			var number = document.getElementById('n_1').value;
			

		if(number<1){
			alert('Вы ввели отрицательное число или ноль - такого номера квартиры нет');
				
		}

		else if(number < 20){
			alert('Первый подъезд');
		}

		else if((number > 20) && (number < 65)){
			alert(' Второй  подъезд');
		}

		else if((number > 64) && (number < 81)){
			alert(' Третий  подъезд');
		}

		else{
			alert('Вы ввели номер больше 80');
		}

}