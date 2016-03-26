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

chrome.tabs.onActivated.addListener(function(tab) {

	var searchP = document.getElementsByTagName("*");
	var i;
	for (i = 0; i < searchP.length; i++)
  	{
  		if (searchP[i].innerHTML.search("China") != -1) 
  		{
	  		var myAudio = new Audio();  
	            // create the audio object
			myAudio.src = "sounds/china.mp3"; // assign the audio file to it
			myAudio.play();
	  		alert("CHINA");
			break;
		}
	}
});
