from flask import Flask, jsonify , json,Blueprint, render_template, session, request
from flask_pymongo import PyMongo,pymongo
from bson.objectid import ObjectId

change_api = Blueprint("change_api",__name__)
app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'axiom'
app.config['MONGO_URI'] = 'mongodb://todoapp:todo123@ds119422.mlab.com:19422/axiom'
mongo = PyMongo(app)

@change_api.route("/todoapp/api/v1.0/task/change/<int:id>",methods = ['PUT'])
def change_todo(id):
    Data = mongo.db.todoapp

    data_id = Data.find_one({"id":id}) 
    if not data_id:
        return jsonify({'Message':'ID are not found'})
    else:
        data_id['title']=request.json['title']
        data_id['description']=request.json['description']
        Data.save(data_id)
        return jsonify({'Message':'updated'}) 