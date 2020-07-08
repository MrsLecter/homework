//для эмуляции успешного запроса или не успешного
const getRandomBoolean = () => Math.random() >= 0.5; // получить случайное true|false
//для эмуляции времени запроса
const getRandomTimeout = () => Math.random() * 1000; // получить случайное время от 0 до 10 секунд 

module.exports.getRandomBoolean = getRandomBoolean;
module.exports.getRandomTimeout = getRandomTimeout;


const fs = require('fs');
/*
* Удаление из базы данных (в файле todos.json)
* @return {Promise} - извлечеенные данные
*/
let deleteTodo = function (index){
    return new Promise((resolve, reject)=>{
      setTimeout(() =>{
        if(getRandomBoolean){
          let todos = fs.readFileSync("./todos.json");
          let objTodos = JSON.parse(todos);
          if(Number.isInteger(Number(index))){
            objTodos.splice(index, 1);
            console.info("status: 200 OK"); 
          }else{
            console.info("status: 400 Bad Request"); 
            console.log('invalid index');
          }
          let newTodos = JSON.stringify(objTodos);
          fs.writeFileSync("./todos.json", newTodos);
          //console.log(objTodos);
          //console.log(objTodos);
          resolve(objTodos); 
          //console.log('answer: 200 OK');
        }else{
          reject("error: 500 Internal Server Error");
        }
                 
      }, getRandomTimeout);
    });
  };
module.exports.deleteTodo = deleteTodo;

/*
* Запись в  базу данных (в файле todos.json)
* @return {Promise} - извлечеенные данные
*/
let writeOnDB = function (obj, index = "null"){
    return new Promise((resolve, reject)=>{
      setTimeout(() =>{
        if(getRandomBoolean){
          let todos = fs.readFileSync("./todos.json");
          let objTodos = JSON.parse(todos);
          if(index === "null"){
            console.info("status: 201 Created "); 
            objTodos.push(obj);
          }else if(Number.isInteger(Number(index))){
            objTodos[index] = obj;
            console.info("status: 200 OK"); 
          }else{
            console.info("status: 400 Bad Request"); 
            console.log('invalid index');
          }
          
          let newTodos = JSON.stringify(objTodos);
          fs.writeFileSync("./todos.json", newTodos);
          //console.log(objTodos);
          //console.log(objTodos);
          resolve(objTodos); 
          //console.log('answer: 200 OK');
        }else{
          reject("error: 500 Internal Server Error");
        }
                 
      }, getRandomTimeout);
    });
};
module.exports.writeOnDB = writeOnDB;

 /*
* Чтение базы данных (в файле todos.json)
* @return {Promise} - извлечеенные данные
*/
let readDB = function(){
    return new Promise((resolve, reject)=>{
      setTimeout(() =>{
        if(getRandomBoolean){
          let todos = fs.readFileSync("./todos.json");
          let objTodos = JSON.parse(todos);
          console.info("status: 200 OK"); 
          //console.log(todos);
          resolve(objTodos); 
          //console.log('answer: 200 OK');
        }else{
          reject("error: 500 Internal Server Error");
        }
                 
      }, getRandomTimeout);
    });
};
module.exports.readDB = readDB;

/*
* Чтение запроса
* @param {String} str - строка запроса
* @return {String} - извлечеенные данные
*/
let readRequest = function(str){
    if(str.includes('filter')){
      // console.log(str.split('=')[1]);
      return str.split('=')[1];
    }else if(str.includes('/todos') && str.length > 7){
      // console.log(str.split('/')[2]);
      return str.split('/')[2];
    }else if(str === '/todos'){
      // console.log('/todos');
      return '/todos';
    }else{
      // console.log('invalid input');
      return 'invalid input';
    }
}
module.exports.readRequest = readRequest;