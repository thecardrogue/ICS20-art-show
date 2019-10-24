let sceneNum = 0;
let dot = new Mover();
let dots = [];

function setup() {
 createCanvas(400, 400);
for (let i = 0; i < 4000; i++) {
    dots[i] = new Mover();
  }
}

function draw() {
background(mouseX,mouseY,100);
 if (keyIsPressed===true) {
    sceneNum++;
  }
    //made it so that a key press starts the art
  
  if (sceneNum == 0) {
    background(mouseX, mouseY, 100);
    fill(7, 14, 145);
    textSize(25);
    text("rainbow dot art", 100, 100);
    textSize(30);
    text("press any key to Start", 90, 200)
  } else if (sceneNum == 1) {
    background(50);
 ellipse(mouseX, mouseY, 15,30);
    for (let i = 0; i < 4000; i++) {
      dots[i].update();
      dots[i].show();
    }

  } else if (sceneNum == 2) {
    background(mouseX, mouseY, 100); // changed backgrounds to rainbow colors
    textSize(30);
    text("", 20, 20);
  
  }
}
