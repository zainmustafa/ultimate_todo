import {Request, Response} from "express";
import {TodoController} from "../controllers/todo";

export class Routes {

    public todoController: TodoController = new TodoController();
    public routes(app): void {

        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'Api Running successfulll!!!!'
                })
            });

        app.route('/todo/api/v1.0/tasks')
            .get(this.todoController.getTasks)
            .post(this.todoController.addNewTask);

        app.route('/todo/api/v1.0/tasks/:taskId')
            .get(this.todoController.getTask)
            .put(this.todoController.updateTask)
            .delete(this.todoController.deleteTask)
    }
}