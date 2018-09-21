from flask import Blueprint,jsonify
from databaseModel import Todo
from databaseModel import db

update_one_api = Blueprint('update_one_api', __name__)
@update_one_api.route('/todo/api/v1.0/tasks/<id>', methods=['PUT'])
def complete_todo(id):
    todo = Todo.query.filter_by(id=id).first()

    if not todo:
        return jsonify({'message' : 'No todo found!'})

    todo.complete = True
    db.session.commit()

    return jsonify({'message' : 'title completed!'})