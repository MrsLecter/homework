import React from "react";
import TodoAdd from "./TodoAdd";

class TodoHeader extends React.Component{
  render(){
    return(
      <header className="header">
      <h1>todos</h1>
      <TodoAdd onAdd={this.props.onAdd} />
    </header>
    )
  };
}

export default TodoHeader;
