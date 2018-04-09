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

function SetGrid()
{
  player.moving = true;

  Move();

  function Move()
  { 
    if(tile_offset.x > 0)
      tile_offset.x -= player.speed;
    if(tile_offset.x < 0)
      tile_offset.x += player.speed;

    if(tile_offset.y > 0)
      tile_offset.y -= player.speed;
    if(tile_offset.y < 0)
      tile_offset.y += player.speed;

    player.move();

    DrawGrid();

    if(tile_offset.x != 0 || tile_offset.y != 0)
    {
      setTimeout(Move, 10);
    } else {
      player.moving = false;
    }
  }
}

function DrawGrid()
{
  let draw_center = {
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

  DrawElements();

  DrawLayer(foreground);

  //DrawGrid();

  function DrawMeadow()
  {
    for(let y = -1; y <= Math.ceil(canvas.height / tile_size); y++)
    {
      for(let x = -1; x <= Math.ceil(canvas.width / tile_size); x++)
      {
        if(CheckBorder(x,y))
          context.drawImage(tile_sheet, 0, 0, fixed_tile_size, fixed_tile_size, (tile_size * x) + tile_offset.x, (tile_size * y) + tile_offset.y, tile_size, tile_size);
      }
    } 
  }

  function DrawLayer(layer)
  {
    for(let y = (draw_center.min.y / tile_size); y <= Math.ceil(canvas.height / tile_size); y++)
    {
      for(let x = (draw_center.min.x / tile_size); x <= Math.ceil(canvas.width / tile_size); x++)
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
  
  function DrawElements()
  {
    player.draw_sprite(player.sprite.x,player.sprite.y);
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