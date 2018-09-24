import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoTextInput from './TodoTextInput';

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  }

  handleSave = (text,description) => {
    if (text.length !== 0 && description.length !== 0) {
      this.props.addTodo(text,description);
    }
  }

  render() {
    return (
      <header className="header">
          <TodoTextInput
              addTask={this.addTask}
              newTodo
              onSave={this.handleSave}
              placeholder="Task Title"
          />
      </header>
    );
  }
}
