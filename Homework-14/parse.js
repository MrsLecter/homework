export const parseTodos = callback => {
  const todoFields = document.querySelectorAll(".todo-list li");
  todoFields.forEach(todoField => {
    const label = todoField.querySelector("label");
    const toggle = todoField.querySelector(".toggle");

    const id = label.dataset.id;
    const title = label.innerText;
    const completed = toggle.checked;

    callback({ id, title, completed });
  });
};

export const parseFilter = callback => {
  const filterFields = document.querySelectorAll("[data-filter]");

  filterFields.forEach(filterField => {
    if (filterField.dataset.filter) {
      const selected = filterField.classList.contains("selected");
      const filter = JSON.parse(filterField.dataset.filter);
      callback(filter, selected);
    }
  });
};
