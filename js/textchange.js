function imgPop(changeimg){
  document.getElementById("slider").src = changeimg;

}
var opacity =0;
var intervalID=0;
var changelarge = document.getElementById('changelarge')
var changesmall = document.getElementById('changeSmall')
function textchange1(){
changelarge.innerHTML ="Frozen Streets By: Connor East";
changesmall.innerHTML ="This is an image taken while me and my sister were walking to the bus stop. It was in the middle of winter and the cold atmosphere made for a perfect image. At least, in my opinion it made a great image.";
fadeOut();
}
function textchange2(){
  changelarge.innerHTML ="Bermuda Folliage By:Connor East";
  changesmall.innerHTML ="This is an image of some folliage. I took this image while on a trip to Bermuda. This photo had great lighting and a beautiful effect";
fadeOut();
  }
function textchange3(){
changelarge.innerHTML ="Walk In The Park By:Connor East";
changesmall.innerHTML ="This image features my mother while we were on a hike. The lighting seems to make her radiant and as such this picture was taken.";
fadeOut();
}
function textchange4(){
changelarge.innerHTML ="Out The Window By:Connor East";
changesmall.innerHTML ="This image shows the sea out the side of a tour bus me and my family were on when when we had gone to Bermuda.";
fadeOut();
}

function textchange6(){
changelarge.innerHTML ="Off The Coast By:Connor East";
changesmall.innerHTML ="This image shows the beaches of Bermuda from the top of a hill. Personaly the lighting off the water looks beautiful to me.";
fadeOut();
}
function textchange7(){
changelarge.innerHTML ="Endless Sea By:Connor East";
changesmall.innerHTML ="An image taken off of the side of the boat on its way to Bermuda. you can see hills off to the left of the water. This is a beautiful image.";
fadeOut();
}



var opacity =0;
var intervalID=0;
function fadeOut(){
  var intervalID=setInterval(hide,50);
}
function hide(){
  var text =document.getElementById('textremoval');
  opacity = Number( window.getComputedStyle(text).getPropertyValue("opacity"));
  if(opacity>0){
    opacity = opacity-0.1;
    text.style.opacity=opacity;
  }
  else
  {
    clearInterval(intervalID);
  }
}
