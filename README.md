# Flask Api with Postgress Sql 
This project focus on building REST-Api with flask-Python 
use sqlite database with PostgressSQL and flask library SQLAchamy

1:app.py file run all routes imported from file and register their Blueprint

2:databaseModel.py file consist a sql databse table model 

3:Routes directory have 6 routes with different functions of which perform CRUD opertaions 


#Flask Api with postgress sql
 giving some information about which route is handling which function.

 1.route(/todo/api/v1.0/tasks, methods=['GET']) is getting all the data from the postgres database.

 2.route(/todo/api/v1.0/tasks/<id>, methods=['GET']) is to get particular data of that particular id from the postgres database .

 3.route(/todo/api/v1.0/tasks, methods=['POST']) is to enter the data i.e(title,description and complete).

 4.route(/todo/api/v1.0/tasks/<id>, methods=['PUT']) is to update the details of the given id.

 5.route(/todo/api/v1.0/tasks/<id>, methods=['PUT']) is to update whether the task is completed or not of that particular id.
 
 6.route(/todo/api/v1.0/tasks/<id>, methods=['DELETE']) is to delete the details of that particular task.

4: Every Route consist of 
    • Flask
    • Jsonfy 
    • Todo table of Database model class 
    • Blueprint of that file
    
 
Example Code of Example of route file get_all.py file  
```
from flask import Blueprint,jsonify
from databaseModel import Todo

getall_api = Blueprint('getall_api', __name__)

@getall_api.route('/todo/api/v1.0/tasks', methods=['GET'])
def get_all():
    title = Todo.query.all()

    output = []

    for todo in title:
        todo_data = {}
        todo_data['id'] = todo.id
        todo_data['title'] = todo.title
        todo_data['description'] = todo.description
        todo_data['complete'] = todo.complete
        output.append(todo_data)

    return jsonify({'title' : output})
