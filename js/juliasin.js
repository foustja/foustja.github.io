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
 
  let a = 1.0;
  let b = 0.0;
  
  let red = 0;
  let green = 0;
  let blue = 0;

function setup() 
{
  let myCanvas = createCanvas(width, height); 
  myCanvas.parent('myContainer');
  noStroke();
  
  //createCanvas(width, height);
  //background(125, 125, 125);
  //noStroke();
  
  loop();
  
}

function draw() 
{
 background(125, 125, 125);
 for (screen_x = 1; screen_x < width; screen_x++)
  {
    //transforms screen_x to a value in the complex plane
    init_x = screen_x/(width/8) - 4.0;
   

    for (screen_y = 1; screen_y < height; screen_y++)
    {
      //transforms screen_y to a long double value in the complex plane
      init_y = -(screen_y/(height/8) - 4.0);
      
      x = init_x;
      y = init_y;
      mzsq = 0.0;
      counter = 0;

      while (counter < 30)
      {
      //loop to iterate function (a + ib)sin(x + yi) = (a + ib)(sin(x)cosh(y) + aicos(x)sinh(y))
      //                                             = asin(x)cosh(y) + aicos(x)sinh(y) + ibsin(x)cosh(y) + i*iabcos(x)sinh(y)
      //                                             = asin(x)cosh(y) - abcos(x)sinh(y) + iacos(x)sinh(y) + ibsin(x)cosh(y)

        x_new = a*sin(x)*Math.cosh(y) - a*b*cos(x)*Math.sinh(y);
        y_new = a*cos(x)*Math.sinh(y) +   b*sin(x)*Math.cosh(y);

        //calculate square of the modulus of z
        mzsq = x_new*x_new + y_new*y_new;

        x = x_new;
        y = y_new;

        counter++;
      }

      //Test to determine if z is a member of the Julia
      //set and color the screen pixels according to whether
      //the value of z is included in the set.

      if (mzsq < 4.0)
      {
        fill(red, green, blue); 
        rect(int(screen_x), int(screen_y), 1, 1);
      }

      else
      {
        fill(125, 125, 125); 
        rect(int(screen_x), int(screen_y), 1, 1); 
      }
      
    }
  }
  b = b + 0.01;
    
  if (b > 0.7) {b = 0.0}
}
