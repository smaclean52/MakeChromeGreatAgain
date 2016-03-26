// background.js

// Called when the user clicks on the browser action.
chrome.tabson.Created.addListener(function(tab) {
  // Send a message to the active tab
 alert("Listener triggered");
  var myAudio = new Audio();        // create the audio object
	myAudio.src = "sounds/On Rosie Fat Ugly Face.mp3"; // assign the audio file to it
	myAudio.play(); 

});


