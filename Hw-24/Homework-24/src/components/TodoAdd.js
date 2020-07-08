import React from "react";

class TodoAdd extends React.Component{
 
  haldleTodo(event){
    // event.preventDefault();
    const value = event.target.value.trim();

    if (event.key === "Enter" && value) {
      this.props.onAdd(value);
      event.target.value = "";
    }
  }
  render(){
    return(
      <input
      onKeyUp={this.haldleTodo.bind(this)}
      className="new-todo"
      placeholder="What needs to be done?"
    />
    )
  }
}

export default TodoAdd;
