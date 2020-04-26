let users = require('./data/users');
let fruits = require('./data/fruits');
let vowels = require('./data/vowels');
console.assert( users != undefined, 'array of users not connected' ); //connection check
// ------------------------------------------------------------------------------------------------

// console.log(users.length, fruits.length, vowels.length);

// ------------------------------------------------------------------------------------------------
/**
 * @param {String} userId   ID пользователя
 *
 * @return {Object} location        Пример: {lat: 61.498616, long: 61.498616}
 */

function getLocationByUserId(userId) {
    let locationUser = {};
    for(let user of users){
        if((user._id).localeCompare(userId)){
            locationUser = {
                lat : user.latitude,
                long : user.longitude,
            };
        }
    }
    return locationUser;
}
// console.log(getLocationByUserId('5a58d21ccb3c3f594dab0afc'));

// ------------------------------------------------------------------------------------------------
/**
 * @param {Array} fruits   Массив фруктов
 *
 * @return {Array} orderListFruits   Вывести пронумерованных фруктов ['1. banan', '2. apple' ...]
 */
function mapOrderList(fruits) {
    let numberedFruits = [];
    for(let i =0; i < fruits.length; i++){
        numberedFruits.push(`${i+1}. ${fruits[i]}`);
    }   
    return numberedFruits;
}
// console.log(mapOrderList(['banana', 'apricot', 'pineapple','pear', 'lime']));
// ------------------------------------------------------------------------------------------------
/**
 * @param {Array} fruits   Массив фруктов
 *
 * @return {Array} transformListFruits
 * Вывести список пронумерованных фруктов, только 3 символа каждого фрукта ['1. ban', '2. app' ...]
 */
function mapFruitsWithCount(fruits) {
   return fruits.map((item, index) => `${index+1}. ` + item.substring(0, 3));
}
// console.log(mapFruitsWithCount(fruits));
// ------------------------------------------------------------------------------------------------
/**
 * @param {Array} fruits   Массив фруктов
 * @param {Array} vowels   Массив гласных
 *
 * @return {Array} fruitsListByVowels
 * Вывести список фруктов, у которых первая буква гласная ['apple', 'avocado' ...]
 */
function mapFruitsByVowels(fruits, vowels) {
    return fruits.filter(function(item, index){
        if(vowels.includes(item.charAt(0))){
            return item;
        }
    });
}
// console.log(mapFruitsByVowels(fruits, vowels));
// ------------------------------------------------------------------------------------------------
/**
 * @param {Array} users    Массив пользователей
 *
 * @return {Array} companyList       Список компаний
 */
function getCompanyList(users) {
    return users.map((item) => item.company);
}
// console.log(getCompanyList(users));
// ------------------------------------------------------------------------------------------------
/**
 * @param {Array} users    Массив пользователей
 *
 * @return {Array} uniqueFavoriteFruits       Список уникальных фруктов
 */

function getUniqueFavoriteFruits(users) {
    let uniqueFruits = [];
     users.forEach(function(item){
        if(uniqueFruits.includes(item.favoriteFruit)==false){
            uniqueFruits.push(item.favoriteFruit);
        }
     });
    return uniqueFruits;
}
// console.log(getUniqueFavoriteFruits(users));
// ------------------------------------------------------------------------------------------------
/**
 * @param {String|Number|Boolean} field    свойство пользователя (примитив) - дополнительно можно сделать и по обьект/массивам
 *
 * @return {Array} uniqueFavoriteFruits      Сортированный список пользователей по значению свойства
 */

 //массив отсортированных свойств создан сразу
function sortUsersByField(field) {
    let item = users[0];
    let f = item[field];
    let newArr = users.sort(function(a, b){
        if(a[field] > b[field]){
            return 1;
        }
        if(a[field] < b[field]){
            return -1;
        }
        return 0;
        });
    if (typeof f == typeof true){
        return newArr.reverse().map(function(item){
            return item[field];
        });  
    }else{
        return newArr.map(function(item){
        return item[field];
    });
    }
}
// console.log('age:');
// console.log(sortUsersByField('age'));
// console.log('isActive:');
// console.log(sortUsersByField('isActive'));
// console.log('name:');
// console.log(sortUsersByField('name'));