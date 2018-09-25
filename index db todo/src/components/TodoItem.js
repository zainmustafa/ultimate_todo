import React, { Component} from 'react';

class TodoItem extends Component {
  constructor( props){
    super();
  }
  completeCheck = (event) => {
    event.preventDefault();
    this.props.completeCheck( this.props.item);
  };
  render(){
    return (
      <li><input type="checkbox" onChange={this.completeCheck}/>{this.props.item.text}</li>
    );
  }
}

export default TodoItem;
