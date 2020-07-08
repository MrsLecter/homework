import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component{
  render(){
    let todos = this.props.todos;
    //console.log(todos);
    return(
      <ul className="todo-list">
     {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={this.props.onDelete}
          onToggle={this.props.onToggle}
          onUpdate={this.props.onUpdate}
        />
     ))};
    </ul>
    )
  }
}

export default TodoList;

