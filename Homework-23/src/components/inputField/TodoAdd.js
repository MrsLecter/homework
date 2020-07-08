import React from "react";

const TodoAdd = ({ onAdd }) => {
    const handleAddTodo = e => {
    const value = e.target.value.trim();

    if (e.key === "Enter" && value) {
      onAdd(value);
      e.target.value = "";
    }
    };
    return (
        <input
            onKeyUp={handleAddTodo}
            className="new-todo"
            placeholder="What needs to be done?"
          />
    );
    };

    export default TodoAdd;