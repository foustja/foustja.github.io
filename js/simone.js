  let width = 800;
  let height = 800;

  let init_x = -1.0;
  let init_y = -1.0;
  let x;
  let y;
  let screen_x;
  let screen_y;
 
  let a = 3.0;
  let b = 1.0;
  
  let red = 255;
  let green = 255;
  let blue = 255;

function setup() 
{
  createCanvas(width, height);
  background(200);
  noStroke();
  
  loop();
  
}

function draw() 
{
    x = init_x;
    y = init_y;
    background(0, 0, 65);  
  
    for (i = 0; i < 3000; i ++ ) 
    {
      
      x_new = sin(x*x - y*y + a);
      y_new = cos(2*x*y + b);
      
      if (x_new > 1.0 || y_new > 1.0) {break;}
    
      x = x_new;
      y = y_new;
    
      screen_x = ((x + 2.0)*(width/4));
      screen_y = ((-y + 2.5)*(height/4));
    
      fill(red, green, blue); 
      rect(int(screen_x), int(screen_y), 1, 1);
      
    } 
    
    /*green = green + 1;
    blue = blue - 1;
    
    if (green > 255) {green = 0;}
    if (blue < 0) {blue = 255;}*/
    
    a = a + 0.001;
    
    if (a > 4.0) {a = 3.0}
}
