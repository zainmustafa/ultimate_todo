from flask import Flask, jsonify, make_response

#importing database model class
from databaseModel import db

#importing routes with blueprints
from Routes.get_all import getall_api






app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:aliali@localhost/todo'
db.init_app(app)


#create blueprints
app.register_blueprint(getall_api)


if __name__ == '__main__':
    app.run(debug=True)