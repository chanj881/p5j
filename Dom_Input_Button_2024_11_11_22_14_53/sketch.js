/*
 * @name Input and Button
 * @arialabel “What is your name?” is written in the top left of the window with a text input box and a submit button under. After inputting text and submitting, the text submitted is generated multiple times to cover the background in a random formation in various shades of cyan.
 * @description Input text and click the button to see it affect the the canvas.
 */
let input, button, greeting;

function setup() {
  // create canvas
  createCanvas(1550, 750);

  input = createInput();
  input.position(650, 70);

  button = createButton('submit');
  button.position(input.x + input.width, 70);
  button.mousePressed(greet);

  greeting = createElement('h2', 'what is your name?');
  greeting.position(650, 20);

  textAlign(CENTER);
  textSize(100);
}

function greet() {
  const name = input.value();
  greeting.html('hello ' + name + '! how are you?');
  input.value('');

  for (let i = 0; i < 200; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height));
    rotate(random(2 * PI));
    text(name, 0, 0);
    pop();
  }
}
