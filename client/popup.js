var room;
var username;

// When join is clicked, open room in new tab
$('#goBtn').click(()=>{
 username = $('#nameIn').val();
 room =  $('#roomIn').val(); 
 localStorage.sharedData = JSON.stringify({nameID: username, roomID: room});
 chrome.tabs.create({ url: chrome.runtime.getURL("room.html") });
});

