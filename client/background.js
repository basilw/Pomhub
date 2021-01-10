const socket = io('http://localhost');
socket.on('connect', function() {
  socket.emit('connect', 'namehere', 'room');
 });
// Called when a new page is loaded
chrome.webNavigation.onDOMContentLoaded.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var url = tabs[0].url;
    socket.emit('pageload','namehere', 'room', url);
  });
});

// Listen to messages
chrome.runtime.onMessage.addListener(
  function(request) {
    if( request.message === "join" ) {
      
    }
  }
);