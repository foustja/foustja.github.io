//Generates lorenz_xy attractor and displays in 2D

/*
Equations and code borrowed from Paul Bourke
http://paulbourke.net/fractals/lorenz_xy/

3 coupled non-linear differential equations

dx / dt = a (y - x)
dy / dt = x (b - z) - y
dz / dt = xy - c z

One commonly used set of constants is a = 10, b = 28, c = 8 / 3.
Another is a = 28, b = 46.92, c = 4.
"a" is sometimes known as the Prandtl number and "b" the Rayleigh number.

*/

  let a = 10.0; 
  let b = 28.0; 
  let c = 8.0/3.0;
  let h = 0.01;
  
  let width = 600;
  let height = 600;

  let init_x = 0.1;
  let init_y = 0.0;
  let init_z = 0.0;
  let x;
  let y;
  let z;
  let screen_x;
  let screen_y;
  let screen_z;
  
  let red = 0;
  let green = 0;
  let blue = 0;

function setup() 
{
  //createCanvas(width, height);
  //background(200);
  //noStroke();
  
  let myCanvas = createCanvas(width, height); 
  myCanvas.parent('myContainer');
  noStroke();
  
  //loop();
  
}

function draw() 
{
    x = init_x;
    y = init_y;
    z = init_z;
    background(200);  
  
    for (i = 0; i < 100000; i ++ ) 
    {
      
      x_new = x + h * a * (y - x);
      y_new = y + h * (x * (b - z) - y);
      z_new = z + h * (x * y - c * z);

      x = x_new;
      y = y_new;
      z = z_new;

    
      screen_x = x*10 + 1.5*(width/3);
      screen_y = -y*10 + 1.5*(height/3);
    
      fill(red, green, blue); 
      rect(int(screen_x), int(screen_y), 1, 1);
      
    } 
    
    /*green = green + 1;
    blue = blue - 1;
    
    if (green > 255) {green = 0;}
    if (blue < 0) {blue = 255;}*/
    
    a = a + 0.1;
    
    if (a > 12.0) {a = 10.0;}
}
