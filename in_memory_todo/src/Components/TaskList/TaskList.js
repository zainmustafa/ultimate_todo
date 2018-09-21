import React, { Component } from "react";
import swal from 'sweetalert2';

class TaskList extends Component {  

    constructor(props) {
        super(props);
        this.table = this.table.bind(this)
    }

    /* Main Render Function */
    render() {
        return (
            <this.table />
        );
    }
    /* Main render Function End */


    /* Table Functions */
    table() {
        const { todoList } = this.props;

        return (

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
                            return <tr key={index}>
                                <td scope="row">{index + 1}</td>
                                <td>{todo.title}</td>
                                <td> {todo.description} </td>
                                <td>
                                    <input type="checkbox" name="check" className="checkedBox" />
                                </td>
                                <td><button className="btn btn-sm btn-info" onClick={() => { this.props.updateTask(`${index}`)}}>Edit</button></td>
                                <td><button className="btn btn-sm btn-danger" onClick={() => { this.props.delTask(`${index}`)}}> Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>



        )
    }


    /* Table Functions End */






}

export default TaskList;