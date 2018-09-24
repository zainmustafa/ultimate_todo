import React, { Component } from 'react';

class TaskList extends Component {
    
    render() { 
        return (  
            <div>
                <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                    {
                        this.props.todos.map((todo, index) => {
                            return <tbody key={index}>
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{todo.title}</td>
                                            <td>{todo.description}</td>
                                            <td>
                                                <button 
                                                    onClick={this.props.onAdd} 
                                                    className="btn btn-success btn-sm m-2">
                                                    Update Task
                                                </button>
                                            </td>
                                            <td>
                                                <button 
                                                    onClick={this.props.onAdd} 
                                                    className="btn btn-danger btn-sm m-2">
                                                    Delete Task
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                        })
                    }
                </table>
            </div>
        );
    }
}
 
export default TaskList;