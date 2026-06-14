
  let width = 600;
  let height = 600;

  let init_x = 0.1;
  let init_y = 0.1;
  let x;
  let y;
  let screen_x;
  let screen_y;
 
  let a = -0.6;
  let b = -0.9998;
  
  let red = 0;
  let green = 0;
  let blue = 0;

function setup() 
{
  let myCanvas = createCanvas(width, height); 
  myCanvas.parent('myContainer');
  noStroke();
  
  //createCanvas(400, 400);
  //background(200);
  //noStroke();
  
}

function draw() 
{
    x = init_x;
    y = init_y;
    background(200);  
  
    for (i = 0; i < 3000; i ++ ) 
    {
      
      x_new = 1 - a*x*x + y;
      y_new = b*x;
    
      x = x_new;
      y = y_new;
    
      screen_x = ((x + 1.5)*(width/4));
      screen_y = ((-y + 1.5)*height/4);
    
      fill(red, green, blue); 
      rect(int(screen_x), int(screen_y), 1, 1);
      
    } 
    
    /*green = green + 1;
    blue = blue - 1;
    
    if (green > 255) {green = 0;}
    if (blue < 0) {blue = 255;}*/
    
    a = a + 0.0001;
    
    if (a > 0.9) {a = -0.6}
}
