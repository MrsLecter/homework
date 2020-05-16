let users = require('./data/users');
console.assert( users != undefined, 'array of users not connected' ); //connection check
// ------------------------------------------------------------------------------------------------
/*
* Найти пользователя по идентификатору (_id)
* @param {String} id - идентификатор пользователя
* @param {Array} arr - массив пользователей
* @return {Object} - объект пользователя
*/
 
let getUserById = function (id, arr){
    return (arr.filter(item => (item._id).localeCompare(id)==0));
}
module.exports.getUserById = getUserById;
// ------------------------------------------------------------------------------------------------

/*
* Определить средний возраст пользователей
* @param {Array} arr - массив пользователей
* @return {Number} - средний возраст
*/

let getAverangeUsers = function (arr){
    return  arr.reduce(function(sum, item){return  sum +=item.age;}, 0)/arr.length;    
}
module.exports.getAverangeUsers = getAverangeUsers;
// ------------------------------------------------------------------------------------------------

/*
* Определить количество активных пользователей
* @param {Array} arr - массив пользователей
* @return {Array} - список активных пользователей
*/

let getActiveUsers = function(arr) {
    return arr.filter(item => item.isActive);
}
// console.log(getActiveUsers(users));
module.exports.getActiveUsers = getActiveUsers;
// ------------------------------------------------------------------------------------------------

/*
* Определить сколько пользователей мужского и женского пола
* @param {Array} arr - массив пользователей
* @return {Object} - { male: 10, female: 20 }
*/
let getUsersGender = function(arr) {
    let male = arr.reduce((sum, item) => sum+= +(item.gender=='male'), 0);
    return {
        male: male,
        female: (arr.length - male),
    }
}
module.exports.getUsersGender = getUsersGender;

// console.log(getUsersGender(users));

// ------------------------------------------------------------------------------------------------

/*
* Определить самого старшего пользователя
* @param {Array} arr - массив пользователей
* @return {Number} - возраст самого старшего пользователя
*/

let getOldestUser = function(arr) {
    /*
    let ages = arr.sort(function(a, b){  return a.age - b.age;});
    return ages[ages.length-1].age;
    */
   let a = 0;
   arr.forEach((item) => {
        if(item.age > a){
             a = item.age;
        }
   });
    return a;
}
//  console.log(getOldestUser(users));
module.exports.getOldestUser = getOldestUser;
// ------------------------------------------------------------------------------------------------

/*
* Определить самого младшего пользователя
* @param {Array} arr - массив пользователей
* @return {Number} - возраст самого младшего пользователя
*/

let getYoungestUser = function(arr) {
    /*
    let ages = arr.sort(function(a, b){  return a.age - b.age;});
    return ages[0].age;
    */
   let a = 100;
   arr.forEach((item) => {
        if(item.age < a){
             a = item.age;
        }
   });
    return a;
}

// console.log(getYoungestUser(users));
module.exports.getYoungestUser = getYoungestUser;
// ------------------------------------------------------------------------------------------------

/*
* Сортировать пользователей по возрасту
* @param {String} order - указываться asc или desc (по возростанию / по убыванию)
* @param {Array} arr - массив пользователей
* @return {Array} - список сортированных пользователей
*/

let sortUsersByAge = function (order, arr) {
    /*
    let newArr = map(arr, function(item){
        return item;
    });
    if(order.localeCompare('asc')==0){
        for (let i = 0; i < newArr.length; i++){
            let elem = newArr[ i ].age;
            let j = i-1;
            while (j >= 0 && newArr[j].age > elem){
                newArr[j+1].age = newArr[j].age; j--; 
            }
            newArr[j+1].age = elem;
        }
    }else if(order.localeCompare('desc')==0) {   
        for (let i = 0; i < newArr.length; i++){
            let elem = newArr[ i ].age;
            let j = i-1;
            while (j >= 0 && newArr[j].age < elem){
                newArr[j+1].age = newArr[j].age; j--; 
            }
            newArr[j+1].age = elem;
        }
    }
    return newArr;
    */
    if(order === 'asc'){
        return users.sort(function(a, b) {
            return a.age - b.age;
          });
    }else if(order === 'desc'){
            return users.sort(function(a, b) {
                return b.age - a.age;
              });
    }
}

module.exports.sortUsersByAge = sortUsersByAge;
/*
console.log(sortUsersByAge('asc', users));
console.log('---------------------------');
console.log(sortUsersByAge('desc', users));
*/
// ------------------------------------------------------------------------------------------------

/*
* Определить количество пользователей, которые любят определенный фрукт
* @param {String} fruitName - название фрукта (apple)
* @param {Array} arr - массив пользователей
* @return {Array} - список пользователей, кто люит этот фрукт
*/

let getFavoriteFruit =  function (fruitName, arr) {
    return arr.filter(item => (item.favoriteFruit).localeCompare(fruitName)==0);
}
module.exports.getFavoriteFruit = getFavoriteFruit;
// console.log(getFavoriteFruit('apple', users));
