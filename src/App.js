import React, { Component } from 'react';
import { Grid, Row, Navbar, Col} from 'react-bootstrap';
import AddForm from "./Components/AddForm/AddForm";
import TaskList from "./Components/TaskList/TaskList";
import {DB_CONFIG}from "./Config/config";
import firebase from "firebase/app"

class App extends Component {
    constructor(){
        super();
        this.state = {
            taskTxt:'',
        };
        this.app = firebase.initializeApp(DB_CONFIG);
        this.db = this.app.firestore();
        this.add  = this.add.bind(this);
    }
    add(txt){
        this.setState({taskTxt:txt})
    }
    render() {
        const {taskTxt} = this.state;
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
                    <Col sm={4} smOffset={4}>
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
