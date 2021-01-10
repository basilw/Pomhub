const socket = io('http://localhost:5000');
var nameID;
var roomID;

// Listen to messages
chrome.runtime.onMessage.addListener(
  function(request) {
    if( request.message === "join" ) {
      socket.connect();
      nameID = request.nameID;
      roomID = request.roomID;
    }
  }
);

socket.on('connect', function() {
  socket.emit('connect', nameID, roomID);
 });

// Called when a new page is loaded
chrome.webNavigation.onDOMContentLoaded.addListener(function(tab) {
// Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var url = tabs[0].url;
    socket.emit('pageload', nameID, roomID, url);
  });
});
