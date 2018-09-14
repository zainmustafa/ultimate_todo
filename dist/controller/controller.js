"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const model_1 = require("../model/model");
const Todo = mongoose.model('Todo', model_1.TodoSchema);
class TodoController {
    // Add New Todo 
    addNewTodo(req, res) {
        let newTodo = new Todo(req.body);
        newTodo.save((err, Todo) => {
            if (err) {
                res.send(err);
            }
            res.json(Todo);
        });
    }
    //Show All Todo
    getTodo(req, res) {
        Todo.find({}, (err, Todo) => {
            if (err) {
                res.send(err);
            }
            res.json(Todo);
        });
    }
    //Show Todo By Id
    getTodoId(req, res) {
        Todo.find({ _id: req.params.Todoid }, (err, Todo) => {
            if (err) {
                res.send(err);
            }
            res.json(Todo);
        });
    }
    //Update a Todo
    updateTodo(req, res) {
        Todo.findOneAndUpdate({ _id: req.params.Todoid }, req.body, { new: true }, (err, Todo) => {
            if (err) {
                res.send(err);
            }
            res.json(Todo);
        });
    }
    //Delete A Todo
    deleteTodo(req, res) {
        Todo.remove({ _id: req.params.Todoid }, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted Todo!' });
        });
    }
}
exports.TodoController = TodoController;
//# sourceMappingURL=controller.js.map