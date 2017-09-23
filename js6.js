// задание 6 1.	Вывести четные числа от 0 до 101

var p = document.getElementById("go");

for (var i=0; i<=101; i=i+2) {
	p.innerHTML= p.innerHTML +  i + " ";

}


// задание 6 2.	Вывести числа в следущей последовательности: 200 199 198 ... 0.

var a = document.getElementById("go2");

for (var i=200; i>=0; i=i-1) {
	a.innerHTML= a.innerHTML +  i + " ";

}



// задание 6 3.	Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5).

var b = document.getElementById("go3");
var s = 0;
var ind = 1;

for (var i=0; i<=100; i++) {
	s = s + ind;
	ind++;
}

b.innerHTML = s;