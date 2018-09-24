import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoTextInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool,
  }

  static defaultProps = {
    text: '',
    placeholder: '',
    editing: false,
    newTodo: false,
  }

  state = {
    text: '',
    description: '',
  }

  componentWillReceiveProps(props) {
    this.setState({ text: props.text });
  }

  handleSubmit = (e) => {
      const {text,description} =this.state;
      this.props.onSave(text,description);
      if (this.props.newTodo) {
        this.setState({ text: '',description: '' });
      }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleBlur = (e) => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value);
    }
  }



  render() {
    return (
        <div className="row">
            <div className="col-md-8 mx-auto">
                <div className="card card-body">
                    <h3 className="text-center">Add Your Todo</h3>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            placeholder={this.props.placeholder}
                            autoFocus="true"
                            name="text"
                            value={this.state.text}
                            onBlur={this.handleBlur}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Description"
                            autoFocus="true"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                    </div>
                    <hr style={{marginTop:0}}/>
                    <button className="btn btn-primary" onClick={this.handleSubmit}>Add</button>
                </div>
            </div>
        </div>
    );
  }
}
