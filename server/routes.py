from flask import render_template, request 
from flask import jsonify 

from models import List 

def register_routes(app, db): 

    @app.route('/add', methods=["POST"])
    def create_task(): 

        new_task = List(task=request.json.get("todoValue"))
        try: 
            db.session.add(new_task)
            db.session.commit()
        except Exception as e: 
            return jsonify({"message": str(e)}), 400
        
    @app.route("/delete/<int:id>", methods=["DELETE"])
    def delete(id): 
        tasks = List.query.all()

        task_to_delete = tasks[id]

        if not task_to_delete:
            return jsonify({"message" : "User not found"}), 404
        
        db.session.delete(task_to_delete)
        db.session.commit()

        return jsonify({"message": "user deleted"}), 200



    
    
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

    @app.route('/api/test', methods=['GET'])
    def getTasks(): 
        tasks = List.query.all()
        json_tasks = list(map(lambda x: x.to_json(), tasks))
        return jsonify({"tasks": json_tasks})

  