from flask import render_template, request 
from flask import jsonify 

from models import List 

def register_routes(app, db): 

    @app.route('/')
    def index(): 
        lists = List.query.all()
        print(type(lists))
        return str(lists)
    
    
    @app.route("/api/users", methods=['GET']) 
    def users(): 
        return jsonify(
        { 
            "users": [
                'sherry',
                'zach', 
                'jessie'
            ]
        }
    )

    # @app.route('/api/test', methods=['GET'])
    # def sTasks(): 
    #     lists = List.query.all()
    #     return jsonify(
    #     { 
    #         lists

    #     }
    #     )

