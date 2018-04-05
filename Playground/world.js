var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var fixed_tile_size = 64;
var tile_size = 50;

var tile_sheet = new Image();
tile_sheet.src = 'tiles.png';

egg = new Image(tile_size, tile_size);
egg.src = 'https://jacobl14.files.wordpress.com/2011/05/yoshiegg.png';

function Tile(sprite_index_x, sprite_index_y, collision)
{
  this.sprite = {
    x : (sprite_index_x * fixed_tile_size),
    y : (sprite_index_y * fixed_tile_size)
    };

  this.collision = collision;
}

let fixed_start = {
  x : 0,
  y : 0
}

let grass = new Tile(0, 0, false);
let dirt  = new Tile(1, 0, false);
let tree  = new Tile(2, 0, true);
let ttop  = new Tile(3, 0, false);  
let bush  = new Tile(4, 0, true);

let test = false;

let background = [
    [grass,grass,grass,grass,grass,grass,grass,grass,grass],
    [grass,grass,grass,grass,grass,grass,grass,grass,grass],
    [grass,grass,grass,grass,grass,grass,grass,grass,grass],
    [grass,grass,grass,grass,grass,grass,grass,grass,grass],
    [grass,grass,grass,grass,grass,grass,grass,grass,grass],
    [grass,grass,grass,grass,grass,grass,grass,grass,grass],
    [grass,grass,grass,grass,grass,grass,grass,grass,grass],
    [grass,grass,grass,grass,grass,grass,grass,grass,grass],
    [grass,grass,grass,grass,grass,grass,grass,grass,grass]
  ];

let foreground = [
    [bush,bush,bush,bush,bush,bush,bush,bush,bush],
    [null,null,null,null,null,null,null,null,bush],
    [bush,null,null,null,null,null,null,null,bush],
    [bush,null,null,null,null,null,null,null,bush],
    [bush,null,null,ttop,ttop,null,null,null,bush],
    [bush,null,null,tree,tree,null,null,null,bush],
    [bush,null,null,null,null,null,null,null,bush],
    [bush,null,null,null,null,null,null,null,bush],
    [bush,bush,bush,bush,bush,bush,bush,bush,bush]
  ];


let canvas_center = {
  x : (canvas.width / 2) - (tile_size / 2),
  y : (canvas.height / 2) - (tile_size / 2)
}

let tile_offset = {
  x : 0,
  y : 0
}

function SetGrid()
{
  player.moving = true;

  ChangeOffset();

  function ChangeOffset()
  {
    let speed = 5;

    if(tile_offset.x > 0)
      tile_offset.x -= speed;
    if(tile_offset.x < 0)
      tile_offset.x += speed;

    if(tile_offset.y > 0)
      tile_offset.y -= speed;
    if(tile_offset.y < 0)
      tile_offset.y += speed;

    DrawGrid();

    if(tile_offset.x != 0 || tile_offset.y != 0)
      setTimeout(ChangeOffset, 10);
    else
      player.moving = false;
  }
}

function DrawGrid()
{
  let draw_center = {
    min : {
      x : canvas_center.x - (player.x * tile_size),
      y : canvas_center.y - (player.y * tile_size)
    },
    max : {
      x : canvas_center.x + (((background[0].length - 1) - player.x)  * tile_size),
      y : canvas_center.y + (((background.length - 1) - player.y) * tile_size)
    }
  }

  function CheckBorder(x, y)
  {
    return (y * tile_size <= draw_center.min.y || 
            x * tile_size <= draw_center.min.x || 
            y * tile_size >= draw_center.max.y || 
            x * tile_size >= draw_center.max.x)
  }

  let tile = null;

  context.clearRect(0, 0, canvas.width, canvas.height);

  var egg_position = 0;

  let new_position = 100 + tile_offset;

  DrawMeadow();

  DrawBackground();

  DrawElements();

  DrawForeground();

  function DrawMeadow()
  {
    for(let y = -1; y <= Math.ceil(canvas.height / tile_size); y++)
    {
      for(let x = -1; x <= Math.ceil(canvas.width / tile_size); x++)
      {
        if(CheckBorder(x,y))
          context.drawImage(tile_sheet, 0, 0, fixed_tile_size, fixed_tile_size, (tile_size * x) + tile_offset.x, (tile_size * y) + tile_offset.y, tile_size, tile_size);

        //DrawBorder(0, 0, tile_size * x, tile_size * y);
      }
    } 
  }

  function DrawBackground()
  {
    for(let y = 0; y < background.length; y++)
    {
      for(let x = 0; x < background[y].length; x++)
      {
        tile = background[y][x];

        DrawTile(x,y);
      }
    } 
  }

  function DrawElements()
  {
    context.drawImage(egg, canvas_center.x, canvas_center.y, egg.width, egg.height);
  }

  function DrawForeground()
  {
    for(let y = 0; y < foreground.length; y++)
    {
      for(let x = 0; x < foreground[y].length; x++)
      {
        tile = foreground[y][x];

        if(tile != null)
          DrawTile(x,y);
      }
    }
  }

  function DrawTile(x,y)
  {
    context.drawImage(tile_sheet, tile.sprite.x, tile.sprite.y, fixed_tile_size, fixed_tile_size, draw_center.min.x + (x * tile_size) + tile_offset.x, draw_center.min.y + (y * tile_size) + tile_offset.y, tile_size, tile_size);
  }
/*
  for(let y = 0; y <= Math.ceil(canvas.height / tile_size); y++)
  {
    for(let x = 0; x <= Math.ceil(canvas.width / tile_size); x++)
    {
      if(CheckBorder(x,y))
      {
        context.drawImage(tile_sheet, 0, 0, fixed_tile_size, fixed_tile_size, tile_size * x, tile_size * y, tile_size, tile_size);
      } else {
        for(let layer = 0; layer < grid.length; layer++)
        {
          fixed_start.x = x - (draw_center.min.x / tile_size);
          fixed_start.y = y - (draw_center.min.y / tile_size);
          
          let fixed_start = {
            x : x - (draw_center.min.x / tile_size),
            y : y - (draw_center.min.y / tile_size)
          }
        
          tile = grid[layer][fixed_start.y][fixed_start.x];

          if(tile == null)
            break;

            if(layer == 1)
              context.drawImage(egg, canvas_center.x, canvas_center.y, egg.width, egg.height);
          

          context.drawImage(tile_sheet, tile.sprite.x, tile.sprite.y, fixed_tile_size, fixed_tile_size, draw_center.min.x + (fixed_start.x * tile_size), draw_center.min.y + (fixed_start.y * tile_size), tile_size, tile_size);
        }
      }
      DrawBorder(0, 0, tile_size * x, tile_size * y);
    }
  } 
  */
} 

function DrawBorder(x, y, w, h)
{
  context.strokeStyle = '#f00';  // some color/style
  context.lineWidth = 1;         // thickness
  context.strokeRect(x, y, w, h);
}