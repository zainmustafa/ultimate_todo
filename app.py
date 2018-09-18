from flask import Flask
from Routes.getdata import getdata_api

app = Flask(__name__)


app.register_blueprint(getdata_api)
app.run(debug=True, use_reloader=False, port=1000)
