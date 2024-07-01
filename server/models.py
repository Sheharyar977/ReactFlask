from app import db 

class List(db.Model): 
    __tablename__ = 'tasks'

    pid = db.Column(db.Integer, primary_key=True)
    task = db.Column(db.Text, nullable=False)

    def __repr__(self): 
        return f'Added new {self.task}'
    

# flask db init once and then flask migrate and flask upgrade everytime yo change schema