var mean, sd;
var counter = 0;
var ytrans = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mean = windowWidth/2;
	sd = windowWidth/4;
    background(0);
}

function draw() {
  noStroke();
  fill(255,18);
  var x = randomGaussian(mean, sd);
  var size = abs(windowWidth/2 - x);
  size = map(size, 0, windowWidth/2, windowHeight/10, windowHeight/4);
  translate(0, ytrans);
  ellipse(x,0,size,size);
 
  
  counter++;
  
  if (counter % 15 == 0) {
    background(0,5);
  }
  
  ytrans++;
  if (ytrans > windowHeight) {
    ytrans = 0;
  }
  
}	