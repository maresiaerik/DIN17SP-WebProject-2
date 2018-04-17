
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

let user_id = 1;

class Player
{
  constructor()
  {
    this.moving = false;
    this.image = new Image(tile_size, tile_size);
    this.image.src = 'BunnySheet.png';

    this.position = {
      x : 4, //position
      y : 6
    }

    this.size = 32;

    this.speed = (tile_size / 20);

    this.sheet_row = 0;

    this.sprite =
    {
        x : 0,
        y : 0
    };

    this.collected_eggs = 0;

    this.DrawSprite(0,1);
  }

  DrawSprite(x, y)
  {
    this.sprite.x = x;
    this.sprite.y = y;

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

    this.Move();
  };

  MoveUp()
  {
    this.position.y--; 
    tile_offset.y = -tile_size;

    this.sheet_row = 1;

    this.Move();
  };

  MoveRight()
  {
    this.position.x++; 
    tile_offset.x = tile_size; 

    this.sheet_row = 2;

    this.Move();
  };

  MoveLeft()
  {
    this.position.x--; 
    tile_offset.x = -tile_size; 

    this.sheet_row = 3;
    
    this.Move();
  }; 

  Move()
  {
    this.moving = true;

    CheckEgg(this.position);
    
    this.SavePosition();
  }

  SavePosition()
  {
    var url = "http://localhost/DIN17SP-WebProject-2/egg_rest_api/index.php/api/user/users";
    var xhttp = new XMLHttpRequest();

    xhttp.open('PUT', url, true);

    var data = {};

    data.id = user_id;
    data.vectorX = this.position.x;
    data.vectorY = this.position.y;

    var jsonData = JSON.stringify(data);

    xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhttp.send(jsonData);
  }

  Animate()
  {
    this.sprite.y = this.sheet_row * this.size;
    
    this.step_distance = (tile_size / 1.5);

    if(tile_offset.x > 0 && tile_offset.x <  this.step_distance || 
       tile_offset.x < 0 && tile_offset.x > -this.step_distance ||
       tile_offset.y > 0 && tile_offset.y <  this.step_distance || 
       tile_offset.y < 0 && tile_offset.y > -this.step_distance)
    {
      this.sprite.x = 1 * this.size;
    } else {
      this.sprite.x = 0;
    }
  }
}

let player = new Player();

GetPosition();

function GetPosition()
{
    var url = "http://localhost/DIN17SP-WebProject-2/egg_rest_api/index.php/api/user/users";
    var xhttp = new XMLHttpRequest();

    xhttp.open('GET', url, true);

    var jsonData = '';
    var data = "";

    xhttp.onreadystatechange=function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            jsonData = JSON.parse(xhttp.responseText);

            for(x in jsonData)
            {
              if(parseInt(jsonData[x].id) == user_id)
              {
                player.position.x = jsonData[x].vectorX;
                player.position.y = jsonData[x].vectorY;

                break;
              }
            }
        }
    };

    xhttp.send();
}

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
      case w_key :    CheckCollision(player.position.x, player.position.y-1) ? null : player.MoveUp();
                          break;

      case a_left_key:
      case a_key :    CheckCollision(player.position.x-1, player.position.y) ? null : player.MoveLeft();
                          break;

      case a_down_key:
      case s_key :    CheckCollision(player.position.x, player.position.y+1) ? null : player.MoveDown();
                          break;
                          
      case a_right_key:
      case d_key:     CheckCollision(player.position.x+1, player.position.y) ? null : player.MoveRight();
                          break;

      default : null;
    }
  }
}

$(document).keyup(function(event)
{
  let index = pressed_keys.indexOf(event.which);
  pressed_keys.splice(index, 1);
});

//Add pressed key to array
//use direction of last index
//on key up: remove key from array

function CheckCollision(x, y)
{
    if(foreground[y] != null)
    {
        if(foreground[y][x] != null)
            return foreground[y][x].collision;  
    }
}

function CheckEgg(new_position)
{
  if(egg_layer[new_position.y][new_position.x] != null)
  {
    player.collected_eggs ++;

    spawned_eggs --;

    document.getElementById("egg_counter").innerHTML = "Eggs: " + player.collected_eggs;

    egg_layer[new_position.y][new_position.x] = null;
  }
}