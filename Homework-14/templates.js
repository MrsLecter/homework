export const todoTemplate = ({ id, title, completed = false }) => {
  const li = document.createElement("li");
  const view = document.createElement("div");
  const input = document.createElement("input");
  const label = document.createElement("label");
  const destroy = document.createElement("button");
  const edit = document.createElement("input");

  destroy.classList.add("destroy");
  edit.type = "text";
  edit.value = title;
  edit.classList.add("edit");

  label.dataset.id = id;
  label.innerText = title;

  input.type = "checkbox";
  input.classList.add("toggle");
  input.checked = completed;
  view.classList.add("view");
  view.appendChild(input);
  view.appendChild(label);
  view.appendChild(destroy);

  li.appendChild(view);
  li.appendChild(edit);

  return li;
};

export const todoTemplate2 = (template, { id, title, completed = false }) => {
  const newTemplate = template.cloneNode(true);
  const titleTemplate = newTemplate.querySelector("label");

  titleTemplate.innerText = title;
  return newTemplate;
};

export const todoTemplate3 = ({ id, title, completed = false }) => {
  const todo = document.createElement("li");

  if (completed) {
    todo.classList.add("completed");
  }

  const template = `
    <div class="view">
      <input class="toggle" type="checkbox" ${
        completed ? "checked" : ""
      } /><label data-id="${id}"
        >${title}</label
      ><button class="destroy"></button>
    </div>
    <input type="text" class="edit" value="${title}" />
  `;

  todo.innerHTML = template;

  return todo;
};
