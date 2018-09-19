from flask import Blueprint,jsonify
delete_api = Blueprint('delete_api', __name__)
from databaseModel import Todo
from databaseModel import db

@delete_api.route('/todo/api/v1.0/tasks/<id>', methods=['DELETE'])
def delete_todo(id):
    todo = Todo.query.filter_by(id=id).first()

    if not todo:
        return jsonify({'message' : 'Not found!'})

    db.session.delete(todo)
    db.session.commit()

    return jsonify({'message' : 'title deleted'})