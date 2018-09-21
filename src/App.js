import React, { Component } from 'react';
import './App.css'; 
import AddForm from "./Components/AddForm/AddForm";
import TaskList from "./Components/TaskList/TaskList";
import logo from './logo.png';
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
        this.delTask  = this.delTask.bind(this);
        this.navabar=this.navabar.bind(this);
    }
    componentWillMount(){
        fetch('https://sql-node-api.herokuapp.com/todo/api/v1.0/tasks').then(res => res.json())
            .then(response => console.log('res', this.setState({todos:response})))
            .catch(error => console.error('Error:', error));
    }

    add(task, description){
        const {todos} = this.state;
        fetch('https://sql-node-api.herokuapp.com/todo/api/v1.0/tasks', {
            method: 'POST',
            body: JSON.stringify({title:task,description}),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => {
                this.setState({todos:response})
            })
            .catch(error => console.error('Error:', error));
    }
    delTask(id,index){
        const {todos} = this.state;
        fetch(`https://sql-node-api.herokuapp.com/todo/api/v1.0/tasks/${id}`,{method: "DELETE"})
            .then(res => res.json())
            .then(response => {
                todos.splice(index,1);
                this.setState({todos});
                swal("Firebase Realtime Todo!", "Todo Deleted!", "error");
                console.log('res', console.log(response))
            }).catch(error => console.error('Error:', error));
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
                            <TaskList delTask={this.delTask} todoList={todos}/>
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
