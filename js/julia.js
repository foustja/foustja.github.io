  let width = 400;
  let height = 400;

  let init_x;
  let init_y;
  let x;
  let y;
  let x_new;
  let y_new;
  let screen_x;
  let screen_y;
  let mzsq;
 
  let a = 0.35;
  let b = 0.35;
  
  let red = 255;
  let green = 255;
  let blue = 255;

function setup() 
{
  let myCanvas = createCanvas(width, height); 
  myCanvas.parent('myContainer');
  noStroke();
  
  //createCanvas(width, height);
  //background(0, 0, 65);
  //noStroke();
  
  loop();
  
}

function draw() 
{
 background(0, 0, 65);
 for (screen_x = 1; screen_x < width; screen_x++)
  {
    //transforms screen_x to a value in the complex plane
    init_x = screen_x/(width/4) - 2.0;
   

    for (screen_y = 1; screen_y < height; screen_y++)
    {
      //transforms screen_y to a long double value in the complex plane
      init_y = -(screen_y/(height/4) - 2.0);
      
      x = init_x;
      y = init_y;
      mzsq = 0.0;
      counter = 0;

      while (counter < 30)
      {
      //loop to iterate function F(z) = z*z + c

        x_new = x*x - y*y + a;
        y_new = 2.00*x*y + b;

        //calculate square of the modulus of z
        mzsq = x_new*x_new + y_new*y_new;

        x = x_new;
        y = y_new;

        counter++;
      }

      //Test to determine if c is a member of the Julia
      //set and color the screen pixels according to whether
      //the value of c is included in the set.

      if (mzsq < 4.0)
      {
        fill(red, green, blue); 
        rect(int(screen_x), int(screen_y), 1, 1);
      }

      else
      {
        fill(0, 0, 65); 
        rect(int(screen_x), int(screen_y), 1, 1); 
      }
      
    }
  }
  a = a + 0.01;
    
  if (a > 0.42) {a = 0.35}
}
