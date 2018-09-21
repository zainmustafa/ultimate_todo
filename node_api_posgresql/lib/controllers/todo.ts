import { Request, Response } from 'express';
import { Client } from "pg";

const connString = "postgres://xkhfwplo:INLKXjdTiHygaBzXi20AKd43VC-_EZe9@horton.elephantsql.com:5432/xkhfwplo";

export class TodoController {

    public addNewTask(req: Request, res: Response) {
        const { title, description } = req.body;
        const newTask = {
            title,
            description,
            done: false,
            createdAt:Date.now()
        };
        let client = new Client(connString);
        client.connect().then(()=>{
            client.query(`INSERT INTO task(task, description, done) values('${newTask.title}', '${newTask.description}', ${newTask.done})`)
                .then(rs => {
                    client.query("SELECT * FROM task ORDER BY _id asc")
                        .then(rs => {
                            client.end().then(() => res.status(200).json(rs.rows))
                        }).catch(err => res.json({ success: false, data: err }));
                })
        }).catch(err =>  {res.status(500).json({ success: false, data: err })});
    }

    public getTasks(req: Request, res: Response) {
        let client = new Client(connString);
        client.connect().then(() => {
            client.query("SELECT * FROM task ORDER BY _id asc")
                    .then(rs => {
                        client.end().then(() => res.status(200).json(rs.rows))
                    }).catch(err => res.json({ success: false, data: err }));
            }).catch(err =>  res.status(500).json({ success: false, data: err }));
    }

    public getTask(req: Request, res: Response) {
        const id = req.params.taskId;
        let client = new Client(connString);
        client.connect().then(() => {
            client.query(`select * from task where _id=(${id})`)
                .then(rs => {
                    client.end().then(() => res.status(200).json(rs.rows))
                }).catch(err => res.json({ success: false, data: err }));
        }).catch(err =>  res.status(500).json({ success: false, data: err }));
    }

    public updateTask(req: Request, res: Response) {
        const id = req.params.taskId;
        const { title, description,done } = req.body;
        const updateTask = {title, description, done, createdAt:Date.now};
        let client = new Client(connString);
        let q;
        if (updateTask.title && updateTask.description)
        {
            q = `update task set task=('${updateTask.title}'), description=('${updateTask.description}') where _id=(${id})`;
        }else if(updateTask.done){
            q = `update task set done=(${updateTask.done}) where _id=(${id})`;
        }
        client.connect().then(()=>{
            client.query(q)
                .then(rs => {
                    client.query(`select * from task where _id=(${id})`)
                        .then(rs => {
                            client.end().then(() => res.status(200).json(rs.rows))
                        }).catch(err => res.json({ success: false, data: err }));
                })
        }).catch(err =>  {res.status(500).json({ success: false, data: err })});
    }

    public deleteTask(req: Request, res: Response) {
        const id = req.params.taskId;
        let client = new Client(connString);
        client.connect().then(() => {
            client.query(`delete from task where _id=(${id})`)
                .then(deleteTodo => {
                    client.end().then(() => res.status(200).json({message: 'Successfully deleted Task!'}))
                }).catch(err => res.status(500).json({ success: false, data: err }));})
    }

}
