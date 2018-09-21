import { TodoController } from "../controller/controller"

export class Routes {    

    public TodoController: TodoController = new TodoController() 

    
    public routes(app): void {   
        
        
        //Get All todo
        app.route('/todo/api/v1.0/tasks') 
        .get(this.TodoController.getTodo)
 
        //Get Todo By Id in todo
        app.route('/todo/api/v1.0/tasks/:Todoid') 
        .get(this.TodoController.getTodoId)

        
        // Add  new todo in todo
        app.route('/todo/api/v1.0/tasks')
        .post(this.TodoController .addNewTodo);

        // Update List in todo
        app.route('/todo/api/v1.0/tasks/:Todoid').put(this.TodoController.updateTodo)

        
        // Delete a list In todo 
        app.route('/todo/api/v1.0/tasks/:Todoid').delete(this.TodoController.deleteTodo)

    }
}