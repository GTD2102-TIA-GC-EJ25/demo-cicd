let rectColor = 'blue';

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(rectColor);
  rect(150, 150, 100, 100);
}

function mousePressed() {
  // Usamos la lógica que testearemos después
  if (mouseX > 150 && mouseX < 250 && mouseY > 150 && mouseY < 250) {
    rectColor = getNextColor(rectColor);
  }
}