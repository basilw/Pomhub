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
      socket.connect();
    }
  }
);

// Runs when you connect
socket.on('connect', function() {
  connected = true;
  socket.emit('userConnect', nameID, roomID);
 });

// Listens and relays updates to popup.js
socket.on('update', function(people, statuses) {
  chrome.runtime.sendMessage(
    {"type": "update", "people": people, "statuses": statuses});
});

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