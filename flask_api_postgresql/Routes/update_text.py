from flask import Blueprint,jsonify,request
update_one_api = Blueprint('update_one_api', __name__)
from databaseModel import Todo
from databaseModel import db

update_text_api = Blueprint('update_text_api', __name__)

@update_text_api.route('/todo/api/v1.0/text/<id>', methods=['PUT'])
def update_todo(id):
    mytodo = Todo.query.filter_by(id=id).first()
    if not mytodo:
        return jsonify({'result': 'Id are not found'})
    data = request.get_json()
    mytodo.title = data['title']
    mytodo.description = data['description']

    myTodoData = {}
    myTodoData['id'] = mytodo.id
    myTodoData['title'] = mytodo.title
    myTodoData['description'] = mytodo.description

    db.session.commit()
    return jsonify(myTodoData)