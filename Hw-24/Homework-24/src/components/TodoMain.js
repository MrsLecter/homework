import React from "react";

import TodoList from "./TodoList";
import TodoToggleAll from "./TodoToggleAll";

class TodoMain extends React.Component{
  render(){
    //console.log(this.props.todos);
    return(
      <section className="main">
      <TodoToggleAll
        isCompletedAllTodos={this.props.isCompletedAllTodos}
        onToggleAllTodos={this.props.onToggleAllTodos}
      />

      <TodoList
        todos={this.props.todos}
        onDelete={this.props.onDelete}
        onToggle={this.props.onToggle}
        onUpdate={this.props.onUpdate}
      />
    </section>
    )
  }
}

export default TodoMain;
