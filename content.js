document.body.style.backgroundImage = "url('http://i.kinja-img.com/gawker-media/image/upload/s--rUJaSzPA--/1464290996877758537.jpg')";
alert("Remember to MAKE WATERLOO GREAT AGAIN!");

// content.js

var currentLocation = (window.location.href).toLowerCase();
if (((currentLocation.indexOf("hotel") != -1) || (currentLocation.indexOf("inn") != -1)) &&
	(currentLocation.indexOf("trump") == -1)) {
	window.location = "http://www.trump.com/hotel-collection/";
}
//alert("hello");

//document.body.style.background = 'yellow';
//alert("Remeber to MAKE WATERLOO GREAT AGAIN!")
// content.js


 var searchP = document.getElementsByTagName("*");

 var i;
  for (i = 0; i < searchP.length; i++)
  {
  	if (searchP[i].innerHTML.search("Mexico") != -1) {
  		document.getElementsByTagName("body")[0].setAttribute("class", "overlay");
		var x = document.createElement("IMG");
		x.setAttribute("src", "http://thumb101.shutterstock.com/display_pic_with_logo/660385/212125063/stock-photo-grunge-red-brick-wall-background-with-copy-space-212125063.jpg");
		x.setAttribute("id", "overlay2");
		document.body.appendChild(x);
		chrome.tabs.insertCSS(null, { file: "override.css" });
		break;
  	}
  	
  	for (i = 0; i < searchP.length; i++)
  	{
  	if (searchP[i].innerHTML.search("China") != -1) {
  		
  		var myAudio = new Audio();        // create the audio object
	myAudio.src = "sounds/china.mp3"; // assign the audio file to it
	myAudio.play();
		break;
  	}
  }

