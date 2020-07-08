import React from "react";

import TodoFilter from "./TodoFilter";

class TodoFooter extends React.Component{
  render(){
    return(
      <footer className="footer">
      <span className="todo-count">
        <strong>{this.props.activedTodosCount}</strong> items left
      </span>
      <TodoFilter filter={this.props.filter} onFilter={this.props.onFilter} />
      {this.props.completedTodosCount > 0 && (
        <button
          type="button"
          className="clear-completed"
          onClick={this.props.onClearCompleted}
        >
          Clear completed
        </button>
      )}
    </footer>
    )
  }
}

export default TodoFooter;
