document.body.style.backgroundImage = "url('http://i.kinja-img.com/gawker-media/image/upload/s--rUJaSzPA--/1464290996877758537.jpg')";
alert("Remember to MAKE WATERLOO GREAT AGAIN!");

// content.js

var currentLocation = (window.location.href).toLowerCase();
if (((currentLocation.indexOf("hotel") != -1) || (currentLocation.indexOf("inn") != -1)) &&
	(currentLocation.indexOf("trump") == -1)) {
	window.location = "http://www.trump.com/hotel-collection/";
}