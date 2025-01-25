var x = 0;
var y = 0;

function setup(){
createCanvas(720, 480);
}

function draw(){
  background ('#6000')
  rect(x,y,200,300)
  x = x + 1;
  X = x % 300;
  y = y + 2;
  y= y % 400;
}