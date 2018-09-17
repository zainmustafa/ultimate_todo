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
              <FormGroup controlId="formInlineName">
                  <FormControl
                      type="text"
                      name="description"
                      value={description}
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