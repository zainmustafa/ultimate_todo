import React, { Component } from 'react';
import './App.css'; 
import AddForm from "./Components/AddForm/AddForm";
import TaskList from "./Components/TaskList/TaskList";
import logo from './logo.png'

class App extends Component {
    constructor(){
        super();
        this.state = {
            taskTxt:'',
            description:'',
            todos:[]
        };
        this.add  = this.add.bind(this);
        this.navabar=this.navabar.bind(this)
    }
    componentWillMount(){
        // const previousTodos = this.state.todos;
        fetch('https://nosql-node-api.herokuapp.com/todo/api/v1.0/tasks').then(res => res.json())
            .then(response => console.log('res', this.setState({todos:response})))
            .catch(error => console.error('Error:', error));

    }

    add(task, description){
        const {todos} = this.state;
        fetch('https://nosql-node-api.herokuapp.com/todo/api/v1.0/tasks', {
            method: 'POST',
            body: JSON.stringify({title: task,description}),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => {
                console.log(response);
                todos.push(response);
                this.setState({todos})
            })
            .catch(error => console.error('Error:', error));
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
                            <TaskList todoList={todos}/>
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
