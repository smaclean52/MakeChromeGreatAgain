// background.js

chrome.tabs.onCreated.addListener(function(tab){
    //alert("new tab "+tab.id);
     // Send a message to the active tab
	 var max = 20;
	var min = 1;
  	var myAudio = new Audio();        // create the audio object
	myAudio.src = "sounds/"+(Math.floor(Math.random() * (max - min + 1)) + min ) +".mp3"; // assign the audio file to it
	myAudio.play(); 


});
