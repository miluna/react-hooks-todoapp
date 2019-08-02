import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoInput, TodoItem } from './components';
import { Container } from 'react-bootstrap';


export default class App extends Component {
  state = {
    todos: [],
  }
  
  addTodo = todo => {
    const { todos } = this.state;
    const newTodos = [...todos, todo];
    this.setState({ todos: newTodos });
  };

  deleteTodo = todo => {
    const { todos } = this.state;
    const newTodos = [...todos];
    const selectedIndex = newTodos.findIndex(e => e.id === todo.id);
    newTodos.splice(selectedIndex, 1);
    this.setState({ todos: newTodos });
  }

  render() {
    const { todos } = this.state;

    const todoComponents = todos.map(e => <TodoItem todo={e} deleteTodo={this.deleteTodo} />);

    return (
      <Container>
        <h1>Todo App using Hooks</h1>
        <TodoInput addTodo={this.addTodo} />
        <div className="d-flex flex-column justify-content-center align-items-center">
          {todoComponents}
        </div>
      </Container>
    )
  }
}
