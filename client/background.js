const socket = io('http://127.0.0.1:5000');
var nameID;
var roomID;
var connected = false;

// Listen to messages
chrome.runtime.onMessage.addListener(
  function(request) {
    // When you get a join request
    if(request.type === "join" ) {
      // Connect to socket
      nameID = request.nameID;
      roomID = request.roomID;
      console.log('connect', nameID, roomID);
      socket.emit('entered', nameID, roomID);
    }
    if(request.type === "chatMessage") {
        message = request.msg 
        console.log()
    }
  }
);

// Runs when you connect
socket.on('connect', function() {
  connected = true;
  socket.send("User connected")
 });

// Listens and relays updates to popup.js
socket.on('update', function(name, room) {
    console.log(name, room)
  chrome.runtime.sendMessage(
    {"type": "update", "name": name, "room": room});
});

socket.on('alert', function(name, url) {
    console.log("alerted", url)
}
);

// Called when a new page is loaded
chrome.webNavigation.onDOMContentLoaded.addListener(function(tab) {
if (connected) {
// Sends info to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    var url = activeTab.url;
    console.log('pageload', nameID, roomID, url);
    socket.emit('pageload', nameID, roomID, url);
  });
}
});