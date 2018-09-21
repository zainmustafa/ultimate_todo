from flask import Flask, jsonify, make_response

#importing database model class
from databaseModel import db

#importing routes with blueprints
from Routes.get_all import getall_api
from Routes.get_one import getone_api
from Routes.post import post_api
from Routes.delete import delete_api
from Routes.update_done import update_one_api
from Routes.update_text import update_text_api


app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:aliali@localhost/todo'
db.init_app(app)


#Register blueprints
app.register_blueprint(getall_api)
app.register_blueprint(getone_api)
app.register_blueprint(post_api)
app.register_blueprint(update_one_api)
app.register_blueprint(delete_api)
app.register_blueprint(update_text_api)


if __name__ == '__main__':
    app.run(debug=True)