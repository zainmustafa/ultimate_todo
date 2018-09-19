from flask import Flask, jsonify , json,Blueprint, render_template, session, request
from flask_pymongo import PyMongo,pymongo
from bson.objectid import ObjectId

update_api=Blueprint("update_api",__name__)
app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'axiom'
app.config['MONGO_URI'] = 'mongodb://todoapp:todo123@ds119422.mlab.com:19422/axiom'
mongo = PyMongo(app)

@update_api.route("/todoapp/api/v1.0/task/update/<int:id>",methods = ['PUT'])
def update(id):
    Data = mongo.db.todoapp

    data_id = Data.find_one({"id":id}) 
    if not data_id:
        return jsonify({'Message':'ID are not found'})
    else:
        data_id['done']=True
        Data.save(data_id)
        return jsonify({'Message':'updated'}) 
