//для эмуляции успешного запроса или не успешного
// const getRandomBoolean = () => Math.random() >= 0.5; // получить случайное true|false
//для эмуляции времени запроса
// const getRandomTimeout = () => Math.random() * 1000; 

// const fs = require('fs'); //  модуль чтения/записи данных
var module = require("./functions.js");

class Request{
    constructor(){
        console.log('new request created');
    }
    /*
    * Фильтрование todos
    * @param {String} input - запрос фильтрования
    * @return {Object} - массив todos
    */
    get(input){
        let filtered = [];
        let request = module.readRequest(input);
        
        let promise = module.readDB();
        let answ = null;
        if(request === 'all'){
          console.log("all");
          promise.then( response =>{
            answ  =  response;
            console.log(answ);
            return answ;
            //console.log(response); // массив todos
          }
          ),
          promise.catch(error => 
           console.log(error) // не верный url, например todoc
          )

        }else if(request === "active"){
          promise.then( response =>{
            filtered = response.filter((item) => item.completed === false );
            this.answ = filtered;
            console.log(this.answ);
            return this.answ;

          }
          ),
          promise.catch(error => 
           console.log(error) // не верный url, например todoc
          )
  
        }else if(request === "complete"){
          promise.then( response =>{
            filtered = response.filter((item) => item.completed === true );
            this.answ = filtered;
            console.log(this.answ);
          }
          ),
          promise.catch(error => 
           console.log(error) // не верный url, например todoc
          )
        }
    }
     /*
    * Создание todos
    * @param {String} input - запрос фильтрования
     * @param {Object} obj - новая задача
    * @return {Object} - массив todos
    */
    post(input, obj){
      let promise =  module.writeOnDB(obj);
      
      promise.then( response =>
       {console.log(response);
         return response}
      ),
      promise.catch(error => 
        console.log(error) // не верный url, например todoc
      )
    }
     /*
    * Обновление todos
    * @param {String} input - индекс обновляемой задачи
     * @param {Object} obj - новая задача
    * @return {Object} - массив todos
    */
    put(input, obj){
      let number = module.readRequest(input);
      let promise =  module.writeOnDB(obj, number);
      promise.then( response =>
       {console.log(response);
         return response}
      ),
      promise.catch(error => 
        console.log(error) // не верный url, например todoc
      )

    }
    /*
    * Удаление todos
    * @param {String} input - индекс обновляемой задачи
    * @return {Object} - массив todos
    */
    delete(input){
      let number = module.readRequest(input);
      
      let promise =  module.deleteTodo(number);
      promise.then( response =>
       {console.log(response);
         return response}
      ),
      promise.catch(error => 
        console.log(error) // не верный url, например todoc
      )
    }

}

let request = new Request();
//------------------------------------------------
// фильтрованные todos
// request.get('/todos?filter=all');  
// request.get('/todos?filter=active');
// request.get('/todos?filter=complete');
//------------------------------------------------
// request.post("/todos", {
//   "userId": 3,
// "id": 48,
// "title": "sit reprehenderit omnis quia",
// "completed": false
// });  // Создание todo
// request.put("/todos/1", {
//   "userId": 32231,
//   "id": 955555,
//   "title": "bla-bla-bla",
//   "completed": true
// })   //обновление todo
// request.delete("/todos/1");  //удаление todo
//------------------------------------------------

