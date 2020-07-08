import React, { useState, useEffect } from "react";
import "./styles.css";

//import TodoList from "./components/taskContainer/TodoList";
import generateID from "./util/toGenerateId";
//import TodoToggle from "./components/taskContainer/TodoToggle";

import FilterField from "./components/filterField/FilterField";
import InputField from "./components/inputField/InputField";
import TaskContainer from "./components/taskContainer/TaskContainer";
let data = [
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
];

const getCountActiveTodos = todos => {
  return todos.filter(todo => !todo.completed).length;
};

const getCountCompletedTodos = todos => {
  return todos.filter(todo => todo.completed).length;
};

export default function App() {
  const [todos, setTodos] = useState(data);
  //const [count, setCount] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [filter, setFilter] = useState("all");

  const toggleTodo = id => {
    setTodos(todos => {
      return todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  const updateTodo = (id, body) => {
    setTodos(todos => {
      return todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, ...body };
        } else {
          return todo;
        }
      });
    });
  };

  //const generateID = () => new Date().getTime();

  const addTodo = title => {
    const id = generateID();
    const todo = { id, title, completed: false };

    setTodos(todos => [...todos, todo]);
    setFilter("all");
  };

  const deleteTodo = id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  const toggleAllTodos = completed => {
    //console.log(completed);
    setTodos(todos =>
      todos.map(todo => ({
        ...todo,
        completed
      }))
    );
  };

  const filterTodos = filter => {
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

  useEffect(() => {
    //setCount(getCountActiveTodos(todos));
    setCompleted(todos.length === getCountCompletedTodos(todos));
  }, [todos]);

  const clearCompleted = () => {
    setTodos(todos => todos.filter(todo => !todo.completed));
  };

  // const handleAddTodo = e => {
  //   const value = e.target.value.trim();

  //   if (e.key === "Enter" && value) {
  //     addTodo(value);
  //     e.target.value = "";
  //   }
  // };

  const filteredTodos = filterTodos(filter);
  const activedTodos = getCountActiveTodos(todos);
  const completedTodos = getCountCompletedTodos(todos);

  return (
    <div className="App">
      <section className="todoapp">
      <InputField onAdd={addTodo} />
        {/* <header className="header">
          <h1>todos</h1>
          <TodoAdd onAdd={addTodo} /> */}
          {/* <input
            onKeyUp={handleAddTodo}
            className="new-todo"
            placeholder="What needs to be done?"
          /> */}
        {/* </header> */}
        <section className="main">
        <TaskContainer
        todos={filteredTodos}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
        onUpdate={updateTodo}
        isCompletedAllTodos={completed}
        onToggleAllTodos={toggleAllTodos}
      />
          {/* <input
            onChange={e => setCompleted(e.target.checked)}
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            checked={completed}
          />
          <label htmlFor="toggle-all">Mark all as complete</label> */}
          {/* <TodoToggle
        isCompletedAllTodos={completed}
        onToggleAllTodos={toggleAllTodos}
      /> */}

          {/* <TodoList
            todos={filteredTodos}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            updateTodo={updateTodo}
          /> */}
        </section>
        <FilterField
          activedTodos={activedTodos}
          completedTodos={completedTodos}
          filter={filter}
          //onFilter={setFilter}
          setFilter={setFilter}
          onClearCompleted={clearCompleted}
        />
        {/* <footer className="footer">
          <span className="todo-count">
            <strong>{count}</strong> items left
          </span>
          <TodoFilter filter={filter} handleFilter={setFilter} />
          <button data-todo="clear-completed" className="clear-completed">
            Clear completed
          </button>
        </footer> */}
      </section>
    </div>
  );
}

