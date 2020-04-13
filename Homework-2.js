"use strict"
/*
let string1 = 'Ytube';
let string2 = 'ou';
let sliceString = string1.slice(0,1) + string2 + string1.slice(1,2).toUpperCase() + string1.slice(2);
console.log(sliceString); // --> YouTube
*/
/*
let numbers = [25, 1];
let project = 'проект';
let team = 'команда';
let howMuch = 'Сколько';
let str = 'нужно программистов чтобы сделать проект ?';
let sentence = '- ' + howMuch + ' ' + str.slice(0, 34) + numbers[1] + ' ' + str.slice(34) +'\n- ' + team[0].toUpperCase() +  team.slice(1) + ' из ' + numbers[0] + ' !';
console.log(sentence) // --> собрать предложение
*/
/*Напишите функцию fizzBuzz, которая будет возвращать
'Fizz' если передаваемый параметр кратен 3,
'Buzz', если передаваемый параметр кратен 5,
'FizzBuzz' - если параметр кратен 3 и 5.
Если передаваемое число не кратно 3 или 5, то вернуть указанный параметр
*/
/*
function fizzBuzz(param){
    if(!isNaN(parseInt(param ,10))){
        let answ = '';
        if(param%3 == 0){
            answ += 'Fizz';
        }
        if(param%5 == 0){
            answ += 'Buzz';
        }
        if( ((param%3!=0)&&(param%5!=0)) ){
            return param;
        }
        return answ;
    
    }else{
        return 'Incorrect input';
    }
}
*/
/*
Напишите функцию которая будет возвращать объект
с свойством name, а значением будет первый аргумент функции
*/
/*
function getObj(arg){
    let obj ={};
    obj.name = arguments[0];    
    return obj;
}
*/
/*
Функция будет принимать 1 аргумент
- ОБЪЕКТ у которого
будет свойство name
и возвращать новый объект изменяя свойство name
в большой регистр
*/
/*
function getNewObject(obj){
    let newObj = {};
    if("name" in obj){
        Object.assign(newObj, obj, {name: obj.name.toUpperCase(),}); 
        return newObj;
    }else{
        return "no property \"name\" ";
    }
};
*/
/*Напишите функцию которая принимает в качестве аргумента массив
и элемент массива, и добавляет элемент в конец массива (без метода push)
*/
/*
function toPushElem(array, arg){
    if(!Array.isArray(array)) return "first must be array!";
    if(!arg) return "write item!";
    array[array.length] = arg;
    return array;
};
*/
/*
Напишите функцию которая принимает 3 аргумента,
третий аргумент - это объект. Функция создает новый
объект и добавляет ключ - это первый аргумент,
а значение - второй аргумент Проверяет если есть
свойство name в переданном объекте, тогда добавляет данное
свойство и возвращает новый объект
*/
/*
function getNewObject( key, value, obj){
    let newObj = {
        [key]: value,
    }
    if(!("name" in obj)){
        newObj.name = "Gennadiy";
    }else{
        newObj.name = obj.name;
    }
    return newObj;
};
*/