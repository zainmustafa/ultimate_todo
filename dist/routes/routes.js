"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("../controller/controller");
class Routes {
    constructor() {
        this.TodoController = new controller_1.TodoController();
    }
    routes(app) {
        //Get All todo
        app.route('/todo/api/v1.0/tasks')
            .get(this.TodoController.getTodo);
        //Get Todo By Id
        app.route('/todo/api/v1.0/tasks/:Todoid')
            .get(this.TodoController.getTodoId);
        // Add  new todo
        app.route('/todo/api/v1.0/tasks')
            .post(this.TodoController.addNewTodo);
        // Update List 
        app.route('/todo/api/v1.0/tasks/:Todoid').put(this.TodoController.updateTodo);
        // Delete a list     
        app.route('/todo/api/v1.0/tasks/:Todoid').delete(this.TodoController.deleteTodo);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map