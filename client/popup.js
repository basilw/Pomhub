var room;
var username;

// When join is clicked, send info to background.js
$('#goBtn').click(()=>{
 username = $('#nameIn').val();
 room =  $('#roomIn').val(); 
 localStorage.sharedData = JSON.stringify({nameID: username, roomID: room});
 chrome.tabs.create({ url: chrome.runtime.getURL("room.html") });
 chrome.runtime.sendMessage({"type": "join", "nameID": username, "roomID": room});
});

// Listen to messages
// chrome.runtime.onMessage.addListener(
//   function(request) {
    // When you get a join request
//     if (request.type === "update" ) {
//      $('#setup').addClass('hidden');
//     }
//   }
// );