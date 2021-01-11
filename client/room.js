

let sharedData;
try {
    sharedData = JSON.parse(localStorage.sharedData);
    var header = "Welcome to room "+sharedData.roomID+", "+sharedData.nameID
    $("#header").html(header)
    console.log('connect', sharedData.nameID, sharedData.roomID);
    chrome.runtime.sendMessage({"type": "join", "nameID": sharedData.nameID, "roomID": sharedData.roomID})
} catch (e) {}
delete localStorage.sharedData;

$('send-button').click(()=>{
    var msg = $('#message-input').val();
    chrome.runtime.sendMessage({"type": "chatMessage", "msg": msg})
});

// Listen to messages
chrome.runtime.onMessage.addListener(
    function(request) {
      // When you get a join request
      if (request.type === "update" ) {
          var msg = request.name + " has joined the room."
       $('#messages').append('<li>'+msg+'</li>');
      }
    }
);

