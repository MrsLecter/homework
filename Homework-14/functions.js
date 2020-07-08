export let todos = [];

export const generatorID = () => {
  return Date.now();
};

export const getActiveTodos = () => {
  return todos.filter(todo => !todo.completed);
};

export const getCompletedTodos = () => {
  return todos.filter(todo => todo.completed);
};

export function addTodo({ title, id = generatorID(), completed = false }) {
  todos = [...todos, { id, title, completed }];
}

export function toggleTodo(id) {
  todos = todos.map(todo => {
    if (id == todo.id) {
      return { ...todo, completed: !todo.completed };
    }

    return todo;
  });
}

export function deleteTodo(id) {
  todos = todos.filter(todo => id !== todo.id);
}

export function updateTodo(id, data) {
  if (!data) return todos;

  todos = todos.map(todo => {
    if (id == todo.id) {
      return { ...todo, ...data };
    }

    return todo;
  });
}

export function filterTodos(filter) {
  switch (filter) {
    case "active":
      return todos.filter(todo => !todo.completed);
    case "completed":
      return todos.filter(todo => todo.completed);
    case "all":
      return todos;

    default:
      return new Error(
        `filter: ${filter} - не указан! Укажите одно из: all, active, completed`
      );
  }
}
export function toggleTodos(completed) {
  todos = todos.map(todo => {
    return { ...todo, completed: completed };
  });
}

export function clearCompletedTodos() {
  todos = todos.filter(todo => !todo.completed);
}
