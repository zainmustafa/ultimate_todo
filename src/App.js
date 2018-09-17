import React, { Component } from 'react';
import { Grid, Row, Navbar, Col} from 'react-bootstrap';
import AddForm from "./Components/AddForm/AddForm";
import TaskList from "./Components/TaskList/TaskList";
import firebase from "firebase"
import {DB_CONFIG}from "./Config/config";

class App extends Component {
    constructor(){
        super();
        this.state = {
            taskTxt:'',
            description:''
        };
        !firebase.apps.length ? firebase.initializeApp(DB_CONFIG) : firebase.app();
        this.db = firebase.firestore();
        this.add  = this.add.bind(this);
    }
    add(task, description){
        this.setState({taskTxt:task, description});
        this.db.collection("task").add({
            title: task,
            description: description,
            done: false,
            createdAt: new Date
        }).then(function(docRef) {console.log("Document written with ID: ", docRef.id);})
            .catch(function(error) {console.error("Error adding document: ", error);});
    }
    render() {
        const {taskTxt, description} = this.state;
        console.log('Console***',taskTxt +'---'+description)
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
                        <TaskList/>
                    </Col>
                </Row>
            </Grid>
        );
  }
}

export default App;
