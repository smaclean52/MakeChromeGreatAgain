document.body.style.backgroundImage = "url('http://i.kinja-img.com/gawker-media/image/upload/s--rUJaSzPA--/1464290996877758537.jpg')";
alert("Remember to MAKE WATERLOO GREAT AGAIN!");

// content.js

var currentLocation = (window.location.href).toLowerCase();
var max = 5;
var min = 1;
var random = (Math.floor(Math.random() * (max - min + 1)) + min );

switch (random) {
  case 1: 
    document.body.style.backgroundImage = "url('http://i.kinja-img.com/gawker-media/image/upload/s--rUJaSzPA--/1464290996877758537.jpg')";
    break;
  case 2: 
    document.body.style.backgroundImage = "url('http://img.ifcdn.com/images/d4d5f2f2a72709b6cb48b0532fa9b2ce73dd1947c0950fab8c1980b218c9fd1e_1.jpg')";
    break;
  case 3:
    document.body.style.backgroundImage = "url('http://s.newsweek.com/sites/www.newsweek.com/files/2015/08/04/donald-trump.jpg')";
    break;
  case 4:
    document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXsar60A2fCThHGO9Inkmk_SEj6WMIKuAw1RndbZW3XhF9JyIQ')";
    break;
  case 5: 
    document.body.style.backgroundImage = "url('http://media.salon.com/2015/06/donald_trump4.jpg')";
    break;
}

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
  }



  	for (i = 0; i < searchP.length; i++)
    {
      if ((searchP[i].innerHTML.search("China") != -1) && (currentLocation.indexOf("youtube") == -1)) {
      window.location = "https://youtu.be/RDrfE9I8_hs?t=51s";
		  break;
    }
  }





	

