// задание 6 94.	Задайте два input. В первый вводится число, во второе его степень. С помощью цикла возведите число в степень. Напечатайте результат. 


var p = document.getElementById("go1");



document.getElementById('button').onclick = date_p;
	function date_p() {


var chislo_p = Number(document.getElementById("chislo").value);
var stepen_p = Number(document.getElementById("stepen").value);
var new_chislo = 1;


			for (var i=0; i<stepen_p; i++) {
				new_chislo = new_chislo * chislo_p;
			}
	p.innerHTML = new_chislo;

	}



