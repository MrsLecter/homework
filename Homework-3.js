const todos = [
    /*
    { title: "Задача 1", description: "Сделать что-то", completed: false }, // 0
    { title: "Задача 2", description: "Сделать что-то", completed: true }, // 1
    { title: "Задача 3", description: "Сделать что-то", completed: false } // 2
    */
 ];
 
 //Попробуйте не использовать перебирающее методы массива (forEach / map / filter / reduce)
 // и тд - это как доп. задание
 
 /**
  * @param {String} title         Заголовок(название) задачи
  * @param {String} description   Описание задачи
  * добавляем новую задачу в список задач (todos) в конец
  * completed по умолчанию - false
  * @return {Object} Добавленный объект
  */
 function addTodo(title, description) {
     let obj =  {
         title: title,
         description: description,
         completed: false,
     };
     todos[todos.length] = obj;
     return todos[todos.length-1];
 }
 
 /**
  * @param {Number} index   Индекс массива
  * изменения статуса задачи из массива todos по index
  * меняем completed на обратное, если true, то false и наоборот
  * @return {Object} Измененный объект
  */
 function toggleTodo(index) {
     todos[index].completed = !todos[index].completed;;
     return todos[index];
 }

 /**
  * @param {Number} index   Индекс массива
  * удаление задачи из массива todos по index
  * @return {Object} Удаленный объект
  */
 function deleteTodo(index) {
    todos.splice(index, 1);
    return todos[index];
 } 
 /**
  * @param {Number} index   Индекс массива
  * @param {Object} obj    Обьект задачи с полями и значениями которые нужно обновить 
  * (это может быть title или description или то и то)
  * {
  *  title: "Новый заголовк задачи",
  *  description: "Новое описание задачи"
  * }
  * @return {Object} Обновленный объект
  */
 function updateTodo(index, obj) {
    todos[index].title = obj.title;
    todos[index].description = obj.description;
    return todos[index];
 }
  
 /*
 * @param {String} filter  "all"|"active"|"completed"
 * all - все задачи | active - активные задачи | completed - выполненые задачи
 *
 * @return {Array} возвращает отфильтрованный массив согласно filter
 */
 function filterTodos(filter) {
     let filtered  = []; 
     if(!filter.localeCompare('all')){
         return todos;
     }else if(!filter.localeCompare('active')){
        
         return toFind(false);
     }else if(!filter.localeCompare('completed')){

         return toFind(true);
     }else{
         return 'invalid argument';
     }
     function toFind(option){
         let j = 0;
        for(let i =0; i < todos.length; i++){
            if(todos[i].completed == option){
                filtered[j] = todos[i];
                j++;
            }
        }
        return filtered;
     }
 }
 /*
 * @param {String} search
 * search - поиск по title, по подсроке (по части строки)
 *
 * @return {Array} возвращает массив согласно search
 */
 function searchTodos(search) {
     let detected = [];
     let j = 0;
    for(let i = 0; i < todos.length; i++){
        if((todos[i].title).includes(search)){
            detected[j] = todos[i];
            j++;
        }
    }
    if(detected.length == 0) {
        return 'no matches found';
    }else{
        return detected;
    } 
 }

 /*
* @param {Boolean} completed
* completed - true или false
* функция выполняет для всех задач: выолнено или не выполнено согласно параметра completed
@return {Array} Измененный массив
*
*/
function toggleTodos(completed) {
    if(completed==true || completed==false){
        for(let i = 0; i < todos.length; i++){
            todos[i].completed = completed;
        }
        return  todos;
    }else{
        return 'invalid argument';
    }
}
 


/*
* функция удаляет из массива все выполненые задачи
* @return {Array} Измененный массив
*/
function clearCompletedTodos() {
    for(let i =0; i  <  todos.length; i++){
        if(todos[i].completed == true){
            todos.splice(i, 1);
        }
    }
    return todos;
}

 console.log('add');
 console.log(addTodo("Телефон", "Позвонить в 12:15"));
 console.log(addTodo("Телефон", "Пополнить счет"));
 console.log(addTodo("Телефон", "Отправить смс"));
 console.log(addTodo("Магазин", "Купить хлеб"));
 console.log(addTodo("Магазин", "Договориться с ..."));
 console.log(addTodo("Работа", "Доделать отчет"));
 console.log(addTodo("Работа", "Запланировать встречу с ..."));
 console.log("changed status");
 console.log(toggleTodo(3) );
 console.log('search: Работа');
console.log(searchTodos('Работа'));
console.log('deleted 2');
console.log( deleteTodo(2));
console.log('изменить задачу по индексу 0');
console.log(updateTodo(0, { title: "Новая задача", description: "Что-то написано", completed: false },));
console.log('Показать все невыполненные записи');
console.log(filterTodos('active'));
console.log('Показать все записи с заголовком \"Работа\"');
console.log(searchTodos("Ра"));
console.log('Показать все выполненные записи');
console.log(filterTodos('completed'));
console.log('Удалить выполненные задачи');
console.log(clearCompletedTodos());