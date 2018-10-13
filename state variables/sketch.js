// Project Title
// Muhammad Sheikh
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let box;
let boy;
let circleSize = 30;
let overcircle = false;
let xOffset = 0.0;
let yOffset = 0.0;
let x, y;
let state;
let ballArray = [];




function setup() {
  createCanvas(windowWidth, windowHeight);
  box = windowWidth;
  boy = windowHeight;
  ellipseMode(RADIUS);
  state = 1;
  startScreen = loadImage("assets/start screen.PNG");
}

function draw() {
  background(0);
  stroke(50);
  if (mouseX > box-circleSize && mouseX < box+circleSize &&
      mouseY > boy-circleSize && mouseY < boy+circleSize) {
    clickedCircle = true;

  }

  if (state === 1) {
    displayStartScreen();
  }
  else if (state === 2) {
  ellipse(box, boy, circleSize, circleSize);
  box = box + random(-8, 2);
  boy = boy - 4;

  if (boy < 0) {
    boy = windowHeight;
    fill(255);
  }
  if (box < 0) {
    box = windowWidth;
    fill(255);
  }
}

}

function score() {

}

function mousePressed() {
  if(clickedCircle) {
    fill(random(255, 255, 255));
  }
  xOffset = mouseX-box;
  yOffset = mouseY-boy;
}

function displayStartScreen() {
  let buttonWidth = windowWidth;
  let buttonHeight = windowHeight;
  let leftSide = width / 2 - buttonWidth / 2;
  let topSide = height / 2 - buttonHeight / 2;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;
  image(startScreen, 0, height/2, startScreen.width/2, startScreen.height/2);

  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(200,200,34);
    if (mouseIsPressed) {
      state = 2;
    }
  }
  else {
    fill(0);
  }

}

function switchScreen() {
  if (state === 2) {
    draw();
  }
}
