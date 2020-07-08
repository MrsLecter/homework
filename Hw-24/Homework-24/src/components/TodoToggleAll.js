import React from "react";

class TodoToggleAll extends React.Component{

  handleAllTodos(event){
    const checked = event.target.checked;
    this.props.onToggleAllTodos(checked);
  };

  render(){
    return(
      <>
      <input
        onChange={(e)=>this.handleAllTodos.bind(this)}
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={this.props.isCompletedAllTodos}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </>
    )
  }
}

export default TodoToggleAll;
