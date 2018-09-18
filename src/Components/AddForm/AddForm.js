import React, {Component} from "react";
import { Button, Form, FormGroup, FormControl} from 'react-bootstrap';

class AddForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            task:'',
            description:''
        };
        this.setTxt = this.setTxt.bind(this);
        this.addTask = this.addTask.bind(this);
        this.textAndDescription=this.textAndDescription.bind(this)
    }

    setTxt(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    addTask(){
        const {task, description} = this.state;
        this.props.Add(task, description);
        this.setState({
            task:'',
            description:''
        })
    }
    render(){
        const {task, description} = this.state;
        return(
          <div>
              <this.textAndDescription/>
          </div>

        );
    }



    textAndDescription(){
        const {task, description} = this.state;

        return(
        <div className="row">
                    <div className="col-md-8 mx-auto">
                        <div className="card card-body">
                            <h3 className="text-center">Add Your Todo</h3>
                            <div className="form-group">
                                <label for="task">Todo</label>
                                <input type="text" name="task" placeholder="Add Your Todo" className="form-control"  value={task} required onChange={this.setTxt}></input>
                            </div>
                            <div className="form-group">
                                <label for="description">Description</label>
                                <input type="text" placeholder="Description" name="description" className="form-control"  value={description} onChange={this.setTxt}></input>
                            </div>
                            <hr></hr>
                            <button className="btn btn-primary" onClick={this.addTask}>Add</button>

                        </div>
                    </div>
                </div>



        )

    }









}

export  default AddForm;