
let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

let fixed_tile_size = 64;
let tile_size = 50;

let tile_sheet = new Image();
tile_sheet.src = '../images/tiles.png';

let base_refresh_rate = 250;
let refresh_rate = 0;

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

class Tile
{
  constructor(sprite_index_x, sprite_index_y, collision)
  {
    this.sprite = {
      x : (sprite_index_x * fixed_tile_size),
      y : (sprite_index_y * fixed_tile_size)
    };

    this.collision = collision;
  }

  DrawSprite(x,y)
  {
    context.drawImage(tile_sheet,
                      this.sprite.x,
                      this.sprite.y,
                      fixed_tile_size,
                      fixed_tile_size,
                      draw_center.min.x + (x * tile_size) + main_offset.x,
                      draw_center.min.y + (y * tile_size) + main_offset.y,
                      tile_size,
                      tile_size);
  }
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

let main_offset = {
  x : 0,
  y : 0
}

function Start()
{
  LoadOnlinePlayers();

  Update();
}

function Update()
{
  if(refresh_rate >= base_refresh_rate)
  {
    online_players[main_player].SavePosition();
    LoadOnlinePlayers();

    refresh_rate = 0;
  }

  if(online_players[main_player].loaded)
  {
    SetGrid();

    PlayerInput();

    MovePlayers();
  }

  refresh_rate ++;

  setTimeout(Update, 10);
}

function SetGrid()
{
  MoveGrid();

  function MoveGrid()
  {
    for(let player in online_players)
    {
      //The main player controls the main offset to influence the grid, rather than itself
      if(player == main_player)
        online_players[player].Animate(main_offset);
      else
        online_players[player].Animate(online_players[player].offset);
    }

    DrawGrid();
  }
}

function DrawGrid()
{
  let canvas_size = {
    min : {
      x : online_players[main_player].position.x - Math.ceil((canvas.width / tile_size) / 2),
      y : online_players[main_player].position.y - Math.ceil((canvas.height / tile_size) / 2)
    },

    max : {
      x : online_players[main_player].position.x + Math.ceil((canvas.width / tile_size) / 2),
      y : online_players[main_player].position.y + Math.ceil((canvas.height / tile_size) / 2)
    }
  }

  let canvas_center = {
    x : (canvas.width / 2) - (tile_size / 2),
    y : (canvas.height / 2) - (tile_size / 2)
  }

  draw_center = {
    min : {
      x : canvas_center.x - (online_players[main_player].position.x * tile_size),
      y : canvas_center.y - (online_players[main_player].position.y * tile_size)
    },
    max : {
      x : canvas_center.x + (((background[0].length - 1) - online_players[main_player].position.x)  * tile_size),
      y : canvas_center.y + (((background.length - 1) - online_players[main_player].position.y) * tile_size)
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

  DrawLayer(egg_layer);

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
          context.drawImage(tile_sheet, 0, 0, fixed_tile_size, fixed_tile_size, (tile_size * x) + main_offset.x, (tile_size * y) + main_offset.y, tile_size, tile_size);
      }
    }
  }

  function DrawLayer(layer)
  {
    for(let y = canvas_size.min.y; y < canvas_size.max.y + 1; y++)
    {
      while( y < 0 )
        y++;

      if(y >= layer.length)
        break;

      for(let x = canvas_size.min.x; x < canvas_size.max.x + 1; x++)
      {
        while( x < 0 )
          x++;

        if(x >= layer[y].length)
          break;

        tile = layer[y][x];

        if(tile != null)
          tile.DrawSprite(x, y);
      }
    }
  }

  function DrawPlayers()
  {
    for(let player in online_players)
    {
      let new_player = online_players[player];

      if(CheckInnerBorder(new_player.position.x, new_player.position.y))
      {
        new_player.DrawSprite(new_player.sprite.x, new_player.sprite.y);
      }
    }
  }

  function CheckInnerBorder(x, y)
  {
    return( x > canvas_size.min.x &&
            x < canvas_size.max.x &&
            y > canvas_size.min.y &&
            y < canvas_size.max.y );
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
