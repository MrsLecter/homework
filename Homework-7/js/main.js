let taskBox = document.getElementsByClassName('task-box');

class List{
    arrayTodo = [];
    constructor(){
        console.log('created new list');
    }
    addTask(t){
        this.arrayTodo.push(t);
    }
    get arrayTodo(){
        return this._arrayTodo;
    }
    toggleTodo(index){
       this.arrayTodo[index].complete = !this.arrayTodo[index].complete;
    }

    deleteTodo(index){
        this.arrayTodo.splice(index, 1);
    }

    updateTodo(index, text){
        this.arrayTodo[index].content = text;
    }
    filterTodos(filter) {
        let filtered  = []; 
        let length = this.arrayTodo.length;
        if(!filter.localeCompare('all')){
            return this._arrayTodo;
        }else if(!filter.localeCompare('active')){
            let j = 0;
            for(let i =0; i < length; i++){
                if(this.arrayTodo[i].complete == false){
                    filtered[j] = this.arrayTodo[i];
                    j++;
                }
            }
            return filtered;
        }else if(!filter.localeCompare('completed')){
            let j = 0;
            for(let i =0; i < length; i++){
                if(this.arrayTodo[i].complete == true){
                    filtered[j] = this.arrayTodo[i];
                    j++;
                }
            }
            return filtered;
        }else{
            return 'invalid argument';
        }
    }
    searchTodos(search) {
        let detected = [];
        let j = 0;
        for(let i = 0; i < this.arrayTodo.length; i++){
            if((this.arrayTodo[i].content).includes(search)){
                detected[j] = this.arrayTodo[i];
                j++;
            }
        }
        if(detected.length == 0) {
            return 'no matches found';
        }else{
            return detected;
        } 
    }
    clearCompletedTodos() {
        let active = this.arrayTodo.filter(item => item.complete == true);
        this.arrayTodo = active;
   } 

}
class Task{
    complete = false;
    constructor(content){
        this.content = content;
    }
    get content(){
        return this._content;
    }
    set content(t){
        this._content = t;
    }
}

let myTodos = new List();
let task = new Task('Купить хлеб');
task.content ='Купить молоко';
let task2 = new Task('Починить машину');
let task3 = new Task('Купить билет в кино');
let task4 = new Task('Покормить кота');
myTodos.addTask(task);
myTodos.addTask(task2);
myTodos.addTask(task3);
myTodos.addTask(task4);
console.log(myTodos.arrayTodo);
myTodos.toggleTodo(1);
console.log(myTodos.arrayTodo);
myTodos.updateTodo(0, "Сварить суп");
console.log(myTodos.filterTodos("active"));
//console.log(myTodos.filterTodos("completed"));
// console.log(myTodos.searchTodos("покормить"));

// myTodos.clearCompletedTodos();
// console.log(myTodos.arrayTodo);
myTodos.deleteTodo(2);
console.log(myTodos.searchTodos("Покормить"));