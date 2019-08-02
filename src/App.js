import React, { useReducer, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoInput, TodoItem } from './components';
import { Container } from 'react-bootstrap';
import { ADD_TODO, REMOVE_TODO, reducer } from './reducers/TodoReducer';
import ReactiveComponent from "./components/ReactiveComponent";


const App = () => {
  const [state, dispatch] = useReducer(reducer, { todos: [] });

  const addTodo = todo => {
    dispatch({ type: ADD_TODO, payload: todo });
  };

  const deleteTodo = todo => {
    dispatch({ type: REMOVE_TODO, payload: todo });
  };

  const todoComponents = state.todos.map(e => <TodoItem todo={e} deleteTodo={deleteTodo}/>);

  return (
    <Container>
      <h1>Todo App using Hooks</h1>
      <TodoInput addTodo={addTodo}/>
      <div className="d-flex flex-column justify-content-center align-items-center">
        {todoComponents}
      </div>
      <ReactiveComponent todos={state.todos}/>
    </Container>
  )
};

export default App;
