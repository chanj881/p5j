/*
 * @name Mouse 2D
 * @arialabel Two fuschia squares on a grey background. As the user’s mouse moves left, the squares rotate around each other in the left direction and vice versa as the user’s mouse moves right 
 * @description Moving the mouse changes the position and
 * size of each box.
 */
function setup() {
  greeting = createElement('h3', 'move your mouse!');
  greeting.position(650, 20);
  createCanvas(1550, 750);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(230);
  fill(50, 200, 158);
  rect(mouseX, height / 2, mouseY / 2 + 10, mouseY / 2 + 10);
  fill(220, 60, 50);
  let inverseX = width - mouseX;
  let inverseY = height - mouseY;
  rect(inverseX, height / 2, inverseY / 2 + 10, inverseY / 2 + 10);
}
