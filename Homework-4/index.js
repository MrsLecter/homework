let users = require('./data/users');
console.assert( users != undefined, 'array of users not connected' ); //connection check
// ------------------------------------------------------------------------------------------------

function map(arr, callback){
    let result = [];
    for(let index = 0; index < arr.length; index++){
         if(Number.isNaN(callback(arr[index], index))==false){
            result.push(callback(arr[index], index));  
     }
    }    
    return result;
}

function forEach(array, callback) {
    for(let index = 0; index < array.length; index++) {
        callback(array[index], index, array);
    }
}

/*
const todoWithOnlyTitle = map(arr, function(item){
    return {title: item.title};
})
*/
/*
* Найти пользователя по идентификатору (_id)
* @param {String} id - идентификатор пользователя
* @param {Array} arr - массив пользователей
* @return {Object} - объект пользователя
*/
/*
function getUserById(id, arr){
    let requireID = null;
    arr.forEach(item => {if((item._id).localeCompare(id)==0) requireID = item});
    return requireID;
}
*/
function getUserById(id, arr){
    return arr.filter(item => (item._id).localeCompare(id)==0);
}
// ------------------------------------------------------------------------------------------------

/*
* Определить средний возраст пользователей
* @param {Array} arr - массив пользователей
* @return {Number} - средний возраст
*/
/*
function getAverangeUsers(arr) {
    let averadgeAge = 0;
    arr.forEach(element => averadgeAge +=(element.age));
    return (averadgeAge/arr.length);
}
*/
function getAverangeUsers(arr){
    return  arr.reduce(function(sum, item){return  sum +=item.age;}, 0)/arr.length;    
}
// ------------------------------------------------------------------------------------------------

/*
* Определить количество активных пользователей
* @param {Array} arr - массив пользователей
* @return {Array} - список активных пользователей
*/
/*
function getActiveUsers(arr) {
    return map(arr, function(item){
        if(item.isActive == true){
            return item;
        }
        return NaN;
    });
}
console.log(getActiveUsers(users));
*/

function getActiveUsers(arr) {
    return arr.filter(item => item.isActive == true);
}
// console.log(getActiveUsers(users));


// ------------------------------------------------------------------------------------------------

/*
* Определить сколько пользователей мужского и женского пола
* @param {Array} arr - массив пользователей
* @return {Object} - { male: 10, female: 20 }
*/
/*
function getUsersGender(arr) {
    let obj = {
        male: 0,
        female: 0,
    };
    forEach(arr, function(item){
        if((item.gender).localeCompare('male')){
            obj.male++;
        }else if((item.gender).localeCompare('female')){
            obj.female++;
        }
    });
    return obj;
}

console.log(getUsersGender(users));
*/

function getUsersGender(arr) {
    let male = arr.reduce((sum, item) => sum+= +(item.gender=='male'), 0);
    return {
        male: male,
        female: (arr.length - male),
    }
}

// console.log(getUsersGender(users));

// ------------------------------------------------------------------------------------------------

/*
* Определить самого старшего пользователя
* @param {Array} arr - массив пользователей
* @return {Number} - возраст самого старшего пользователя
*/
/*
function getOldestUser(arr) {
    let older = 0;
    forEach(arr, function(item){
        if(older < item.age){
            older = item.age;
        }
    });
    return older;
}
console.log(getOldestUser(users));
*/
function getOldestUser(arr) {
    let ages = arr.sort(function(a, b){  return a.age - b.age;});
    return ages[ages.length-1].age;
}
//  console.log(getOldestUser(users));

// ------------------------------------------------------------------------------------------------

/*
* Определить самого младшего пользователя
* @param {Array} arr - массив пользователей
* @return {Number} - возраст самого младшего пользователя
*/
/*
function getYoungestUser(arr) {
    let juniour = arr[0].age;
    forEach(arr, function(item){
        if(juniour > item.age){
            juniour = item.age;
        }
    });
    return juniour;
}

console.log(getYoungestUser(users));

*/
function getYoungestUser(arr) {
    let ages = arr.sort(function(a, b){  return a.age - b.age;});
    return ages[0].age;
}
// console.log(getYoungestUser(users));
// ------------------------------------------------------------------------------------------------

/*
* Сортировать пользователей по возрасту
* @param {String} order - указываться asc или desc (по возростанию / по убыванию)
* @param {Array} arr - массив пользователей
* @return {Array} - список сортированных пользователей
*/

function sortUsersByAge(order, arr) {
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
    
}
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
/*
function getFavoriteFruit(fruitName, arr) {
    return map(arr, function(item){
        if((item.favoriteFruit).localeCompare(fruitName)==0){
            return item;
        }
        return NaN;
    });
}

console.log(getFavoriteFruit('apple', users));
*/
function getFavoriteFruit(fruitName, arr) {
    return arr.filter(item => (item.favoriteFruit).localeCompare(fruitName)==0);
}

// console.log(getFavoriteFruit('apple', users));


// ------------------------------------------------------------------------------------------------

/*
* Создать новых список пользователей на основе указаных аргументов
* @param {Array} fields - список свойств(ключей) по которым нужно брать поля, 
* например ["name", "email", "phone", balance]
* @param {Array} arr - массив пользователей
* @return {Array} - список активных пользователей
*/

function mapUsersByFields(fields, arr) {

    let elem = arr[0];
    let rezultArray = [];
    let rezult = {};
    for(let user of arr){
        for(let field of fields){
                if(field in elem){
                    rezult[field] = user[field];
                }
        }
        rezultArray.push(rezult);
    }
    
    return rezultArray;
}

// console.log(mapUsersByFields(["name", "email", "phone", "balance"], users));


// ------------------------------------------------------------------------------------------------

/*
* Поиск пользователей по тегам
* @param {Array} tags - список тегов(ключей) по которым выполняем, 
* @param {Array} arr - массив пользователей
* @return {Array} - список пользователей у которых есть хотя бы один тег
*/
function getUsersByTags(tags, arr) {
    return arr.filter(user => {
        for(let tag of tags){
            if(user.hasOwnProperty(tag)){
                return true;
            }
        }
    });
        
}
console.log(getUsersByTags(['human', 'smart', 'watchStarWars', 'readAsimov'], users) );



// ------------------------------------------------------------------------------------------------

/*
* Какой общий баланс всех пользователей
* @param {Array} arr - массив пользователей
* @return {String} - $23,4344.10
*/

function getBalanceUsers(arr) {
    let money = 0;
    forEach(arr, function(item){
        let str  = (item.balance).substring(1).replace(',', '' );
        money += +(str);
    });
    return (money/arr.length).toFixed(3);
}
// console.log(getBalanceUsers(users));
