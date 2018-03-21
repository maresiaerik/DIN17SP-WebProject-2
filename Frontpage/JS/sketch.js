
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
let num = 1;
let interval;
let bunnyRight;
let leftDirection = 0;
let rightDirection = 1;
let downDirection = 2;
let upDirection = 3;


function setup()
{
  canvas = createCanvas(1100, 700);
  // canvas.parent('game-canvas');
  usrRightMovement = [loadImage('../Character_avatar/Rabbit/bunnyStaticRight.png'), loadImage('../Character_avatar/Rabbit/bunnyRunRight.png')];
  usrLeftMovement = [loadImage('../Character_avatar/Rabbit/bunnyStaticLeft.png'), loadImage('../Character_avatar/Rabbit/bunnyRunLeft.png')];
  usrUpMovement = [loadImage('../Character_avatar/Rabbit/bunnyStaticUp.png'), loadImage('../Character_avatar/Rabbit/bunnyRunUp.png')];
  usrDownMovement = [loadImage('../Character_avatar/Rabbit/bunnyStaticDown.png'), loadImage('../Character_avatar/Rabbit/bunnyRunDown.png')];
}

function draw()
{
  background(255,255,255);

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
  else
  {
    StopMovement(num);
  }
}

function StopMovement(num)
{
  switch (num)
  {
    case 0:
    background(255,255,255);
      image(usrLeftMovement[staticPos], x, y, bunnyWidth, bunnyHeight);
      break;
    case 1:
      background(255,255,255);
      image(usrRightMovement[staticPos], x, y, bunnyWidth, bunnyHeight);
      break;
    case 2:
      background(255,255,255);
      image(usrDownMovement[staticPos], x, y, bunnyWidth, bunnyHeight);
      break;
    case 3:
      background(255,255,255);
      image(usrUpMovement[staticPos], x, y, bunnyWidth, bunnyHeight);
      break;
    default:
      background(255,255,255);
      image(usrRightMovement[staticPos], x, y, bunnyWidth, bunnyHeight);
  }
}

function Run(direction, run, id)
{
  background(255, 255, 255);
  image(direction[run], x, y, bunnyWidth, bunnyHeight);
  num = id;
  interval = setInterval(function ()
  {
  Run(usrLeftMovement[staticPos], id)
}, 100);
}
