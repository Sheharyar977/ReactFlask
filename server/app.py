from flask import Flask, jsonify 
from flask_sqlalchemy import SQLAlchemy 
from sqlalchemy import Table, Column, Integer, String, Float
from flask_cors import CORS
import sqlite3
from flask_migrate import Migrate 



db = SQLAlchemy()

def create_app(): 
    app = Flask(__name__, template_folder='templates')
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///./testdb.db'

    db.init_app(app)

    cors = CORS(app, origins='*')

    from routes import register_routes
    register_routes(app, db) 

    connection = sqlite3.connect('testdb.db')






    #imports later on

    migrate = Migrate(app, db)

    return app







