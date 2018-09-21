from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(65))
    description=db.Column(db.String(90))
    complete = db.Column(db.Boolean)
#db.create_all()