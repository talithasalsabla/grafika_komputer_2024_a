// Click and drag the mouse to view the scene from different angles.

x = 300;
y = 300;
size = 80;

function car (x, y, size) {
    rectMode(CENTER);
    fill (255, 0, 127);
    rect (x, y, size + 80, size, 8, 8, 0, 0);
    fill (0);
    circle (x - 40, y + 40, size - 30);
    circle (x + 40, y + 40, size - 30);
    fill (255, 255, 255);
    circle (x - 40, y + 40, size - 50);
    circle (x + 40, y + 40, size - 50); 
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
    background(255, 204, 204);
    car (x, y, size);
        if (keyIsPressed === true) {
        if (keyCode === UP_ARROW) {
            y -= 4;
        } else if (keyCode === DOWN_ARROW) {
            y += 4;
        } else if (keyCode === LEFT_ARROW) {
             x -= 4;
            } else if (keyCode === RIGHT_ARROW) {
                x += 4;
            }
        }
        if (x - size / 2 > width) {
            x = 0;
        }
        else if ( + size / 2 < 0) {
            x = 600;
        }
        if (y - size / 2 > width) {
            y = 0;
        }
        else if (y + size / 2 < 0) {
            y = 600;
        }
    }