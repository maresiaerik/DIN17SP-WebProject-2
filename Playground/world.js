
let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

let fixed_tile_size = 64;
let tile_size = 50;

let tile_sheet = new Image();
tile_sheet.src = 'tiles.png';

let draw_center = {
  min : {
    x : 0,
    y : 0
  },
  max : {
    x : 0,
    y : 0
  }
}

function Tile(sprite_index_x, sprite_index_y, collision)
{
  this.sprite = {
    x : (sprite_index_x * fixed_tile_size),
    y : (sprite_index_y * fixed_tile_size)
    };

  this.collision = collision;
}

let grass = new Tile(0, 0, false);
let dirt  = new Tile(1, 0, false);
let tree  = new Tile(2, 0, true);
let tTop  = new Tile(3, 0, false);  
let bush  = new Tile(4, 0, true);

// let background = [
// [grass,grass,grass,grass,grass],
// [grass,grass,grass,grass,grass],
// [grass,grass,grass,grass,grass],
// [grass,grass,grass,grass,grass],
// [grass,grass,grass,grass,grass]
// ];

// let foreground = [
// [bush,bush,bush,bush,bush],
// [bush,null,null,null,bush],
// [bush,null,null,null,bush],
// [bush,null,null,null,bush],
// [bush,bush,bush,bush,bush]
// ];


let background = [
  [grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass],
  [grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass],
  [grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass],
  [grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass],
  [grass, grass, grass, dirt, dirt, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass],
  [grass, grass, grass, dirt, dirt, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass],
  [grass, grass, grass, dirt, dirt, dirt, dirt, dirt, dirt, dirt, dirt, dirt, dirt, dirt, dirt, dirt, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass],
  [grass, grass, grass, dirt, dirt, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, dirt, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass],
  [grass, grass, grass, dirt, dirt, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, dirt, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass],
  [grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, dirt, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass],
  [grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, dirt, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass],
  [grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, dirt, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass],
  [grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, dirt, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass],
  [grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, dirt, dirt, dirt, dirt, dirt, dirt, dirt, dirt, dirt, dirt, dirt, dirt, grass, grass, grass],
  [grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, dirt, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, dirt, grass, grass, grass],
  [grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, dirt, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, dirt, grass, grass, grass],
  [grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, dirt, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, dirt, grass, grass, grass],
  [grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, dirt, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, dirt, grass, grass, grass],
  [grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, dirt, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, dirt, grass, grass, grass],
  [grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, dirt, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, dirt, grass, grass, grass],
  [grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, dirt, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, dirt, grass, grass, grass],
  [grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, dirt, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, dirt, grass, grass, grass],
  [grass, dirt,  dirt,  dirt,  dirt,  dirt,  grass, grass, grass, grass, grass, grass, grass, grass, grass, dirt,  grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, dirt,  grass, grass, grass],
  [grass, dirt,  dirt,  dirt,  dirt,  dirt,  dirt,  dirt,  dirt,  dirt,  dirt,  dirt,  dirt,  dirt,  dirt,  dirt,  dirt,  dirt,  dirt,  dirt,  dirt,  dirt,  dirt,  dirt,  dirt,  dirt,  dirt,  grass, grass, grass],
  [grass, dirt,  dirt,  dirt,  dirt,  dirt,  grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass],
  [grass, dirt,  dirt,  dirt,  dirt,  dirt,  grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass],
  [grass, dirt,  dirt,  dirt,  dirt,  dirt,  grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass],
  [grass, dirt,  dirt,  dirt,  dirt,  dirt,  grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass],
  [grass, dirt,  dirt,  dirt,  dirt,  dirt,  grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass],
  [grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass]
  ];

let foreground = [
    [bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush],
    [bush, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, bush, null, null, null, null, null, null, null, null, null, null, bush],
    [bush, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, bush],
    [bush, null, bush, bush, bush, bush, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, bush, null, bush],
    [bush, null, bush, null, null, bush, tTop, tTop, tTop, tTop, tTop, tTop, tTop, tTop, tTop, tTop, null, null, null, null, null, null, null, tTop, null, null, null, null, null, bush],
    [bush, null, bush, null, null, bush, tree, tree, tree, tree, tree, tree, tree, tree, tree, tree, null, null, null, null, null, null, null, tree, null, null, null, null, null, bush],
    [bush, null, bush, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, bush],
    [bush, null, bush, null, null, bush, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, bush],
    [bush, null, bush, null, null, bush, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, bush],
    [bush, null, bush, bush, bush, bush, null, null, null, null, null, null, null, null, null, null, null, null, null, tTop, null, null, null, null, null, null, null, null, null, bush],
    [bush, null, null, null, null, null, null, null, null, null, null, bush, null, null, null, null, null, null, null, tree, null, null, null, null, null, null, null, null, null, bush],
    [bush, null, null, null, null, null, null, tTop, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, bush, null, bush],
    [bush, null, null, null, null, null, null, tree, null, null, bush, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, bush],
    [bush, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, bush],
    [bush, null, null, null, null, null, null, null, null, null, null, bush, null, null, null, null, null, null, null, null, tTop, tTop, tTop, null, null, null, null, null, null, bush],
    [bush, null, null, bush, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tree, tree, tree, null, null, null, null, null, null, bush],
    [bush, null, null, null, null, null, null, null, null, null, null, null, null, null, tTop, null, null, null, null, null, null, null, null, null, null, null, null, null, null, bush],
    [bush, null, null, null, null, null, null, null, null, null, null, null, null, null, tree, null, null, null, null, null, null, null, null, null, null, null, null, tTop, null, bush],
    [bush, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tree, null, bush],
    [bush, tTop, null, null, null, null, tTop, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, bush],
    [bush, tree, null, null, null, null, tree, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, bush],
    [bush, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, bush],
    [bush, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, bush],
    [bush, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, bush],
    [bush, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tTop, null, null, null, null, null, null, null, null, bush],
    [bush, null, null, null, null, null, null, null, null, null, tTop, null, null, null, null, null, null, null, null, null, tree, null, null, null, null, null, tTop, null, null, bush],
    [bush, null, null, null, null, null, null, null, null, null, tree, null, null, null, bush, null, null, null, null, bush, null, null, null, null, null, null, tree, null, null, bush],
    [bush, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, bush],
    [bush, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, bush],
    [bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush, bush],
  ];


