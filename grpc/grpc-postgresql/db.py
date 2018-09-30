from flask import Flask, render_template, url_for, request, send_from_directory, session, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask import flash

app = Flask(__name__, static_folder="./dist", template_folder="./")
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://lnjwjwwg:LVt6Fs1rhZRrm4FSxaM0TQ4x33DKeJ0e@elmer.db.elephantsql.com:5432/lnjwjwwg'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = b'dE\xad2g\x0c\x8d\xb9\x1cq\x86\x04:\xa8>\xc7\xc5\xc2Dr\xe7f\xf9\xeb'

db = SQLAlchemy(app)



class grpc_sql(db.Model):
   id=db.Column(db.Integer,primary_key=True) 
   task=db.Column(db.String())
   description=db.Column(db.String())
   def __init__(self,task,description):
       self.task = task
       self.description = description
