import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import logo from '../../public/logo.png';
import {
  fetchTodos,
  addTodo,
  editTodo,
  deleteTodo,
  completeTodo,
} from '../modules/todos/actions';

class App extends React.Component {
  static propTypes = {
    todos: PropTypes.object.isRequired,
    fetchTodos: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos } = this.props;
    return (
      <div>
          <this.navabar/>
        <Header
          addTodo={this.props.addTodo}
          loading={todos.pending && !todos.data.length}
          error={todos.error ? todos.error.message : ''}
        />
        <MainSection
          todos={todos}
          editTodo={this.props.editTodo}
          deleteTodo={this.props.deleteTodo}
          completeTodo={this.props.completeTodo}
        />
      </div>
    );
  }

    navabar() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    <img src={logo} width="35" height="35" className="d-inline-block align-middle" alt=""/>
                    ReactiveX Sql Todo
                </a>
            </nav>
        )
    }
}

const mapStateToProps = state => ({
  todos: state.todos,
  filter: state.visibilityFilter,
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(fetchTodos()),
  addTodo: (title,description )=> dispatch(addTodo(title,description)),
  editTodo: (id, text, description) => dispatch(editTodo(id, text, description)),
  deleteTodo: id => dispatch(deleteTodo(id)),
  completeTodo: (id, completed) => dispatch(completeTodo(id, completed)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
