from flask import Flask, jsonify, make_response

from databaseModel import db





app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:aliali@localhost/todo'
db.init_app(app)



if __name__ == '__main__':
    app.run(debug=True)