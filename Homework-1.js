"use strict"
/*
1.Создайте три переменные. Присвойте первой переменной числовое значение.
Вторая переменная равна первой переменной, увеличенной в три раза.
Третья переменная равна сумме двух первых. Выведите на экран все три.
*/
/*
{
    let param1 = 4;
    let param2 = param1 * 3;
    let param3 = param1 + param2;
    alert("Param1: " + param1 + "\nParam2: " + param2 + "\nParam3: " + param3);
}
*/
/*
2.Создайте переменные firstName и lastName для хранение имени и фамилии,
запишите в них значения из модального окна prompt. Выведите на экран
приветствие (“What’s up John Doe”).
*/
/*
{
	let firstName = '';
    let lastName = '';
    let name = prompt("What is your name?", "John Doe");
   	firstName =name.split(" ")[0];
   	lastName = name.split(" ")[1];
   	if(lastName === undefined){
   		lastName = '';
   	}
    alert(`What’s up, ${firstName} ${lastName} ?`);
}
*/
/*
3.Создайте переменные x и y для хранения числа. Значения переменные получают
из prompt. Рассчитайте произведение, частное, разность и сумму этих значений.
Результат последовательно отобразите в модальном окне.
*/
/*
let x = +prompt("Enter X", 5);
let y = +prompt("Enter Y", 3);
let multipl = x * y;
let division = x / y;
let substr = x - y;
let sum = x + y;
alert("Multiplication: " + multipl.toFixed(1) +
 "\nDivision: " + division.toFixed(1) + "\nSubstraction: " 
 + substr.toFixed(1)  + "\nSum: " + sum.toFixed(1));
*/
/*4.Напишите в переменных формулу для расчета з/п за июль с учетом,
что количество рабочий часов, количество рабочих дней в неделе и рейт
за час – переменные значения читаются из prompt.
*/
/*
let hour = prompt("Sum of working hour a day", 8);
let day =  prompt("Sum of working day", 15);
let pay = prompt("Pay for hour", 1000);
alert("Month salary: " + hour*day*pay);
*/
/*
5.	Напишите программу, которая без использования оператора
сравнения определяет, является ли число, введенное пользователем, нечётным.
*/
/*
function isEven(number){
    if(number == 0) {
        return true;
    }else if(number%2){
        return false;
    }else{
        return true;
    }
}
*/
/*
6.	Напишите программу, которая проверяет, является ли значение,
введенное пользователем, числом
*/
/*
function isNumber(numb){
    //if you need to recognize numbers in a string
    //if(isFinite(numb)){ ...
    if(typeof numb == typeof 1){
        return true;
    }else{
        return false;
    }
}
*/
/*
7.	Запишите в переменную случайное число (Math.random()),
умножьте его на 100 и округлите. Получите второе число из окна prompt.
Сравните и отобразите в модальном окне: первое число меньше второго или
нет, а также оба значения.
*/
/*
let rand = Math.ceil(Math.random() * 100);
let number2 = prompt("Enter number", 4);
let sign = (rand < number2) ? '<': '>';
alert("Number1: " + rand + "\nNumber2: " + number2 + "\nNumber1 " + `${sign}` + " Number2");
*/
/*
8.	Создайте переменную str и запишите в нее из prompt такое предложение
«Мне нравится изучать Front-end». Также создайте еще одну переменную и
запишите в нее из prompt то, что вам нравится изучать. С помощью методов
строки определите существует ли то что вам нравится изучать в исходной
строке str. Также возьмите подстроку «Мне нравится изучать » из исходной
переменной str сохраните ее в переменной. Создайте еще одну переменную
result куда запишите результирующую строку объединяющую «Мне нравится
изучать » и то что вам нравится изучать (примените для этого обратные
кавычки ` `). Отобразите результат в модальном окне.
*/
/*
let str = "Мне нравится изучать Front-end";
let prefer = prompt("Что ты любишь изучать?", 'физику');
let ifConteins = str.includes(prefer);
let substr = str.slice(0, 20);
let rezult = substr + ' ' + prefer + '!' ;
alert(rezult);
*/