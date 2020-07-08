const url = new URL('https://x5s8e.sse.codesandbox.io/todos');

const $app = document.querySelector(".todoapp");
const $todos = $app.querySelector(".todo-list");
const $inputField = document.querySelector(".new-todo");
const $filterButtons = document.querySelector(".filters");
//----------------------------------------------------------------------
let _limit = "all";
let _totalTodos = null;
//----------------------------------------------------------------------
let todos = [];
//----------------------------------------------------------------------
$inputField.addEventListener("keydown", event => {
  //toClearList();
  _limit = $inputField.value;
      if (event.key === "Enter") {
       // toClearList();
        toSendRequest(url, _limit);
      }
});

$filterButtons.addEventListener("click", event => {
  event.preventDefault();
  toApplyFilter(event.target.innerText);
});

$todos.addEventListener("dblclick", event => {
  let target = event.target;
  let targetId = target.parentNode.parentNode.dataset.id;
  let targetParent = target.parentNode.parentNode;
  let targetCompleted = targetParent.classList.contains("completed");
  let targetInput = targetParent.querySelectorAll("input")[1];
  let address = url;
  let targetContent = null;
    if(target.tagName == "LABEL"){
      const target = event.target
        if (target.tagName === 'LABEL') {
          targetParent.classList.remove('active');
          targetParent.classList.add('editing');

          targetParent.addEventListener("keydown", event =>{
            if(event.key === "Enter"){
              targetContent = targetInput.value;
              targetParent.classList.remove('editing');
              target.innerText = targetContent;
              let relativeId = "/todos/"+targetId;
              let newUrl = new URL(relativeId, url);
              fetch(newUrl, {
                method: "PUT",
                headers: {
                  'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
                },
                body: JSON.stringify({
                  title: target.innerText,
                  completed: targetCompleted
                })
              }).then(data => console.log(data))
              .catch(err => console.error(err));
            }
          });
        }
    }
});

//delete todo
$todos.addEventListener("click", event => {
  let $target = event.target;
  let $targetParent = $target.parentNode.parentNode;
  let $targetId = $target.parentNode.parentNode.dataset.id;
  if($target.tagName == "BUTTON"){
    $todos.removeChild($targetParent);
    console.log($target.classList.contains("destroy"));
    let relativeId = "/todos/"+$targetId;
    let newUrl = new URL(relativeId, url);

    fetch(newUrl, {
      method: "DELETE"
    })
    .then(data => {console.log(data); _totalTodos--;})
    .catch(err => console.error(err));
      
  }
  
});
//toggle todo
$todos.addEventListener("click", event => {
  let target = event.target;
  let itCompleted = null;
  let targetId = target.parentNode.parentNode.dataset.id;
  let relativeId = "/todos/"+targetId;
    let newUrl = new URL(relativeId, url);
  if(target.classList.contains("toggle")){
    if(target.checked){
      console.log( target.parentNode.parentNode);
      target.parentNode.parentNode.classList.remove("active");
      target.parentNode.parentNode.classList.add("completed");
      itCompleted = true;
    }else if(!target.checked){
      target.parentNode.parentNode.classList.remove("completed");
      target.parentNode.parentNode.classList.add("active");
      itCompleted = false;
    }
    fetch(newUrl, {
        method: "PUT",
        headers: {
          'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
         },
        body: JSON.stringify({
          title: target.nextElementSibling.innerText,
          completed: itCompleted
        })
      })
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }
});

window.addEventListener("load", function(event) {
  console.log("All resources finished loading!");
  toSendRequest(url, "all");
});
//----------------------------------------------------------------------
async function toSendRequest(address, limit) {
  try{
    const resp = await fetch(address);
    let data = await resp.json();
    if(limit==="all"){
      limit = data.length;
    }else if(limit > data.length){
      console.warn("Вы запрашиваете: " + limit + " элеметов всего: " + data.length);
    }else if(limit < data.length){
      data = data.slice(0, limit);
    }
      renderTodos(data);
  }catch(err){
    console.error(err);
  }
  
};

const templateTodo = ({ id, title, completed = false }) => {
  const className = completed ? "completed" : "active";
  return `<li class="${className}" data-id="${id}">
  <div class="view">
    <input class="toggle" type="checkbox" ${
      completed ? "checked" : ""
    } /><label>${title}</label
    ><button class="destroy"></button>
  </div>
  <input type="text" class="edit" value="${title}" />
</li>`;
};

const templateTodos = todos => {
  return todos.reduce((todos, todo) => {
    todos += templateTodo(todo);
    return todos;
  }, "");
};

const renderTodos = (todos = []) => {
  $todos.innerHTML = templateTodos(todos);
};

function toClearList(){
  $todos.innerHTML = "";
}

function toApplyFilter(data = "All", address = url){
  function toSelect(i){
      for(let i = 0; i < $filterButtons.querySelectorAll("a").length; i++){
          $filterButtons.querySelectorAll("a")[i].classList.remove("selected");
      }
      if(!$filterButtons.querySelectorAll("a")[i].classList.contains("selected")){
          $filterButtons.querySelectorAll("a")[i].classList.add("selected");
      }
  }    
  toClearList();

    if(data === "All"){
        address.searchParams.delete("completed");
        toSelect(0);
        toSendRequest(address, _limit);
    }else  if(data === "Completed"){
        toSelect(2);
        toSendFilteredRequest("Completed", address);
    }else if(data ===  "Active"){
        toSelect(1);
        toSendFilteredRequest("Active", address);
    }  
}

function toSendFilteredRequest(filter, address){
  if(filter === "Completed"){
   address.searchParams.set("completed", true);
  }else if(filter === "Active"){
    address.searchParams.set("completed", false);
  }
  toSendRequest(address,_limit);
}