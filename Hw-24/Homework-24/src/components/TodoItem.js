import React from "react";

class TodoItem extends React.Component{
  constructor(props){
    super(props);
    
    this.editRef = null;
    this.state ={
      editing: false,
      value: this.props.todo.title
    };
    //this.editing = this.state.editing;
  }

  componentDidMount(){
    if (this.editing) {
      this.editRef.current.focus();
    }
  }

  componentWillUnmount(){
    if (this.editing) {
      this.editRef.current.focus();
    }
  }

  setEditing(newEditing){
    this.setState({
      editing: newEditing
    })
  }

  setValue(newValue){
    this.setState({
      value: newValue
    })
  }
  handleAdd = () => this.props.onToggle(this.props.todo.id);
  handleDelete = () => this.props.onDelete(this.props.todo.id);
  handleEdit = () => this.setEditing(!this.state.editing );
  handleChange = event => this.setValue(event.target.value.trim());
  handleKeyDown = event => {
    if (event.key === "Enter") {
      this.handleSubmit();
    }

    if (event.key === "Escape") {
      this.setValue(this.props.todo.title);
      this.handleEdit();
    }
  };
  handleSubmit(){
    if (this.state.value) {
      this.props.onUpdate(this.props.todo.id, { title: this.state.value });
      this.setEditing(false);
    }
  };
  className = `${this.props.todo.completed ? "completed" : ""} ${
    this.editing ? "editing" : ""
  }`;

  render(){
    return(
    <li className={this.className}>
      <div className="view">
          <input
            className="toggle"
            checked={this.props.todo.completed}
            type="checkbox"
            onChange={this.handleAdd}
          />
          <label onDoubleClick={(e) => this.handleEdit(e)}>{this.props.todo.title}</label>
          <button className="destroy" onClick={this.handleDelete} />
        </div>
        <input
          ref={this.editRef}
          type="text"
          className="edit"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          onBlur={this.handleSubmit}
      />
    </li>
    );
  }
}

export default TodoItem;

