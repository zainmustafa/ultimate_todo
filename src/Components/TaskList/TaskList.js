import React, {Component} from "react";
import swal from 'sweetalert2';

class TaskList extends Component{

    constructor(porps){
        super(porps);
        this.delTask = this.delTask.bind(this);
    }

    delTask(id){
        fetch(`https://nosql-node-api.herokuapp.com/todo/api/v1.0/tasks/${id}`,{method: "DELETE"})
            .then(res => res.json())
            .then(response => {
                swal("Firebase Realtime Todo!", "Todo Deleted!", "error");
                console.log('res', console.log(response))
            }).catch(error => console.error('Error:', error));
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
                            <input  type="checkbox" checked={todo.done?true:false} onChange={(e)=>{this.updateDone(e,`${todo._id}`)}} className="checkedBox"/>
                        </td>
                        <td><button className="btn btn-sm btn-info" onClick={()=>{this.updateTask(`${todo._id}`,`${index}`)}}>Edit</button></td>
                        <td><button className="btn btn-sm btn-danger" onClick={()=>{this.delTask(`${todo._id}`)}}> Delete</button></td>
                    </tr>
                })}
                </tbody>
            </table>
            </div>
        );
    }
}

export default TaskList;