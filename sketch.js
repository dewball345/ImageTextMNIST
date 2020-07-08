function setup() {
  createCanvas(400, 400);
  background(220);
}

var x = 0;
var y = 0;

var myString = "";



function draw() {
  //background(220);

}

function mouseDragged() {
  strokeWeight(10)
  line(mouseX, mouseY, pmouseX, pmouseY);
  myString += Math.round(mouseX) + " " + Math.round(mouseY) + "h"
}

function thing() {
  console.log(myString);
  document.getElementById("THING").innerHTML = myString;
}