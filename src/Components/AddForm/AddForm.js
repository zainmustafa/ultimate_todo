import React, {Component} from "react";
import { Button, Form, FormGroup, FormControl} from 'react-bootstrap';

class AddForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            task:''
        };
        this.setTxt = this.setTxt.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    setTxt(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    addTask(){
        this.props.Add(this.state.task);
        this.setState({
            task:''
        })
    }
    render(){
        const {task} = this.state;
        return(
          <Form inline>
              <FormGroup controlId="formInlineName">
                  <FormControl
                      type="text"
                      name="task"
                      value={task}
                      onChange={this.setTxt}
                      Placeholder="Add Task"
                  />
              </FormGroup>{' '}
              <Button bsStyle="primary" onClick={this.addTask}>Add</Button>
          </Form>
        );
    }
}

export  default AddForm;