# Flask Api with Postgress Sql 
This project focus on building REST-Api with flask-Python 
use sqlite database with PostgressSQL and flask library SQLAchamy

1:app.py file run all routes imported from file and register their Blueprint

2:databaseModel.py file consist a sql databse table model 

3:Routes directory have 6 routes with different functions of which perform CRUD opertaions 

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

```    