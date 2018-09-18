from flask import Flask, jsonify , json, render_template, session, request,Blueprint
from flask_pymongo import PyMongo,pymongo
from bson.objectid import ObjectId
getdata_api=Blueprint('getdata_api',__name__)


app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'axiom'
app.config['MONGO_URI'] = 'mongodb://todoapp:todo123@ds119422.mlab.com:19422/axiom'
mongo = PyMongo(app)

@getdata_api.route('/todoapp/api/v1.0/task/alldata' , methods=['GET'])
def get_todo_data():
    dbAllData = mongo.db.todoapp.find()
    if not dbAllData.count():
        return jsonify({'Message':'No Record'})
    else:
        allUsers = []
        for title in dbAllData:
            allUsers.append(
            {'id':title['id'],'title': title['title'], 'description': title['description'], 'done': title['done']})

        return jsonify({"todo": allUsers})

