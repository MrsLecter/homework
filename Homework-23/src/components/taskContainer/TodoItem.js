import React, { useState, useRef, useEffect } from "react";

const TodoItem = ({ todo, deleteTodo, toggleTodo, updateTodo }) => {
  const [editing, setEditing] = useState(false);
  
  const editRef = useRef();

  useEffect(() => {
    if (editing) {
      editRef.current.focus();
    }
  }, [editing]);

  return (
    <li
      className={`${todo.completed ? "completed" : ""} ${
        editing ? "editing" : ""
      }`}
      onDoubleClick={() => {
        setEditing(true);
      }}
    >
      <div className="view">
        <input
          className="toggle"
          checked={todo.completed}
          type="checkbox"
          data-todo="toggle"
          onChange={() => toggleTodo(todo.id)}
        />
        <label data-id={1}>{todo.title}</label>
        <button
          data-todo="delete"
          className="destroy"
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
      <input
        ref={editRef}
        type="text"
        className="edit"
        defaultValue="Todo 1"
        onBlur={() => setEditing(false)}
      />
    </li>
  );
};

export default TodoItem;
