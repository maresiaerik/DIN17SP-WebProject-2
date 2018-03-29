var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var fixed_tile_size = 64;

var tile_size = 50;

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
let bush  = new Tile(4, 0, true);

var grid = [
  [
    [grass,grass,grass,grass,grass,grass,grass,grass,grass],
    [grass,grass,grass,grass,grass,grass,grass,grass,grass],
    [grass,grass,grass,grass,grass,grass,grass,grass,grass],
    [grass,grass,grass,grass,grass,grass,grass,grass,grass],
    [grass,grass,grass,grass,grass,grass,grass,grass,grass],
    [grass,grass,grass,grass,grass,grass,grass,grass,grass],
    [grass,grass,grass,grass,grass,grass,grass,grass,grass],
    [grass,grass,grass,grass,grass,grass,grass,grass,grass],
    [grass,grass,grass,grass,grass,grass,grass,grass,grass]
  ],
  [
    [bush,bush,bush,bush,bush,bush,bush,bush,bush],
    [bush,null,null,null,null,null,null,null,bush],
    [bush,null,null,null,null,null,null,null,bush],
    [bush,null,null,null,null,null,null,null,bush],
    [bush,null,null,null,null,null,null,null,bush],
    [bush,null,null,null,null,null,null,null,bush],
    [bush,null,null,null,null,null,null,null,bush],
    [bush,null,null,null,null,null,null,null,bush],
    [bush,bush,bush,bush,bush,bush,bush,bush,bush]
  ]
]

let canvas_center = {
  x : (canvas.width / 2) - (tile_size / 2),
  y : (canvas.height / 2) - (tile_size / 2)
}

function DrawGrid()
{
  context.clearRect(0, 0, canvas.width, canvas.height);

  let draw_center = {
    min : {
      x : canvas_center.x - (player.x * tile_size),
      y : canvas_center.y - (player.y * tile_size)
    },
    max : {
      x : canvas_center.x + (((grid[0][0].length - 1) - player.x)  * tile_size),
      y : canvas_center.y + (((grid[0].length - 1) - player.y) * tile_size)
    }
  }

  function CheckBorder(x, y)
  {
    return (y * tile_size < draw_center.min.y || 
            x * tile_size < draw_center.min.x || 
            y * tile_size > draw_center.max.y || 
            x * tile_size > draw_center.max.x)
  }
  
  let tile = grid[1][0][0];

  var tile_sheet = new Image(tile_size,tile_size);
  tile_sheet.src = 'https://mdn.mozillademos.org/files/11641/tiles.png';

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

          context.drawImage(tile_sheet, tile.sprite.x, tile.sprite.y, fixed_tile_size, fixed_tile_size, draw_center.min.x + (fixed_start.x * tile_size), draw_center.min.y + (fixed_start.y * tile_size), tile_size, tile_size);
        }
      }

      DrawBorder(0, 0, tile_size * x, tile_size * y);
    }
  }

  egg = new Image(tile_size, tile_size);
  egg.src = 'https://jacobl14.files.wordpress.com/2011/05/yoshiegg.png';

  var egg_position = 0;

  context.drawImage(egg, canvas_center.x, canvas_center.y, egg.width, egg.height);

  //setTimeout( "DrawTest()", 10000 ) ;
}

function DrawBorder(x, y, w, h)
{
  context.strokeStyle = '#f00';  // some color/style
  context.lineWidth = 1;         // thickness
  context.strokeRect(x, y, w, h);
}