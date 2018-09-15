import * as mongoose from 'mongoose';
import { TaskSchema } from '../models/task';
import { Request, Response } from 'express';

const Task = mongoose.model('Task', TaskSchema);

export class TodoController {

    public addNewTask(req: Request, res: Response) {
        let newTask = new Task(req.body);
        newTask.save((err, doc) => {
            if (err){
                res.send(err);
            }
            res.send(doc)
        });
    }
    public getTasks (req: Request, res: Response) {
        Task.find({}, (err, docs) => {
            if(err){
                res.send(err);
            }
            res.json(docs);
        });

    }

    public getTask (req: Request, res: Response) {
        Task.findById(req.params.taskId, (err, doc) => {
            if(err){
                res.send(err);
            }
            res.json(doc);
        });
    }

    public updateTask (req: Request, res: Response) {
        Task.findOneAndUpdate({ _id: req.params.taskId },
            req.body , { new: true }, (err, doc) => {
                if(err){
                    res.send(err);
                }
                res.json(doc);
            });
    }
    public deleteTask (req: Request, res: Response) {
        Task.deleteOne({ _id: req.params.taskId }, (err, doc) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted Task!'});
        });
    }

}
