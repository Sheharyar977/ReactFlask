from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy 
from sqlalchemy import Table, Column, Integer, String, Float
from flask_cors import CORS
import sqlite3
from flask_migrate import Migrate 




app = Flask(__name__, template_folder='templates')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///./newtestdb.db'

db = SQLAlchemy(app)

CORS(app, resources={r"/*": {"origins": "*"}})

from routes import register_routes
register_routes(app, db) 

def handle_options_request():
    if request.method == 'OPTIONS':
        response = app.make_default_options_response()
        response.headers.add("Access-Control-Allow-Origin", "*")
        response.headers.add("Access-Control-Allow-Headers", "Content-Type, Authorization")
        response.headers.add("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        return response












