import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import NavBar from './components/NavBar';
import TaskList from './components/TaskList';

class App extends Component {
  state = {
    title: '',
    description: '',
    todos: [],
    updateTitleText: '',
    updateDescriptionText: '',
    index: 0
  };

  handleAdd = () => {
    const { todos } = this.state;
    const newTodo = {
      title: this.state.title,
      description: this.state.description
    };
    todos.push(newTodo);
    this.setState(todos);
  };

  handleDelete = index => {
    const { todos } = this.state;
    todos.splice(index, 1);
    this.setState({ todos });
  };

  handleReset = () => {
    const todos = [];
    this.setState({todos});
  };

  handleTitle = (key, event) => {
    this.setState({[key]: event.target.value});
  };

  handleDescription = (key, event) => {
    this.setState({[key]: event.target.value});
  };

  handleUpdateText = (todo) => {
    this.setState({
      updateTitleText: todo.title,
      updateDescriptionText: todo.description
    });
  };

  handleUpdateTask = () => {
    const { todos, index, updateTitleText, updateDescriptionText } = this.state;
    todos[index].title = updateTitleText;
    todos[index].description = updateDescriptionText;
    this.setState({ todos });
    console.log(index);
    console.log(todos);
  };

  storeIndex = (index) => {
    this.setState({
      index: index
    });
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
          <TaskList 
            todos={this.state.todos} 
            onDelete={this.handleDelete}
            handleTitle={this.handleTitle}
            handleDescription={this.handleDescription}
            handleUpdateText={this.handleUpdateText}
            updateTitleText={this.state.updateTitleText}
            updateDescriptionText={this.state.updateDescriptionText}
            updateTask={this.handleUpdateTask}
            storeIndex={this.storeIndex}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
