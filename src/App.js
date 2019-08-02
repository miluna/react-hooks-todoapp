import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoInput, TodoItem } from './components';
import { Container } from 'react-bootstrap';


const App = () => {
  const [todos, setTodos] = useState([]);
  
  const addTodo = todo => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  const deleteTodo = todo => {
    const newTodos = [...todos];
    const selectedIndex = newTodos.findIndex(e => e.id === todo.id);
    newTodos.splice(selectedIndex, 1);
    setTodos(newTodos);
  };

    const todoComponents = todos.map(e => <TodoItem todo={e} deleteTodo={deleteTodo} />);

    return (
      <Container>
        <h1>Todo App using Hooks</h1>
        <TodoInput addTodo={addTodo} />
        <div className="d-flex flex-column justify-content-center align-items-center">
          {todoComponents}
        </div>
      </Container>
    )
};

export default App;
