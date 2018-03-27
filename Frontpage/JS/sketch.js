
// All global variables

let canvas;
let x = 550 ;
let y = 350;
let bunnyHeight = 50;
let bunnyWidth  = 50;
let usrRightMovement;
let usrLeftMovement;
let usrUpMovement;
let usrDownMovement;
let keyLeft  = '65';
let keyRight = '68';
let keyUp    = '87';
let keyDown  = '83';
let staticPos = 0;
let run = 1;
let directionOfRun = 1;
let interval;
let bunnyRight;
let leftDirection = 0;
let rightDirection = 1;
let downDirection = 2;
let upDirection = 3;

//Setup done to start the canvas
function setup()
{
  canvas = createCanvas(800, 600);
  canvas.parent('game-canvas');
  usrRightMovement = [loadImage('../Character_avatar/Rabbit/bunnyStaticRight.png'), loadImage('../Character_avatar/Rabbit/bunnyRunRight.png')];
  usrLeftMovement = [loadImage('../Character_avatar/Rabbit/bunnyStaticLeft.png'), loadImage('../Character_avatar/Rabbit/bunnyRunLeft.png')];
  usrUpMovement = [loadImage('../Character_avatar/Rabbit/bunnyStaticUp.png'), loadImage('../Character_avatar/Rabbit/bunnyRunUp.png')];
  usrDownMovement = [loadImage('../Character_avatar/Rabbit/bunnyStaticDown.png'), loadImage('../Character_avatar/Rabbit/bunnyRunDown.png')];
}
// Loop that draws to the canvas
function draw()
{
  //Drawing a blank background clears previous drawings
  background(255,255,255);

// Checks if key is pressed, cheks what key it is and runs the
// Run function with the parameters to define direction

  if(keyIsPressed == true)
  {
    if (keyIsDown(keyLeft))
    {
      Run(usrLeftMovement, run, leftDirection);
    }
    if (keyIsDown(keyRight))
    {
      Run(usrRightMovement, run, rightDirection);
    }
    if (keyIsDown(keyDown))
    {
      Run(usrDownMovement,run, downDirection);
    }
    if (keyIsDown(keyUp))
    {
      Run(usrUpMovement,run, upDirection);
    }
  }
  // Movement stopped, checks what was the last direction
  else
  {
    StopMovement(directionOfRun);
  }
}
// Assigns the appropriate static position
function StopMovement(directionOfRun)
{
  switch (directionOfRun)
  {
    case leftDirection:
    background(255,255,255);
      image(usrLeftMovement[staticPos], x, y, bunnyWidth, bunnyHeight);
      break;
    case rightDirection:
      background(255,255,255);
      image(usrRightMovement[staticPos], x, y, bunnyWidth, bunnyHeight);
      break;
    case downDirection:
      background(255,255,255);
      image(usrDownMovement[staticPos], x, y, bunnyWidth, bunnyHeight);
      break;
    case upDirection:
      background(255,255,255);
      image(usrUpMovement[staticPos], x, y, bunnyWidth, bunnyHeight);
      break;
    default:
      background(255,255,255);
      image(usrRightMovement[staticPos], x, y, bunnyWidth, bunnyHeight);
  }
}
// Makes the character run in given direction
function Run(direction, run, id)
{
  background(255, 255, 255);
  image(direction[run], x, y, bunnyWidth, bunnyHeight);
  directionOfRun = id;
//   interval = setInterval(function ()
//   {
//   Run(usrLeftMovement[staticPos], id)
// }, 100);
}
