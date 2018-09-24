import React, { Component } from "react";

class TaskList extends Component {
    state = {
        isUpdate: false
    };

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
          {this.props.todos.map((todo, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{todo.title}</td>
                  <td>{todo.description}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.setState({isupdating: true});
                        this.props.handleUpdateText(todo);
                        this.props.storeIndex(index)
                      }}
                      className="btn btn-success btn-sm m-2"
                    >
                      Update Task
                    </button>
                    {this.state.isupdating && <div className="modal" style={{display:'block',color:'#000'}}>
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              Edit Tasks
                            </h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                              onClick={() => {
                                this.setState({isupdating: false});
                              }}
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <input 
                                type="text" 
                                className="form-control m-2" 
                                placeholder="Enter Title of Task"
                                id="titleText"
                                value={this.props.updateTitleText}
                                onChange={(event) => this.props.handleTitle("updateTitleText", event)}
                            />
                            <input 
                                type="text" 
                                className="form-control m-2" 
                                placeholder="Enter Description of Task"
                                id="descriptionText"
                                value={this.props.updateDescriptionText}
                                onChange={(event) => this.props.handleDescription("updateDescriptionText", event)}
                            />
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-dismiss="modal"
                              onClick={() => {
                                this.setState({isupdating: false})
                              }}
                            >
                              Close
                            </button>
                            <button 
                                    onClick={() => {
                                        this.props.updateTask();
                                        this.setState({isupdating: false})
                                    }} 
                                    type="button" 
                                    className="btn btn-primary">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>}
                  </td>
                  <td>
                    <button
                      onClick={() => this.props.onDelete(index)}
                      className="btn btn-danger btn-sm m-2"
                    >
                      Delete Task
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    );
  }
}

export default TaskList;
