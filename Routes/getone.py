from flask import Flask, jsonify , json, render_template, session, request,Blueprint
from flask_pymongo import PyMongo,pymongo
from bson.objectid import ObjectId

getone_data = Blueprint("getone_data",__name__)

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'axiom'
app.config['MONGO_URI'] = 'mongodb://todoapp:todo123@ds119422.mlab.com:19422/axiom'
mongo = PyMongo(app)

@getone_data.route('/todoapp/api/v1.0/task/one/<int:id>' , methods=['GET'])
def get_single_todo_data(id):
    Data = mongo.db.todoapp
    one_data = Data.find({'id':id})
    if not one_data.count():
        return jsonify({'Message':'No Record'})
    else:
        One_Users = []
        for title in one_data:
            One_Users.append(
            {'id':title['id'],'title': title['title'], 'description': title['description'], 'done': title['done']})

        return jsonify({"todo": One_Users})
