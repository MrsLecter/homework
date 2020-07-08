let todos = [];


//------------------------- data functions -----------------------------

function _addTodos(title, completed){
  let obj = {
    id: todos.length,
    title: title,
    completed: completed,
  };
  todos.push(obj);
}

function _toToggleTodos(title){
  todos.forEach(function(item){
    if(item.title === title){
      item.completed =  (item.completed===true) ? false : true;
    }
  });
}

function _toDeleteTodos(title){
  let index = null;
  todos.forEach(function(item, pos){
    if(item.title === title){
      index = pos;
    }
  });
  todos.splice(index, 1);
}

function _toUpdateTodos(oldTitle, newTitle){
  console.log("oldTitle: " + oldTitle + " newTitle: " + newTitle);
  console.log(todos);
  //todos[index].title = newTitle;
}
//------------------------- extracted items ---------------------------
const listEl = document.querySelector('.todo-list');
const todoApp = document.querySelector(".todoapp");
const toggleInput = document.querySelector(".toggle-all");
const inputField = document.querySelector(".new-todo");
const counterBlock = document.querySelector(".todo-count");
let countTask = counterBlock.firstChild.innerText;
//--------------------------  event listeners  --------------------------
inputField.addEventListener("keydown", toAddTask);
listEl.addEventListener("click", toToggleTodo);
listEl.addEventListener("click", toDeleteTodo);
listEl.addEventListener("dblclick", toUpdateTodo);
//--------------------------- event handlers --------------------------

function toAddTask(){
  if (event.key === "Enter") {
    //console.log("added");
    const newTask = document.createElement('li');
    newTask.classList.add("active");
    const newContent = document.createElement('div');
    newContent.classList.add('view');
    
    const switchEl = document.createElement('input');
    switchEl.classList.add('toggle');
    switchEl.type = "checkbox";

    const labelEl = document.createElement('label');
    labelEl.innerText = inputField.value;
    const deleteEl = document.createElement('button');
    deleteEl.classList.add('destroy');

    if(toggleInput.checked){
      switchEl.checked = true;
      newTask.classList.remove("active")
      newTask.classList.add("completed");
    }

    newContent.appendChild(switchEl);
    newContent.appendChild(labelEl);
    newContent.appendChild(deleteEl);
    
    newTask.appendChild(newContent);

    let compl = null;
    function toCheckCompletedObj(){
      compl = newTask.classList.contains("completed") ?  true : false;
      return compl;
    }
    toCheckCompletedObj();
    _addTodos(inputField.value, compl);

    listEl.appendChild(newTask);

    inputField.value = null;
  }
}

function toToggleTodo(){
  let parentTarget =  event.target.parentElement.parentElement;
  let title = parentTarget.innerText;
  _toToggleTodos(title);
  if(event.target.classList.contains("toggle")){
    if(event.target.checked){
      parentTarget.classList.remove("active");
      parentTarget.classList.add("completed");
    }else if(!event.target.checked){
      parentTarget.classList.remove("completed");
      parentTarget.classList.add("active");
    }
  }
  
}

function toDeleteTodo(){
  let title = event.target.previousSibling.innerText;
  _toDeleteTodos(title);
  if(event.target.classList.contains("destroy")){
    listEl.removeChild(event.target.parentElement.parentElement);
  }
}
let oldTitle = null;
function toUpdateTodo(){
  
  let content = null;
  //let newTitle = null;
  let targetItem = event.target;
  let targetEl = event.target.parentElement.parentElement;
  targetEl.classList.remove("active");
  let forEditingInput  =  document.createElement('input');
  forEditingInput.type = "text";
  forEditingInput.classList.add("edit");
  forEditingInput.value = event.target.innerText;
  targetEl.appendChild(forEditingInput);
  targetEl.classList.add("editing");
  console.log(todos);
  forEditingInput.addEventListener("keydown", function(){
    if (event.key == "Enter") {
    content = forEditingInput.value;
    targetEl.classList.remove("editing");
    targetEl.classList.add("active");
    targetItem.innerText = content;
    console.log(content);
    console.log(oldTitle);
    _toUpdateTodos(oldTitle, content);
  }
  });

}


