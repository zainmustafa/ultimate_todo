import * as mongoose from 'mongoose';
import { TodoSchema } from '../model/model';
import { Request, Response } from 'express';

const Todo = mongoose.model('Todo', TodoSchema);
export class TodoController{

    // Add New Todo 
public addNewTodo (req: Request, res: Response) {                
        let newTodo = new Todo(req.body);
    
        newTodo.save((err, Todo) => {
            if(err){
                res.send(err);
            }    
            res.json(Todo);
        });
    }


    //Show All Todo

public getTodo (req: Request, res: Response) {           
    Todo.find({}, (err, Todo) => {
            if(err){
                res.send(err);
            }
            res.json(Todo);
        });
    }


    //Show Todo By Id
    public getTodoId (req: Request, res: Response) {           
        Todo.find({_id: req.params.Todoid}, (err, Todo) => {
                if(err){
                    res.send(err);
                }
                res.json(Todo);
            });
        }
    



}


