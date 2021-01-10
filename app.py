from flask import Flask, render_template, request
from flask_socketio import SocketIO, send, join_room, leave_room

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/enter')
def enter_room():
    username = request.args.get('username')
    room = request.args.get('room')

    if username and room:
        return render_template('chat.html', username=username, room=room)

@socketio.on('message')
def handleMsg(msg):
    print(msg)
    send(msg, broadcast=True)

if __name__ == '__main__':
    socketio.run(app, debug=True)

