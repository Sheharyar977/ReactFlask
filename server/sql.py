import sqlite3


connection = sqlite3.connect('testdb.db')
cursor = connection.cursor()

cursor.execute("Select * from tasks")
rows = cursor.fetchall()
for row in rows: 
    print(row)