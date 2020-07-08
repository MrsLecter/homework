import React from "react";

import TodoList from "./TodoList";
import TodoToggle from "./TodoToggle";

const TaskContainer = ({
  todos,
  onDelete,
  onToggle,
  onUpdate,
  isCompletedAllTodos,
  onToggleAllTodos
}) => {
  return (
    <section className="main">
      <TodoToggle
        //isCompletedAllTodos={isCompletedAllTodos}
        completed={isCompletedAllTodos}
        onToggleAllTodos={onToggleAllTodos}
      />

      <TodoList
        todos={todos}
        //onDelete={onDelete}
        deleteTodo={onDelete}
        //onToggle={onToggle}
        toggleTodo={onToggle}
        //onUpdate={onUpdate}
        updateTodo={onUpdate}
      />
    </section>
  );
};

export default TaskContainer;
