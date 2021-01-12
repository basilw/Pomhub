// When join is clicked, open room in new tab
$('#goBtn').click(()=>{
 var nameIn = $('#nameIn').val();
 var roomIn =  $('#roomIn').val(); 
 localStorage.sharedData = JSON.stringify({username: nameIn, room: roomIn});
 chrome.tabs.create({ url: chrome.runtime.getURL("room.html") });
});

