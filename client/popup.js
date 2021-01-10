var room;
var username;
$('#goBtn').click(()=>{
 username = $('#nameIn').val();
 room =  $('#roomIn').val();
 chrome.runtime.sendMessage({"type": "join", "nameID": username, "roomID": room});
});