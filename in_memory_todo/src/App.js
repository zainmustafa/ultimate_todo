import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import NavBar from './components/NavBar';
import TaskList from './components/TaskList';

class App extends Component {
  state = {
    title: '',
    description: '',
    todos: []
  };

  handleAdd = () => {
    const { todos } = this.state;
    const newTodo = {
      title: this.state.title,
      description: this.state.description
    };
    todos.push(newTodo);
    this.setState(todos);
    console.log(this.state.todos);
  };

  handleReset = () => {
    const todos = [];
    this.setState({todos});
  };

  handleTitle = (event) => {
    this.setState({title: event.target.value});
  };

  handleDescription = (event) => {
    this.setState({description: event.target.value});
  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalTodos={this.state.todos.length} />
        <main className="container">
          <Input 
            onAdd={this.handleAdd}
            handleTitle={this.handleTitle}
            handleDescription={this.handleDescription}
            handleReset={this.handleReset}
          />
          <TaskList todos={this.state.todos} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
