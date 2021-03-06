
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

let blop = document.getElementById('blop');
blop.volume = 0.2;

// let woosh = document.getElementById('woosh');

let grassAudio = document.getElementById('grassA');
grassAudio.volume = 0.5;

let gravel = document.getElementById('gravel');
gravel.volume = 0.2;

let keys = [w_key, a_key, s_key, d_key, 
            a_up_key, a_left_key, a_down_key, a_right_key];

$(document).keydown(function(event)
{
  //Push key to array if the last index key is not the same
  //Prevents "keydown" repeat
  if(pressed_keys[pressed_keys.length-1] != event.which)
  {
    pressed_keys.push(event.which);
  }
});

//Add pressed key to array
//use direction of last index
function PlayerInput()
{
  //console.log("Move");
  let active_key = pressed_keys[pressed_keys.length - 1];
/*
  if (background[online_players[main_player].position.y][online_players[main_player].position.x] == grass)
  {
    grassAudio.play();
  }
  if (background[online_players[main_player].position.y][online_players[main_player].position.x] == dirt)
  {
    gravel.play();
  }
*/

  //Don't take any inputs when ... ...
  if (keys.includes(active_key) && !online_players[main_player].moving)
  {
    switch (active_key)
    {
      case a_up_key:
      case w_key :    CheckCollision( online_players[main_player].position.x, 
                                      online_players[main_player].position.y-1) ? null : online_players[main_player].AddSequenceUp();         
                      break;

      case a_left_key:
      case a_key :    CheckCollision( online_players[main_player].position.x-1, 
                                      online_players[main_player].position.y) ? null : online_players[main_player].AddSequenceLeft();
                      break;

      case a_down_key:
      case s_key :    CheckCollision( online_players[main_player].position.x, 
                                      online_players[main_player].position.y+1) ? null : online_players[main_player].AddSequenceDown();
                      break;

      case a_right_key:
      case d_key:     CheckCollision( online_players[main_player].position.x+1, 
                                      online_players[main_player].position.y) ? null : online_players[main_player].AddSequenceRight();
                      break;

      default : null;
    }
  }
}

function CheckCollision(x, y)
{
    if(foreground[y] != null)
    {
        if(foreground[y][x] != null)
          return foreground[y][x].collision;          
    }
}

//on key up: remove key from array
$(document).keyup(function(event)
{
  let index = pressed_keys.indexOf(event.which);
  pressed_keys.splice(index, 1);
});

function SetScore(bronze, silver, gold)
{
  online_players[main_player].collected_eggs[0] = bronze;
  online_players[main_player].collected_eggs[1] = silver;
  online_players[main_player].collected_eggs[2] = gold;

  SetScoreHTML();
}

function CheckEgg(new_position, this_id)
{
  let new_egg = egg_layer[new_position.y][new_position.x];

  if(new_egg != null && new_egg.active)
  {
    new_egg.active = false;

    if(this_id == session_id)
    {
      online_players[main_player].collected_eggs[new_egg.type] ++;
    //Create a new egg save
    UpdateEgg(new_egg);
    
    SetScoreHTML();

    blop.play();
    } 
  }
}

function SetScoreHTML()
{
  document.getElementById("gold_egg_counter").innerHTML   = online_players[main_player].collected_eggs[2];
  document.getElementById("silver_egg_counter").innerHTML = online_players[main_player].collected_eggs[1];
  document.getElementById("bronze_egg_counter").innerHTML = online_players[main_player].collected_eggs[0];
}