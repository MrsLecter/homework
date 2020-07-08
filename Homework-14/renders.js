import { todoTemplate3 } from "./templates";

const renderFooter = isActive => {
  const footer = document.querySelector(".footer");

  if (isActive) {
    footer.hidden = false;
  } else {
    footer.hidden = true;
  }
};

const renderTodos = todos => {
  const todosUL = document.querySelector(".todo-list");
  todosUL.innerHTML = "";

  todos.forEach(todo => {
    todosUL.appendChild(todoTemplate3(todo));
  });
};

const renderItemsLeft = count => {
  const todoCount = document.querySelector(".todo-count strong");

  todoCount.innerText = count;
};

const renderClearCompleted = isActive => {
  const clearCompleted = document.querySelector(".clear-completed");

  if (isActive) {
    clearCompleted.hidden = false;
  } else {
    clearCompleted.hidden = true;
  }
};

const renderFilter = value => {
  const filters = document.querySelectorAll("[data-filter]");

  filters.forEach(filter => {
    const filterValue = JSON.parse(filter.dataset.filter);

    if (filterValue === value) {
      filter.classList.add("selected");
    } else {
      filter.classList.remove("selected");
    }
  });
};

export const render = ({
  todos = [],
  filter = "all",
  activeTodos = [],
  completedTodos = []
}) => {
  renderTodos(todos);
  renderFooter(todos.length > 0);
  renderFilter(filter);
  renderItemsLeft(activeTodos.length);
  renderClearCompleted(completedTodos.length > 0);
};
