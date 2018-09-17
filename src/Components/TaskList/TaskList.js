import React, {Component} from "react";
import { Button, Checkbox, Table} from 'react-bootstrap';

class TaskList extends Component{

    constructor(porps){
        super(porps);
    }

    render(){
        return(
            <Table responsive>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Task</th>
                    <th>Done</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Table cell</td>
                    <td><Checkbox/></td>
                    <td><Button bsStyle="danger">Del</Button></td>
                </tr>
                </tbody>
            </Table>
        );
    }

}

export default TaskList;