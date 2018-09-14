import {Request, Response} from "express";
import { TodoController } from "../controller/controller"

export class Routes {    

    public TodoController: TodoController = new TodoController() 

    
    public routes(app): void {   
        
        
        //Get All todo
        app.route('/todo/api/v1.0/tasks') 
        .get(this.TodoController.getTodo)
 
        //Get Todo By Id
        app.route('/todo/api/v1.0/tasks/:Todoid') 
        .get(this.TodoController.getTodoId)

        
        // Add  new todo
        app.route('/todo/api/v1.0/tasks')
        .post(this.TodoController .addNewTodo);

        // Update List 
        app.route('/todo/api/v1.0/tasks/:Todoid').put(this.TodoController.updateTodo)

        
        // Delete a list     
        app.route('/todo/api/v1.0/tasks/:Todoid').delete(this.TodoController.deleteTodo)

    }
}