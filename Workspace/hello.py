from flask import Flask, send_from_directory
import os

app = Flask(__name__);

@app.route('/')
def send_static():
    return app.send_static_file('Homepage.html')
    
@app.route('/<path:path>')
def send_static2(path):
    return send_from_directory('static', path)
    
if __name__ == '__main__':
    app.debug = True
    port = int(os.getenv('PORT',8080))
    host = os.getenv('IP','0.0.0.0')
    app.run(port=port, host=host)