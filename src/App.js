import React, { Component } from 'react';
import { Grid, Row, Navbar, Col} from 'react-bootstrap';
import AddForm from "./Components/AddForm/AddForm";
import TaskList from "./Components/TaskList/TaskList";
import db from "./Config/config";

class App extends Component {
    constructor(){
        super();
        this.state = {
            taskTxt:'',
            description:'',
            todos:[]
        };
        this.add  = this.add.bind(this);
    }

    componentWillMount(){
        const previousTodos = this.state.todos;
        db.collection("task").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                previousTodos.push({id:doc.id,task:doc.data()})
            });
        }).then(()=>{this.setState({todos:previousTodos})})

        db.collection("task").onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                for (let i = 0; i < previousTodos.length; i++) {
                    if(previousTodos[i].id === change.doc.id ){
                        previousTodos.splice(i,1);
                    }
                }
                if (change.type !== "removed") {
                    previousTodos.push({id:change.doc.id,task:change.doc.data()});
                }
                this.setState({todos:previousTodos});
            })
        });
    }


    add(task, description){
        db.collection("task").add({
            title: task,
            description: description,
            done: false,
            createdAt: new Date
        }).then(function(docRef) {console.log("Document written with ID: ", docRef.id);})
            .catch(function(error) {console.error("Error adding document: ", error);});
    }
    render() {
        const {todos} = this.state;
        return (
            <Grid>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#home">Realtime Todo App</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
                <Row>
                    <Col sm={6} smOffset={3}>
                        <AddForm Add={this.add}/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8} smOffset={2}>
                        <TaskList todoList={todos}/>
                    </Col>
                </Row>
            </Grid>
        );
  }
}

export default App;
