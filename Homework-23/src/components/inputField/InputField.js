import React from "react";
import TodoAdd from "./TodoAdd";

const InputField = ({ onAdd }) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <TodoAdd onAdd={onAdd} />
    </header>
  );
};

export default InputField;