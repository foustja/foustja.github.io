function setup() {
  let myCanvas = createCanvas(400, 400, WEBGL); 
  myCanvas.parent('myContainer');
  
}
function draw() {
t=0
background(0)
p=PI/40
noStroke();
rotateX(.5)
rotateY(-.5)
r=100
for(y=40;y--;)
  for(x=80;x--;pop(sphere(cos(v)+.3)))push(),translate((2+sin(v=(y+t)*p*2))*cos(u=(x+t)*p)*r,(2+sin(v))*sin(u)*r,z=cos(v)*r)
  t=(t+.04)%1
}
