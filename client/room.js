let sharedData;
try {
    sharedData = JSON.parse(localStorage.sharedData);
    var header = "Welcome to room "+sharedData.roomID+", "+sharedData.nameID
    $("#header").html(header)
} catch (e) {}
delete localStorage.sharedData;

// Listen to messages
chrome.runtime.onMessage.addListener(
    function(request) {
      // When you get a join request
      if (request.type === "update" ) {
       $('#messages').append('<li>'+msg+'</li>');
      }
    }
);

