import React, {Component} from "react";

class TaskList extends Component{

    constructor(porps){
        super(porps);
    }

    render(){
        const {todoList} = this.props;
        console.log(todoList)
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
                {todoList.employee.map((todo, index) => {
                    return <tr key={todo.Todoid}>
                        <td scope="row">{index+1}</td>
                        <td>{todo.title}</td>
                        <td> {todo.description} </td>
                        <td>
                        </td>
                        <td><button className="btn btn-sm btn-info" onClick={()=>{this.props.updateTask(`${todo.Todoid}`,`${index}`)}}>Edit</button></td>
                        <td><button className="btn btn-sm btn-danger" onClick={()=>{this.props.delTask(`${todo.Todoid}`,`${index}`)}}> Delete</button></td>
                    </tr>
                })}
                </tbody>
            </table>
            </div>
        );
    }
}

export default TaskList;