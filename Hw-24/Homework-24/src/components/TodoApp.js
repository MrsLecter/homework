import React, { useState, useEffect } from "react";

import TodoHeader from "./TodoHeader";
import TodoFooter from "./TodoFooter";
import TodoMain from "./TodoMain";
import generateID from "../utils/generateID";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: "Todo 1",
          completed: false
        },
        {
          id: 2,
          title: "Todo 2",
          completed: true
        },
        {
          id: 3,
          title: "Todo 3",
          completed: false
        }
      ],
      completed: false,
      filter: "all",
    };
    
  }

  setTodos(newTodos){
    let todos = this.state.todos;
    this.setState({
      todos: todos.push(newTodos),
    });
  }

  setCompleted(newCompleted){
    this.setState({
      completed: newCompleted,
    });
  }

  setFilter(newFilter){
    this.setState({
      filter: newFilter,
    });
  }

  addTodo(title){
    const id = generateID();
    const todo = { id, title, completed: false };

    this.setTodos(todo);
  };

  filterTodos(filter){
    let todos = this.state.todos;
    return todos.filter(todo => {
      switch (filter) {
        case "active":
          return !todo.completed;
        case "completed":
          return todo.completed;

        default:
          return true;
      }
    });
  };

  filteredTodos(){
    let filter = this.state.filter;
    this.filterTodos(filter);
  } 

  deleteTodo(id){
    let todos = this.state.todos;
    this.setTodos(function(todos){
      return todos.filter(todo => todo.id !== id)
    });
  };

  toggleTodo(id){
    let todos = this.state.todos;
    this.setTodos(todos =>
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };

  updateTodo(id, body){
    let todos = this.state.todos;
    this.setTodos(todos =>
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, ...body };
        } else {
          return todo;
        }
      })
    );
  };

  clearCompleted(){
    let todos = this.state.todos;
    this.setTodos(todos => todos.filter(todo => !todo.completed));
  };

  toggleAllTodos(completed){
    let todos = this.state.todos;
    this.setTodos(todos => todos.map(todo => ({ ...todo, completed })));
    this.setCompleted(completed);
  };

  getCountActiveTodos(todos){
    return todos.filter(todo => !todo.completed).length;
  }

  getCountCompletedTodos(todos){
    return todos.length - this.getCountActiveTodos(todos);
  }

  render(){
    return(
      <section className="todoapp">
        <TodoHeader onAdd={this.addTodo} />
        <TodoMain
          todos={this.filterTodos.bind(this,this.state.filter)}
          onDelete={this.deleteTodo}
          onToggle={this.toggleTodo}
          onUpdate={this.updateTodo}
          isCompletedAllTodos={this.state.completed}
          onToggleAllTodos={this.toggleAllTodos}
        />
        {this.state.todos.length > 0 && (
        <TodoFooter
          activedTodosCount={this.getCountActiveTodos.bind(this,this.state.todos)}
          completedTodosCount={this.getCountCompletedTodos.bind(this, this.state.todos)}
          filter={this.state.filter}
          onFilter={this.setFilter}
          onClearCompleted={this.clearCompleted}
        />
      )}
      </section>
    )
  }
}

export default App;