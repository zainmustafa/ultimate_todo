from flask import Flask, jsonify , json, render_template, session, request,Blueprint
from flask_pymongo import PyMongo,pymongo
from bson.objectid import ObjectId
# from app import mongo
create_data_api=Blueprint("create_data_api",__name__)

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'axiom'
app.config['MONGO_URI'] = 'mongodb://todoapp:todo123@ds119422.mlab.com:19422/axiom'
mongo = PyMongo(app)



@create_data_api.route('/todoapp/api/v1.0/task/add' , methods=['POST'])
def create_todo():
    Data = mongo.db.todoapp
    get_last = Data.find().sort([('id', -1)]).limit(1)
    
    for title in get_last:
        id = title['id']
    if not get_last.count():
        id = 1
    else:
        id = id + 1      
    
    title = request.json['title']
    description = request.json['description']
    
    data_id = Data.insert({'id':id,'title':title,'description':description,'done':False})
    new_Data=Data.find_one({'_id':data_id})

    output = {'id':new_Data['id'],'title':new_Data['title'],'description':new_Data['description'], 'done':new_Data['done']}

    return jsonify({'results':output})
    
