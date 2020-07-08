import {
  todos,
  addTodo,
  toggleTodo,
  deleteTodo,
  updateTodo,
  getActiveTodos,
  filterTodos,
  getCompletedTodos
} from "./functions";
import { parseTodos, parseFilter } from "./parse";
import { render } from "./renders";

const filters = [];
let selectedFilter = "";

// парсим данные из DOM
const addTodoField = document.querySelector(".new-todo");
parseTodos(addTodo);
parseFilter((filter, selected) => {
  filters.push(filter);

  if (selected) {
    selectedFilter = filter;
  }
});

// работаем с данными
// console.log(addTodoField.value, todos, filters, selectedFilter);

render({
  todos,
  filter: selectedFilter,
  activeTodos: getActiveTodos(),
  completedTodos: getCompletedTodos()
});

addTodoField.addEventListener("keydown", event => {
  const value = addTodoField.value.trim();

  if (event.key === "Enter") {
    if (value) {
      addTodo({
        title: value
      });

      render({
        todos,
        filter: selectedFilter,
        activeTodos: getActiveTodos(),
        completedTodos: getCompletedTodos()
      });
    }

    addTodoField.value = "";
  }
});

document
  .querySelector(".todoapp")
  .addEventListener("dblclick", ({ target }) => {
    const li = target.closest("li");

    if (li) {
      const edit = li.querySelector(".edit");
      const id = li.querySelector("[data-id]").dataset.id;

      li.classList.add("editing");

      edit.focus();

      edit.addEventListener("blur", () => {
        li.classList.remove("editing");

        console.log(edit.value);

        updateTodo(id, {
          title: edit.value
        });

        render({
          todos,
          filter: selectedFilter,
          activeTodos: getActiveTodos(),
          completedTodos: getCompletedTodos()
        });
      });
    }
  });

document.querySelector(".todoapp").addEventListener("click", event => {
  event.preventDefault();
  const target = event.target;
  const classList = target.classList;

  if (classList.contains("toggle")) {
    const id = target.closest("li").querySelector("[data-id]").dataset.id;
    toggleTodo(id);

    console.log(todos);

    render({
      todos,
      filter: selectedFilter,
      activeTodos: getActiveTodos(),
      completedTodos: getCompletedTodos()
    });
  }

  if (classList.contains("destroy")) {
    const id = target.closest("li").querySelector("[data-id]").dataset.id;

    deleteTodo(id);
    render({
      todos,
      filter: selectedFilter,
      activeTodos: getActiveTodos(),
      completedTodos: getCompletedTodos()
    });
  }

  if (target.dataset.filter) {
    const filter = JSON.parse(target.dataset.filter);
    const filteredTodos = filterTodos(filter);

    selectedFilter = filter;

    render({
      todos: filteredTodos,
      filter: selectedFilter,
      activeTodos: getActiveTodos(),
      completedTodos: getCompletedTodos()
    });
  }
});

// setTimeout(() => {
//   toggleTodo("1");

//   addTodo({
//     title: "Todo 5"
//   });

//   render({
//     todos,
//     filter: selectedFilter,
//     activeTodos: getActiveTodos(),
//     completedTodos: getCompletedTodos()
//   });
// }, 3000);

// setTimeout(() => {
//   updateTodo("2", {
//     title: "Updated todo"
//   });

//   render({
//     todos,
//     filter: selectedFilter,
//     activeTodos: getActiveTodos(),
//     completedTodos: getCompletedTodos()
//   });
// }, 5000);

// setTimeout(() => {
//   addTodo({
//     title: "Todo 4"
//   });

//   toggleTodo("2");
//   toggleTodo("1");

//   console.log(todos);

//   renderTodos(todos);
// }, 2000);
