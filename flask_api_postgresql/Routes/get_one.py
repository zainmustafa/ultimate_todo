from flask import Blueprint,jsonify
from databaseModel import Todo
getone_api = Blueprint('getone_api', __name__)
@getone_api.route('/todo/api/v1.0/tasks/<id>', methods=['GET'])

def get_one_by_one( id):
    todo = Todo.query.filter_by(id=id).first()

    if not todo:
        return jsonify({'message' : 'No todo found!'})

    todo_data = {}
    todo_data['id'] = todo.id
    todo_data['title'] = todo.title
    todo_data['description'] = todo.description
    todo_data['complete'] = todo.complete
    return jsonify(todo_data)