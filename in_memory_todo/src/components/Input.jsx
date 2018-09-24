import React, { Component } from 'react';

class Input extends Component {
    state = { 

     };
    render() { 
        return (  
            <div>
                <div className="form-group row">
                    <div className="col-lg-4">
                        <button 
                            className="btn btn-dark btn-sm m-2"
                            onClick={() => {
                                this.props.handleReset();
                                document.getElementById('titleText').value = '';
                                document.getElementById('descriptionText').value = '';
                            }}>
                            Reset
                        </button>
                        <input 
                            type="text" 
                            className="form-control m-2" 
                            placeholder="Enter Title of Task"
                            onChange={(event) => this.props.handleTitle("title", event)}
                            id="titleText"
                        />
                        <input 
                            type="text" 
                            className="form-control m-2" 
                            placeholder="Enter Description of Task"
                            onChange={(event) => this.props.handleDescription("description", event)}
                            id="descriptionText"
                        />
                        <button 
                            onClick={() => {
                                this.props.onAdd();
                                document.getElementById('titleText').value = '';
                                document.getElementById('descriptionText').value = '';
                            }} 
                            className="btn btn-primary btn-sm m-2">
                            Add Task
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Input;