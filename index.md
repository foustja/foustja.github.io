<!-- <!DOCTYPE html> -->
<html>
  <head>
    <style> body{padding:0; margin:0;} </style>
    <meta charset="utf-8">
    <!--<title>Luxaeterna</title> -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.2.0/p5.min.js" type="text/javascript"></script>
    <script src="sketch1.js" type="text/javascript"></script>
  </head>
  <body>
    <div id='myContainer'></div>
    <p>
     This animation is a p5.js example sketch which I borrowed from an article on つぶやきProcessing 
     by Koma Tebe. (You can read about 
     it <a href="https://medium.com/@koma.tebe/tiny-code-dbf26d84fe38">here</a>.) 
     It's mainly an exercise to learn more about p5js, つぶやきProcessing, and embedding graphics. 
     In order to embed this p5js sketch in an X tweet, I first reworked it so it would run in 
     the Processing IDE, exported it as an mp4, then converted mp4 to GIF with ffmpeg, using the 
     command: ffmpeg -i xxxx.mp4 xxxx.gif. Simple enough. 
     Note that "createCanvas" and "let" are not keywords in Processing. You need to change 
     "createCanvas()" to "size()," and "let" to "float" (so that index "i" is declared as a float).
    </p>
    <!--<h1>Welcome to the Infinite Playa!</h1>-->
    <!--<img src="PlayaPano2019.jpg" alt="PlayaPano2019.jpg">-->
    <h2>Luxaeterna</h2>
    <img src="lux.jpg" alt="Luxaeterna image"><br>
    <video width="320" height="240" controls>
    <source src="Luxaeterna2.mp4" type="video/mp4">
    </video>
    <!--<div class="iframe_container">
    <iframe width="640" height="480" 
    src="https://www.youtube.com/embed/live_stream?channel=UCH1IeN5ZQYLfa2T7RVm72mA" 
    frameborder="0" allowfullscreen> </iframe> 
    </div>-->
    <p>Luxaterna is a light sculpture constructed from WS2822S LEDs embedded
      in pentagonal PCBs (i.e., BlinkyTiles) and controlled with an Adafruit Metro Mini. 
      Arduino/C++ and FastLED allow cycling through a series 
      of patterns and colors.
    </p>
    <!--<a href="https://youtu.be/qxCZm41zsss"-->
    <a href="Luxaeterna2.mp4"
      title="2 min. Video">Pre-recorded</a><br>
    <a href="https://www.youtube.com/embed/live_stream?channel=UCH1IeN5ZQYLfa2T7RVm72mA" 
      title="Youtube Livestream">Livestream</a>
    <p>Inspiration for Luxaeterna was provided by Bunnie Huang's masterpiece
      <a href="https://wiki.techinc.nl/Polyhedrone">Polyhedrone</a> (which I
      had the pleasure of seeing in Black Rock City in 2017), and
      <a href="https://www.solcrusher.com/">Solcrusher</a> (seen at Luminata at Green Lake Park 
      in Seattle several years ago); both are much more ambitious projects and were interesting 
      to learn about.
    </p>
    <!--<footer>-->
      <p>
       Page created with <a href="https://atom.io/">Atom</a><br>
       <p>
        (Note that Atom has been sunsetted, and is no longer being maintained. However, 
        <a href="https://pulsar-edit.dev/">Pulsar</a> is an application which is virtually identical 
        and makes a nice replacement.)
       </p>
       <a href="https://symbolicdomain.wordpress.com">Wordpress blog</a><br>
       <a href="https://github.com/foustja">GitHub repositories</a>
      </p>
    <!--</footer>-->
  </body>
</html>

