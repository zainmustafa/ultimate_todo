import React, {Component} from "react";
import swal from 'sweetalert2';

class TaskList extends Component{

    constructor(porps){
        super(porps);
    }

    render(){
        const {todoList} = this.props;

        return(
            <div className="table-responsive">
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Task</th>
                    <th scope="col">Description</th>
                    <th scope="col">Done</th>
                    <th scope="col" colSpan={2} className="text-center">Options</th>
                </tr>
                </thead>
                
                <tbody className="todolistmain" >
                {todoList.map((todo, index) => {
                    return <tr key={todo.id}>
                        <td scope="row">{index+1}</td>
                        <td>{todo.title}</td>
                        <td> {todo.description} </td>
                        <td>
                            <input  type="checkbox" checked={todo.done?true:false}  className="checkedBox"/>
                        </td>
                        <td><button className="btn btn-sm btn-info" >Edit</button></td>
                        <td><button className="btn btn-sm btn-danger" > Delete</button></td>
                    </tr>
                })}
                </tbody>
            </table>
            </div>
        );
    }
}

export default TaskList;