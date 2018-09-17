import React, {Component} from "react";
import { Button, Checkbox, Table} from 'react-bootstrap';

class TaskList extends Component{

    constructor(porps){
        super(porps);
    }

    render(){
        const {todoList} = this.props;
        console.log(todoList)
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
                {todoList.map(function (todo, index) {
                    return <tr key={todo.id}>
                        <td>{index+1}</td>
                        <td>{todo.task.title}</td>
                        <td> {todo.task.description} </td>
                        <td><Checkbox/></td>
                        <td><Button bsStyle="danger">Del</Button></td>
                    </tr>
                })}
                </tbody>
            </Table>
        );
    }

}

export default TaskList;