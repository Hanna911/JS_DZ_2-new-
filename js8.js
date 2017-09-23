//Задание 6

var p = document.getElementById("go1");

var s = 0;

for(var i=1; i<10; i++) {
	s = i * 7;	
	p.innerHTML = p.innerHTML + i +  ' * 7   = ' + s + '<br>';
}	

//Задание 7 - как сделать так, чтобы большое число выводилось нормально??


var p2 = document.getElementById("go2");

var pr = 1;

for(var i=1; i<51; i++) {
	pr = pr * i;	
	
}	

p2.innerHTML = 'Произведение чисел от 1 до 50 = ' + pr + '<br>';



//Задание 8  2.	Выведите с помощью цикла коды спецсимволов от 1000 до 2000. 
//Напомню, что спецсимвол получается комбинацией &#число;  Например &#1222;

var p3 = document.getElementById('go3');



for(var i=1000; i<2001; i++) {
	p3.innerHTML = p3.innerHTML + '&#' +  i + '  ';
}	