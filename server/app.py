from flask import Flask, render_template, request
from flask_socketio import SocketIO
import detection

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins="*")

@socketio.on('message')
def connected(msg):
    print(msg)

@socketio.on('entered')
def update_room(name, room):
    print(name, room)   
    socketio.emit('update', (name, room), broadcast=True)

@socketio.on('pageload')
def alert_room(name, room, url):
    print(name, room, url)
    if detection.checkURL(url):
        socketio.emit('alert', (name, room, url), broadcast=True)

if __name__ == '__main__':
    socketio.run(app, debug=True)

