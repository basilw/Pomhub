var room;
var username;

let sharedData;
try {
    sharedData = JSON.parse(localStorage.sharedData);
    room = sharedData.roomID 
    username = sharedData.nameID
    var header = "Welcome to room "+room+", "+username
    $("#header").html(header)
    console.log('connect', username, room);
    chrome.runtime.sendMessage({"type": "join", "nameID": username, "roomID": room})
} catch (e) {}
delete localStorage.sharedData;

$(document).keyup(function(event) {
    if ($(".input1").is(":focus") && event.key == "Enter") {
        $('#send-button').click()
    }
});

$('#send-button').click(()=>{
    var msg = username+": "+$('#message-input').val();
    console.log(msg)
    chrome.runtime.sendMessage({"type": "chatMessage", "msg": msg});
    // $('#messages').append(request.msg);
    return false;
});

// Listen to messages
chrome.runtime.onMessage.addListener(
    function(request) {
      // When you get a join request
      if (request.type === "update" ) {
          var msg = request.name + " has joined the room."
       $('#messages').append('<li>'+msg+'</li>');
      }
      if (request.type === "addMessage" ) {
          var msg = request.message;
       $('#messages').append('<li>'+msg+'</li>');
      }
    }
);

