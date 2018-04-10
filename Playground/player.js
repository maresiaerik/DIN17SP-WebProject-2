

let upKeyCode = 87;
let leftKeyCode = 65;
let downKeyCode = 83;
let rightKeyCode = 68;

let pressed_keys = [];
let active_key = 0;

class Player
{
  constructor()
  {
    this.moving = false;
    this.image = new Image(tile_size, tile_size);

    this.position = {
      x : 4, //position
      y : 6
    }

    this.size = 32;

    this.speed = (tile_size / 10);

    this.sheet_row = 0;

    this.sprite =
    {
        x : 0,
        y : 0
    };

    this.draw_sprite(0,1);
  }

  draw_sprite(x, y)
  {
    this.sprite.x = x * this.size;
    this.sprite.y = y * this.size;

    this.image.src = 'BunnySheet.png';

    context.drawImage(this.image,
                      this.sprite.x,
                      this.sprite.y,
                      this.size,
                      this.size,
                      canvas_center.x,
                      canvas_center.y,
                      tile_size,
                      tile_size);
  }

  move_down()
  {
    this.position.y++; 
    tile_offset.y = tile_size; 

    this.sheet_row = 0;

    SetGrid();
  };

  move_up()
  {
      this.position.y--; 
      tile_offset.y = -tile_size;

      this.sheet_row = 1;

      SetGrid();
  };

  move_right()
  {
    this.position.x++; 
    tile_offset.x = tile_size; 

    this.sheet_row = 2;

    SetGrid();
  };

  move_left()
  {
    this.position.x--; 
    tile_offset.x = -tile_size; 

    this.sheet_row = 3;

    SetGrid();
  }; 

  move()
  {
    this.sprite.y = this.sheet_row;
    
    this.step_distance = (tile_size / 1.5);

    if(tile_offset.x > 0 && tile_offset.x <  this.step_distance || 
       tile_offset.x < 0 && tile_offset.x > -this.step_distance ||
       tile_offset.y > 0 && tile_offset.y <  this.step_distance || 
       tile_offset.y < 0 && tile_offset.y > -this.step_distance)
    {
      this.sprite.x = 1;
    } else {
      this.sprite.x = 0;
    }
  }
};

let player = new Player();

let keys = [upKeyCode, leftKeyCode, downKeyCode, rightKeyCode];

$(document).keydown(function(event)
{
  //Push key to array if the last index key is not the same
  //Prevents "keydown" repeat
  if(pressed_keys[pressed_keys.length-1] != event.which)
  {
    pressed_keys.push(event.which);

    Move(); 
  }  
});

function Move()
{
  let active_key = pressed_keys[pressed_keys.length - 1];

  if (keys.includes(active_key) && !player.moving)
  {
    switch (active_key)
    {
      case upKeyCode:     CheckTile(player.position.x, player.position.y-1) ? null : player.move_up();
                          break;

      case leftKeyCode :  CheckTile(player.position.x-1, player.position.y) ? null : player.move_left();
                          break;

      case downKeyCode :  CheckTile(player.position.x, player.position.y+1) ? null : player.move_down();
                          break;

      case rightKeyCode:  CheckTile(player.position.x+1, player.position.y) ? null : player.move_right();
                          break;

      default : null;
    }
  }

  if(pressed_keys.length > 0)
    setTimeout(Move, 10);
}

$(document).keyup(function(event)
{
  let index = pressed_keys.indexOf(event.which);
  pressed_keys.splice(index, 1);
});

//Add pressed key to array
//use direction of last index
//on key up: remove key from array

function CheckTile(x, y)
{
    if(foreground[y] != null)
    {
        if(foreground[y][x] != null)
            return foreground[y][x].collision;  
    }
}