var diceNumber1 = Math.floor(Math.random() * 6)+1;
var diceImageSrc = "images/dice" + diceNumber1 + ".png";
var image = document.querySelectorAll("img")[0];
image.setAttribute("src",diceImageSrc);

var diceNumber2 = Math.floor(Math.random() * 6)+1;
var diceImageSrc2 = "images/dice" + diceNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",diceImageSrc2);

if(diceNumber1 > diceNumber2){
  var heading = document.querySelector("h1").innerHTML = "player 1 wins";
}
else if(diceNumber1 < diceNumber2){
  var heading = document.querySelector("h1").innerHTML = "player 2 wins";
}
else{
  var heading = document.querySelector("h1").innerHTML = "Draw";
}
