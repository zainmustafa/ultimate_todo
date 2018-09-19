import React, { Component } from "react";
import db from "../../Config/config";
import swal from 'sweetalert2';

class TaskList extends Component {

    constructor(porps) {
        super(porps);
        this.delTask = this.delTask.bind(this);
        this.updateDone = this.updateDone.bind(this);
        this.updateTask = this.updateTask.bind(this)
        this.table = this.table.bind(this)
    }

    /* Delete Function */
    delTask(id) {
        db.collection("task").doc(id).delete().then(function () {
            swal("Firebase Realtime Todo!", "Todo Deleted!", "error");
        }).catch(function (error) {
            console.error("Error removing document: ", error);
        });
    }
    /* Delete Function */

    /* Update Function */
    updateTask(id, index) {
        const { todoList } = this.props;
        console.log(todoList[index])
        swal({
            title: 'Firebase Realtime Todo',
            html:
                '<h2>Update Your Todo</h2>' +
                '<input id="swal-input1" class="swal2-input" value="' + todoList[index].task.title + '" autofocus placeholder="Title" required>' +
                '<input id="swal-input2" class="swal2-input" value="' + todoList[index].task.description + '" placeholder="Description" required>',
            preConfirm: function () {
                return new Promise(function (resolve) {
                    if (true) {
                        resolve([
                            document.getElementById('swal-input1').value,
                            document.getElementById('swal-input2').value
                        ]);
                    }
                });
            }
        }).then(function (result) {
            db.collection("task").doc(id).set({
                title: result.value[0],
                description: result.value[1],
                done: false,
                createdAt: new Date
            }).then(function (docRef) {
                swal(
                    'Firebase Realtime Todo!',
                    'Your Todo Has Been Updated!',
                    'success'
                );
            }).catch(function (error) { console.error("Error adding document: ", error); });
        })
    }

    /* Update Function End */

    /* Done Function */
    updateDone(e, id) {
        db.collection("task").doc(id).update({
            done: e.target.checked,
        }).then(function (docRef) {
            swal(
                'Firebase Realtime Todo!',
                'Your Task Has Been Updated!',
            );
        }).catch(function (error) { console.error("Error adding document: ", error); });
    }
    /* Done Function */


    /* Main Render Function */
    render() {
        return (
            <this.table />
        );
    }
    /* Main render Function End */



    /* Table Functions */
    table() {
        const { todoList } = this.props;

        return (

            <div className="table-responsive">
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
                        {todoList.map((todo, index) => {
                            return <tr key={todo.id}>
                                <td scope="row">{index + 1}</td>
                                <td>{todo.task.title}</td>
                                <td> {todo.task.description} </td>
                                <td>
                                    <input type="checkbox" name="check" checked={todo.task.done ? true : false} onChange={(e) => { this.updateDone(e, `${todo.id}`) }} className="checkedBox" />
                                </td>
                                <td><button className="btn btn-sm btn-info" onClick={() => { this.updateTask(`${todo.id}`, `${index}`) }}>Edit</button></td>
                                <td><button className="btn btn-sm btn-danger" onClick={() => { this.delTask(`${todo.id}`) }}> Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>



        )
    }


    /* Table Functions End */






}

export default TaskList;