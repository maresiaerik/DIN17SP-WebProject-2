

let tileSize = 32;
let upKeyCode = 87;
let leftKeyCode = 65;
let downKeyCode = 83;
let rightKeyCode = 68;

let playerSpriteX = 0;
let playerSpriteY = (2 * tileSize);




//Define object Player
let player =
{
  x : 3, // default coordinates on grid
  y : 6,
  movement:
  {
    staticRight:
    {
      x : (0 * tileSize),
      y : (2 * tileSize)
    },
    runRight:
    {
      x : (1 * tileSize),
      y : (2 * tileSize)
    },
    staticLeft:
    {
      x : (0 * tileSize),
      y : (3 * tileSize)
    },
    runLeft:
    {
      x : (1 * tileSize),
      y : (3 * tileSize)
    },
    staticDown:
    {
      x : (1 * tileSize),
      y : (0 * tileSize)
    },
    runDown:
    {
      x : (0 * tileSize),
      y : (0 * tileSize)
    },
    staticUp:
    {
      x : (0 * tileSize),
      y : (1 * tileSize)
    },
    runUp:
    {
      x : (1 * tileSize),
      y : (1 * tileSize)
    }
  },
  moving: false,
  image: new Image(tile_size, tile_size)
};

player.image.src = 'BunnySheet.png';

let keys = [upKeyCode, leftKeyCode, downKeyCode, rightKeyCode];

$(document).keydown(function(event)
{
    let keypressed = event.which
    if (keys.includes(keypressed) && !player.moving)
    {
      switch (keypressed)
      {
          case upKeyCode:   CheckTile(player.x, player.y-1) ? null : (player.y--, tile_offset.y = -tile_size, SetGrid());
                            playerSpriteX = player.movement.runUp.x;
                            playerSpriteY = player.movement.runUp.y;
                            break;

          case leftKeyCode :  CheckTile(player.x-1, player.y) ? null : (player.x--, tile_offset.x = -tile_size, SetGrid());
                              playerSpriteX = player.movement.runLeft.x;
                              playerSpriteY = player.movement.runLeft.y;
                              break;

          case downKeyCode :  CheckTile(player.x, player.y+1) ? null : (player.y++, tile_offset.y = tile_size, SetGrid());
                              playerSpriteX = player.movement.runDown.x;
                              playerSpriteY = player.movement.runDown.y;
                              break;

          case rightKeyCode:  CheckTile(player.x+1, player.y) ? null : (player.x++, tile_offset.x = tile_size, SetGrid());
                              playerSpriteX = player.movement.runRight.x;
                              playerSpriteY = player.movement.runRight.y;
                              break;
          default : null;
      }
  }
});

$(document).keyup(function(event)
{
  let keyup = event.which;
  switch (keyup)
  {
    case upKeyCode:     playerSpriteX = player.movement.staticUp.x;
                        playerSpriteY = player.movement.staticUp.y;
                        break;
    case leftKeyCode:   playerSpriteX = player.movement.staticLeft.x;
                        playerSpriteY = player.movement.staticLeft.y;
                        break;
    case downKeyCode:   playerSpriteX = player.movement.staticDown.x;
                        playerSpriteY = player.movement.staticDown.y;
                        break;
    case rightKeyCode:  playerSpriteX = player.movement.staticRight.x;
                        playerSpriteY = player.movement.staticRight.y;
                        break;
    default:
                        playerSpriteX = player.movement.staticRight.x;
                        playerSpriteY = player.movement.staticRight.y;

  }
    DrawGrid();
});



function CheckTile(x, y)
{
    if(foreground[y] != null)
    {
        if(foreground[y][x] != null)
            return foreground[y][x].collision;  
    }
}