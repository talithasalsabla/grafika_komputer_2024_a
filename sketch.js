// Click and drag the mouse to view the scene from different angles.

function setup() {
  createCanvas(600, 600);
  background(255, 204, 204);
}

function draw() {
  stroke(random(255), random(255), random(255));
  line(300, 300, mouseX, mouseY);
}