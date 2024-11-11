/*
 * @name Tickle
 * @arialabel The word “tickle” in black is on a light gray background. As the user hovers the word, the word shakes and moves as if being tickled
 * @description The word "tickle" jitters when the cursor hovers over.
 * Sometimes, it can be tickled off the screen.
 */
let message = 'im going crazy',
  font,
  bounds, // holds x, y, w, h of the text's bounding box
  fontsize = 100,
  x,
  y; // x and y coordinates of the text

function preload() {
  font = loadFont('assets/SourceSansPro-Regular.otf');
}

function setup() {
  createCanvas(1500, 710);

  // set up the font
  textFont(font);
  textSize(fontsize);

  // get the width and height of the text so we can center it initially
  bounds = font.textBounds(message, 0, 0, fontsize);
  x = width / 2 - bounds.w / 2;
  y = height / 2 - bounds.h / 2;
}

function draw() {
  background(100, 10);

  // write the text in black and get its bounding box
  fill(0);
  text(message, x, y);
  bounds = font.textBounds(message, x, y, fontsize);

  // check if the mouse is inside the bounding box and tickle if so
  if (
    mouseX >= bounds.x &&
    mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y &&
    mouseY <= bounds.y + bounds.h
  ) {
    x += random(-10, 10);
    y += random(-10, 10);
  }
}
