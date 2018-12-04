var mean, sd;
var counter = 0;
var ytrans = 0;
var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  mean = windowWidth/2;
	sd = windowWidth/4;
    background(0);
}

function draw() {
  noStroke();
  fill(255,10);
  var x = randomGaussian(mean, sd);
  var size = abs(windowWidth/2 - x);
  size = map(size, 0, windowWidth/2, windowHeight/10, windowHeight/4);
  translate(0, ytrans);
  ellipse(x,0,size,size);
 
  
  counter++;
  
  if (counter % 13 == 0) {
    background(0,7);
  }
  
  ytrans++;
  if (ytrans > windowHeight) {
    ytrans = 0;
  }
  
}	

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}