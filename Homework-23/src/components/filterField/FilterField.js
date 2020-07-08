import React from "react";

import TodoFilter from "./TodoFilter";

const FilterField = ({
  activedTodos,
  completedTodos,
  filter,
  setFilter,
  onClearCompleted
  //clearCompleted
}) => {
  return (
    <footer className="footer">
          <span className="todo-count">
            <strong>{activedTodos}</strong> items left
          </span>
          <TodoFilter filter={filter} handleFilter={setFilter} />
          <button data-todo="clear-completed" className="clear-completed" onClick={onClearCompleted}>
            Clear completed
          </button>
        </footer>
  );
};

export default FilterField;