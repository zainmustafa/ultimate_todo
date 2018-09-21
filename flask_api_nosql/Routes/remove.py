from flask import Flask, jsonify , json,Blueprint, render_template, session, request
from flask_pymongo import PyMongo,pymongo
from bson.objectid import ObjectId

remove_api=Blueprint("remove_api",__name__)

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'axiom'
app.config['MONGO_URI'] = 'mongodb://todoapp:todo123@ds119422.mlab.com:19422/axiom'
mongo = PyMongo(app)

@remove_api.route("/todoapp/api/v1.0/task/delete/<int:id>",methods = ['DELETE'])
def remove(id):
    Data = mongo.db.todoapp

    get_id = Data.find_one({"id":id})
    if not get_id:
        return jsonify({'Message':'ID are not found'})
    else:
        Data.remove(get_id, True)
        return jsonify({'Message':'Deleted'})
