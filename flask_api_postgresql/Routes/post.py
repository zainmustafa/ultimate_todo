from flask import Blueprint,jsonify,request
from databaseModel import Todo
from databaseModel import db

post_api = Blueprint('post_api', __name__)

@post_api.route('/todo/api/v1.0/tasks', methods=['POST'])
def create_title():
    data = request.get_json(force=True)

    new_title = Todo(title=data["title"], description=data["description"], complete=False)

    db.session.add(new_title)
    db.session.commit()

    return jsonify({'message': "Todo created!"})