import React, {Component} from "react";
import { Button, Checkbox, Table} from 'react-bootstrap';
import db from "../../Config/config";

class TaskList extends Component{

    constructor(porps){
        super(porps);
        this.delTask = this.delTask.bind(this);
    }

    delTask(id){
        console.log(id)
        db.collection("task").doc(id).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }

    render(){
        const {todoList} = this.props;
        return(
            <Table responsive>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Task</th>
                    <th>Description</th>
                    <th>Done</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {todoList.map((todo, index) => {
                    return <tr key={todo.id}>
                        <td>{index+1}</td>
                        <td>{todo.task.title}</td>
                        <td> {todo.task.description} </td>
                        <td><Checkbox/></td>
                        <td><Button bsStyle="danger" onClick={()=>{this.delTask(`${todo.id}`)}}> Del</Button></td>
                    </tr>
                })}
                </tbody>
            </Table>
        );
    }

}

export default TaskList;