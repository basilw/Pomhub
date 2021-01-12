var username;
var room;
const socket = io('http://127.0.0.1:5000');
var connected;

let sharedData;
try {
    sharedData = JSON.parse(localStorage.sharedData);
    room = sharedData.room 
    username = sharedData.username
    var header = "Welcome to room "+room+", "+username
    $("#header").html(header)
    console.log('connect', username, room);
} catch (e) {}
delete localStorage.sharedData;

socket.on('connect', function() {
    connected = true;
    socket.emit("user_connect", username + " connected")
    socket.emit('join_room', username, room);
});

socket.on('message', function(message) {
    $('#messages').append('<li>'+message+'</li>');
});

$("#message-input").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#send-button").click();
    }
});

$(document).keyup(function(event) {
    if (event.keycode === 13) {
        $('#send-button').click()
    }
});

$('#send-button').click(()=>{
    var msg = username+": "+$('#message-input').val();
    console.log(msg)
    socket.emit('message', msg, room);
});

// Called when a new page is loaded
chrome.webNavigation.onDOMContentLoaded.addListener(function(tab) {
if (connected) {
// Sends info to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    var url = activeTab.url;
    console.log('pageload', username, room, url);
    socket.emit('pageload', username, room, url);
  });
}
});

