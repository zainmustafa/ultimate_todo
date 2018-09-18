import React, {Component} from "react";
import { Button, Checkbox, Table} from 'react-bootstrap';
import db from "../../Config/config";
import swal from 'sweetalert2';





class TaskList extends Component{

    constructor(porps){
        super(porps);
        this.delTask = this.delTask.bind(this);
        this.updateTask=this.updateTask.bind(this)
    }

    delTask(id){
        console.log(id)
        db.collection("task").doc(id).delete().then(function() {
            swal("Firebase Realtime Todo!", "Todo Deleted!", "error");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }



    updateTask(id){
       
        swal({
            title: 'Firebase Realtime Todo',
            html:
            '<h2>Update Your Todo</h2>'+
            '<input id="swal-input1" class="swal2-input" autofocus placeholder="Title">' +
            '<input id="swal-input2" class="swal2-input" placeholder="Description">',
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
             }).then(function(result) {

            db.collection("task").doc(id).set({
                title: result.value[0],
                description: result.value[1],
                done: false,
                createdAt: new Date
            })
            .then(function(docRef) {

                swal(
                    'Firebase Realtime Todo!',
                    'Your Todo Has Been Updated!',
                    'success'
                  )

                console.log("Document written with ID: ", docRef.id);

        })

            .catch(function(error) {console.error("Error adding document: ", error);});


               









            })
            }
            




    render(){
        const {todoList} = this.props;
        return(
            <div className="table-responsive">
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Task</th>
                    <th scope="col">Description</th>
                    <th scope="col">Done</th>
                    <th scope="col">Delete</th>
                    <th scope='col'>Update</th>
                </tr>
                </thead>
                
                <tbody className="todolistmain" >
                {todoList.map((todo, index) => {
                    return <tr key={todo.id}>
                        <td scope="row">{index+1}</td>
                        <td>{todo.task.title}</td>
                        <td> {todo.task.description} </td>
                        <td><input  type="checkbox" className="checkedBox"></input></td>
                        <td><Button bsStyle="danger" onClick={()=>{this.delTask(`${todo.id}`)}}> Delete</Button></td>
                        <td><Button bsStyle="info" onClick={()=>{this.updateTask(`${todo.id}`)}}>Update</Button></td>

                    </tr>
                })}

                </tbody>
            </table>
            </div>
        );
    }

}

export default TaskList;