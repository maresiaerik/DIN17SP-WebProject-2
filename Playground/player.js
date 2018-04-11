

let w_key = 87;
let a_key = 65;
let s_key = 83;
let d_key = 68;

let a_up_key = 38;
let a_left_key = 37;
let a_down_key = 40;
let a_right_key = 39;

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

    this.DrawSprite(0,1);
  }

  DrawSprite(x, y)
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

  MoveDown()
  {
    this.position.y++; 
    tile_offset.y = tile_size; 

    this.sheet_row = 0;

    SetGrid();
  };

  MoveUp()
  {
      this.position.y--; 
      tile_offset.y = -tile_size;

      this.sheet_row = 1;

      SetGrid();
  };

  MoveRight()
  {
    this.position.x++; 
    tile_offset.x = tile_size; 

    this.sheet_row = 2;

    SetGrid();
  };

  MoveLeft()
  {
    this.position.x--; 
    tile_offset.x = -tile_size; 

    this.sheet_row = 3;
    
    SetGrid();
  }; 

  Move()
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
}

let player = new Player();

let keys = [w_key, a_key, s_key, d_key, 
            a_up_key, a_left_key, a_down_key, a_right_key];

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
      case a_up_key:
      case w_key :    CheckTile(player.position.x, player.position.y-1) ? null : player.MoveUp();
                          break;

      case a_left_key:
      case a_key :  CheckTile(player.position.x-1, player.position.y) ? null : player.MoveLeft();
                          break;

      case a_down_key:
      case s_key :  CheckTile(player.position.x, player.position.y+1) ? null : player.MoveDown();
                          break;
                          
      case a_right_key:
      case d_key:  CheckTile(player.position.x+1, player.position.y) ? null : player.MoveRight();
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