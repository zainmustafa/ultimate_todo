import React, { Component } from 'react';
import './App.css'; 
import AddForm from "./Components/AddForm/AddForm";
import TaskList from "./Components/TaskList/TaskList";
import logo from './logo.png'
import swal from 'sweetalert2';

class App extends Component {
    constructor(){
        super();
        this.state = {
            taskTxt:'',
            description:'',
            todos:[]
        };
        this.add  = this.add.bind(this);
        this.navabar=this.navabar.bind(this);
        this.delTask = this.delTask.bind(this);
        this.updateTask = this.updateTask.bind(this);
    }

/* Delete Function */
    delTask(index) {
        const {todos} = this.state;
        todos.splice(index,1);
        this.setState({todos});
        swal("Firebase Realtime Todo!", "Todo Deleted!", "error");
    }
    /* Delete Function */

    /* Update Function */
    updateTask(index) {
        const { todoList } = this.props;
        
    }

    /* Update Function End */

    add(task, description){
            const{todos} = this.state;
            const newTodo = {
                title:task,
                description:description,
            }
            todos.push(newTodo)
            this.setState(todos);
    }
    render() {
        const {todos} = this.state;
        return (
            <div className="App">
                <this.navabar/>
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <div className="form-group">
                            <AddForm Add={this.add}/>
                        </div>
                        <div className="form-group">
                            <TaskList updateTask={this.updateTask} delTask={this.delTask} todoList={todos}/>
                        </div>
                    </div>
                </div>
            </div>
        );
  }

  navabar() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img src={logo} width="35" height="35" className="d-inline-block align-middle" alt=""/>
            Firebase Realtime Todo
        </a>
      </nav>
    )
  }
}

export default App;
