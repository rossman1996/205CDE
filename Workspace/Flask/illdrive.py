from flask import Flask,render_template,make_response, abort, redirect,request
from flask.ext.bootstrap import Bootstrap
import sqlite3
import os

app = Flask(__name__);
app.config.update(dict(
    DATABASE=os.path.join(app.root_path, 'student.db'),
    SECRET_KEY='development key'
))

@app.route('/')
@app.route('/Home') 
def load_Home():
    return render_template('start.html')

@app.route('/', methods=['GET', 'post'])
@app.route('/Home', methods=['GET', 'post'])
def view_form():
    if request.method =='POST':
        name = request.form['firstname'] +" "+ request.form['lastname'];  #Combines the names and retrieves them from the form
        dob = request.form['dob'];
        address = request.form['address'];
        city = request.form['city'];
        postcode = request.form['postcode'];
        county = request.form['county'];
        phone = request.form['phone'];
        email = request.form['email'];
        with sqlite3.connect(app.config['DATABASE']) as con:
            cur = con.cursor()
            cur.execute("INSERT INTO student (Name, DOB, Phone, Email) VALUES (?,?,?,?)", [name, dob, email, phone]) #Insert student details into relevant fields
            cur.execute("INSERT INTO street (Address) VALUES (?)", [address])
            cur.execute("INSERT INTO postcode (PostCode_ID,county) VALUES (?,?)",[postcode,county])
            con.commit()
        return render_template('start.html')

@app.route('/instructors') 
def load_instructors():
    return render_template('form.html', name='instructors.html')
    
@app.route('/account') 
def load_Timetable():
    with sqlite3.connect(app.config['DATABASE']) as con:
        con.row_factory = sqlite3.Row
        cur = con.cursor()
        cur.execute("SELECT * FROM lessons WHERE Lecturer_ID=(?)",[1])
        entries = cur.fetchall()
        return render_template('form.html', name='account.html', entries=entries)
        
@app.route('/account', methods=['GET','post'])
def book():
    if request.method =='POST': #when form is submitted
       Day = request.form['day'];  #request data from the fields
       Duration = request.form['duration'];
       StartTime = request.form['hour'];
       StartMinute= request.form['minute'];
       EndMinute =request.form['minute'];
       lecturer = request.form['lecturer']
       EndTime = StartTime + Duration 
    with sqlite3.connect(app.config['DATABASE']) as con:
        cur = con.cursor()
        cur.execute("INSERT INTO lessons (Lecturer_ID, Day, StartHour, StartMinute, EndTime, EndMinute) VALUES (?,?,?,?,?,?)", (lecturer, Day, StartTime, StartMinute,Duration,EndMinute))
        con.commit()
        con.row_factory = sqlite3.Row
        cur = con.cursor()
        cur.execute("SELECT * FROM lessons WHERE Lecturer_ID=(?)",[1])
        entries = cur.fetchall()
        return render_template('form.html', name='account.html', entries=entries)
    return render_template('form.html', name='account.html')
# def which_ID(entries):
#     for entry in entries:
#         ID = entry.Student_ID
#     return render_template('flask_sqlite',ID=ID)

@app.route('/T&C') 
def load_Terms():
    return render_template('form.html', name='TC.html')
    

@app.route('/<path:path>')
def catch_all(path):
    return render_template('start.html')
    
@app.route('/error')
def error():
    return render_template('error.html')
    
if __name__ == '__main__':
    Bootstrap(app)
    app.run(port=8080, host='0.0.0.0',debug=True)