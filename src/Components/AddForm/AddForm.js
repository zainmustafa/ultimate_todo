import React, {Component} from "react";
import { Button, Form, FormGroup, FormControl} from 'react-bootstrap';

class AddForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            task:''
        };
        this.setTxt = this.setTxt.bind(this);
    }

    setTxt(e){
        this.setState({
            [e.target.name]:e.target.value
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
                      onChange={this.setTxt}
                      Placeholder="Add Task"
                  />
              </FormGroup>{' '}
              <Button bsStyle="primary" onClick={()=>{this.props.Add(task)}}>Add</Button>
          </Form>
        );
    }
}

export  default AddForm;