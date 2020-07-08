import React from "react";

const TodoToggle = ({ completed, onToggleAllTodos }) => {
    const setCompleted = e => {
        const checked = e.target.checked;
      };
  return (
      <>
            <input
            onChange={setCompleted}
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            checked={completed}
          />
          <label htmlFor="toggle-all">
              Mark all as complete
          </label>
      </>
  );
};

export default TodoToggle;