let canvas_center = {
  x : (canvas.width / 2) - (tile_size / 2),
  y : (canvas.height / 2) - (tile_size / 2)
}

let tile_offset = {
  x : 0,
  y : 0
}

function Start()
{

  
  Update();
}

function Update()
{
  GetPosition();

  SetGrid();

  Move();

  setTimeout(Update, 10);
}

function SetGrid()
{
  MoveGrid();

  function MoveGrid()
  { 
    if(tile_offset.x > 0)
      tile_offset.x -= player.speed;
    if(tile_offset.x < 0)
      tile_offset.x += player.speed;

    if(tile_offset.y > 0)
      tile_offset.y -= player.speed;
    if(tile_offset.y < 0)
      tile_offset.y += player.speed;

    player.Animate();

    DrawGrid();

    if(tile_offset.x == 0 && tile_offset.y == 0)
      player.moving = false; 
  }
}

function DrawGrid()
{
  draw_center = {
    min : {
      x : canvas_center.x - (player.position.x * tile_size),
      y : canvas_center.y - (player.position.y * tile_size)
    },
    max : {
      x : canvas_center.x + (((background[0].length - 1) - player.position.x)  * tile_size),
      y : canvas_center.y + (((background.length - 1) - player.position.y) * tile_size)
    }
  }

  function CheckBorder(x, y)
  { 
    return (y * tile_size < draw_center.min.y || 
            x * tile_size < draw_center.min.x || 
            y * tile_size > draw_center.max.y || 
            x * tile_size > draw_center.max.x)
  }

  let tile = null;

  context.clearRect(0, 0, canvas.width, canvas.height);

  var egg_position = 0;

  DrawMeadow();

  DrawLayer(background);

  DrawEggs();

  DrawPlayers();

  DrawLayer(foreground);

  //DrawGrid();

  function DrawMeadow()
  {
    for(let y = -1; y <= Math.ceil(canvas.height / tile_size) + 1; y++)
    {
      for(let x = -1; x <= Math.ceil(canvas.width / tile_size) + 1; x++)
      {
        if(CheckBorder(x,y))
          context.drawImage(tile_sheet, 0, 0, fixed_tile_size, fixed_tile_size, (tile_size * x) + tile_offset.x, (tile_size * y) + tile_offset.y, tile_size, tile_size);
      }
    } 
  }

  function DrawLayer(layer)
  {
    for(let y = (draw_center.min.y / tile_size); y <= Math.ceil(canvas.height / tile_size) + 1; y++)
    {
      for(let x = (draw_center.min.x / tile_size); x <= Math.ceil(canvas.width / tile_size) + 1; x++)
      {
        if(CheckBorder(x,y))
          break;

          let fixed_start = {
            x : x - (draw_center.min.x / tile_size),
            y : y - (draw_center.min.y / tile_size)
          }

          tile = layer[fixed_start.y][fixed_start.x];

          if(tile != null)
            DrawTile(fixed_start.x,fixed_start.y);
      } 
    }
  }

  function DrawTile(x,y)
  {
    context.drawImage(tile_sheet, 
                      tile.sprite.x, 
                      tile.sprite.y, 
                      fixed_tile_size, 
                      fixed_tile_size, 
                      draw_center.min.x + (x * tile_size) + tile_offset.x, 
                      draw_center.min.y + (y * tile_size) + tile_offset.y, 
                      tile_size, 
                      tile_size);
  }

  function DrawEggs()
  {
    for(let y = (draw_center.min.y / tile_size); y <= Math.ceil(canvas.height / tile_size) + 1; y++)
    {
      for(let x = (draw_center.min.x / tile_size); x <= Math.ceil(canvas.width / tile_size) + 1; x++)
      {
        if(CheckBorder(x,y))
          break;

          let fixed_start = {
            x : x - (draw_center.min.x / tile_size),
            y : y - (draw_center.min.y / tile_size)
          }

          egg = egg_layer[fixed_start.y][fixed_start.x];

          if(egg != null)
            egg.DrawSprite(fixed_start.x, fixed_start.y);
      } 
    }
  }


  function DrawPlayers()
  {
    player.DrawSprite(player.sprite.x,player.sprite.y);
  }

  function DrawGrid()
  {
    for(let y = 0; y <= Math.ceil(canvas.height / tile_size); y++)
    {
      for(let x = 0; x <= Math.ceil(canvas.width / tile_size); x++)
      {
        DrawBorder(0, 0, tile_size * x, tile_size * y);
      }
    } 
  }
} 

function DrawBorder(x, y, w, h)
{
  context.strokeStyle = '#f00';  // some color/style
  context.lineWidth = 1;         // thickness
  context.strokeRect(x, y, w, h);
}