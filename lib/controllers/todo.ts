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
            client.query("INSERT INTO task(task, description, done) values($1, $2, $3)", [newTask.title, newTask.description, newTask.done])
                .then(rs => {
                    console.log(rs)
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
}