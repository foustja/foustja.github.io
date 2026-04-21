function setup() {
  let myCanvas = createCanvas(400, 400, WEBGL); 
  myCanvas.parent('myContainer');
  noStroke();
}
function draw() {
  background(0);
  pointLight(255, 255, 255, 0, -400, 400);
  pointLight(200, 200, 200, 0, 0, 400);
  for (let i = 0; i < TAU; i += PI / 256) {
    push();
    rotateZ(i);
    translate(100, 0, 0);
    rotateY(i + frameCount / 50);
    box(30, 2, 30);
    pop();
  }
}
