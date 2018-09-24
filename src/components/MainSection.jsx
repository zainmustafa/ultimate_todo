import React, { Component } from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert2';

export default class MainSection extends Component {
  static propTypes = {
    todos: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
  }
    delTask(id){
        this.props.deleteTodo(id);
        swal("Firebase Realtime Todo!", "Todo Deleted!", "error");
    }
    updateTask(id,title,description){
        swal({
            title: 'Firebase Realtime Todo',
            html:
            '<h2>Update Your Todo</h2>'+
            '<input id="swal-input1" class="swal2-input" value="'+title+'" autofocus placeholder="Title" >' +
            '<input id="swal-input2" class="swal2-input" value="'+description+'" placeholder="Description" >',
            preConfirm: function() {
                return new Promise(function(resolve) {
                    if (true) {
                        resolve([
                            document.getElementById('swal-input1').value,
                            document.getElementById('swal-input2').value
                        ]);
                    }
                });
            }
        }).then((result) => {
            this.props.editTodo(id, result.value[0],result.value[1]);
            swal(
                'Firebase Realtime Todo!',
                'Your Todo Has Been Updated!',
                'success'
            )
        })
    }
  render() {
    const { todos } = this.props;
    return todos.pending && !todos.data.length ? null : (
      <section className="main">
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
              {todos.data.map((todo,index )=> (
                  <tr key={todo._id }>
                  <td scope="row">{index+1}</td>
                  <td>{todo.title}</td>
                  <td> {todo.description} </td>
                  <td>
                  <input  type="checkbox" checked={todo.done} onChange={() => this.props.completeTodo(todo._id, todo.done)} className="checkedBox"/>
                  </td>
                  <td><button className="btn btn-sm btn-info" onClick={()=>{this.updateTask(`${todo._id}`,`${todo.title}`,`${todo.description}`)}}>Edit</button></td>
                  <td><button className="btn btn-sm btn-danger" onClick={()=>{this.delTask(`${todo._id}`)}}> Delete</button></td>
                  </tr>
              ))}
              </tbody>
          </table>
      </section>
    );
  }
}
