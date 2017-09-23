 document.getElementById('button').onclick = date_p;
	function date_p() {
			var login = document.getElementById('p_login').value;
			var parol = document.getElementById('p_parol').value;			
		


		if((login == 'ivan')&&(parol == '333') || (login == 'ssss')&&(parol == '666') || (login == 'gibs')&&(parol == '0000')){
			alert('Добро пожаловать');
				
		}

		else{
			alert('ошибка');
		}

}