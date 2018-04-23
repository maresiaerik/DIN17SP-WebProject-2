
let online_player_ids = [1,3];

let online_players = [];

let main_user_id = document.getElementById("user_id").value;

let main_player = null;

class Player
{
  constructor(new_user_id)
  {
    this.user_id = new_user_id;
    this.loaded = false;

    this.moving = false;

    this.image = new Image(tile_size, tile_size);
    this.image.src = 'BunnySheet.png';

    this.position = {
      x : 0, //position
      y : 0
    }

    this.walk_sequence = [];
    this.step = 0;

    this.size = 32;

    this.speed = (tile_size / 20);

    this.sheet_row = 0;

    this.sprite =
    {
        x : 0,
        y : 0
    };

    this.collected_eggs = 0;
  }

  DrawSprite(sprite_x, sprite_y)
  {
    this.sprite.x = sprite_x;
    this.sprite.y = sprite_y;

    context.drawImage(this.image,
                      this.sprite.x,
                      this.sprite.y,
                      this.size,
                      this.size,
                      draw_center.min.x + this.position.x * tile_size + (this != online_players[main_player] ? + tile_offset.x : 0), 
                      draw_center.min.y + this.position.y * tile_size + (this != online_players[main_player] ? + tile_offset.y : 0),
                      tile_size,
                      tile_size);
  }

  AddSequenceDown() 
  { 
    this.PushDirection( this.position.x, 
                        this.position.y + 1);

    tile_offset.y = tile_size;
  }
  AddSequenceUp()   
  { 
    this.PushDirection( this.position.x,
                        this.position.y - 1);

    tile_offset.y = -tile_size;
  }
  AddSequenceRight()
  { 
    this.PushDirection( this.position.x + 1, 
                        this.position.y);

    tile_offset.x = tile_size;
  }
  AddSequenceLeft() 
  { 
    this.PushDirection( this.position.x - 1, 
                        this.position.y);

    tile_offset.x = -tile_size;
  }

  PushDirection(x, y)
  {
    this.walk_sequence.push( { x, y } );

    CheckEgg( {x, y} );
    
    //online_players[main_player].SavePosition(new_position);
  }

  MoveDown()  { this.sheet_row = 0; this.Move(); }
  MoveUp()    { this.sheet_row = 1; this.Move(); }
  MoveRight() { this.sheet_row = 2; this.Move(); }
  MoveLeft()  { this.sheet_row = 3; this.Move(); }

  Move()      { this.moving = true; }

  SavePosition()
  {
    var url = "http://localhost/DIN17SP-WebProject-2/egg_rest_api/index.php/api/user/users";
    var xhttp = new XMLHttpRequest();

    xhttp.open('PUT', url, true);

    var data = {};  

    data.id = this.user_id;

    let new_position = this.AssembleArray();

    data.vector_x = new_position.x;
    data.vector_y = new_position.y;

    var jsonData = JSON.stringify(data);

    xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhttp.send(jsonData);

    console.log("Save my position");
    console.log(jsonData);
  }

  AssembleArray()
  {
    let new_position = {
      x : "",
      y : ""
    }

    //Save sequence
    for(let index in this.walk_sequence)
    {
      if(index < this.walk_sequence.length)
      {
        new_position.x += this.walk_sequence[index].x;
        new_position.y += this.walk_sequence[index].y;
      }

      if(index < this.walk_sequence.length - 1)
      {
        new_position.x += ",";
        new_position.y += ",";
      }
    }

    if(this.walk_sequence.length == 0 )
    {
      new_position.x += this.position.x;
      new_position.y += this.position.y;
    }

    return new_position;
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

InitializePlayers();

function InitializePlayers()
{
    for(let index in online_player_ids)
    { 
        online_players.push(new Player(online_player_ids[index]));  
        
        if(online_players[online_players.length - 1].user_id == document.getElementById("user_id").value)
            main_player = index;
    }
}

function LoadOnlinePlayers()
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

      for(let player in online_players)
      {
        online_players[player].step = 0;
        online_players[player].walk_sequence = [];

        for(let index in jsonData)
        {
          let new_id = parseInt(jsonData[index].id);

          if(new_id == online_players[player].user_id)
          {
            //Split the string into an array
            let new_vectors = {
              x : jsonData[index].vector_x.split(','),
              y : jsonData[index].vector_y.split(',')
            }

            let new_sequence = []; 

            if(online_players[player].loaded)
              new_sequence.push(online_players[player].position);

            for(let index in new_vectors.x)
            {
              new_sequence.push( 
              { 
                x : parseInt(new_vectors.x[index]), 
                y : parseInt(new_vectors.y[index]) 
              } );
            }

            if( new_id != online_players[main_player].user_id )
            {
              console.log(new_sequence);
              online_players[player].walk_sequence = new_sequence;
            } else {
              //Only pass the last step in the sequence to the main player

            }
                
            //Only load the main player once
            if( new_id == online_players[main_player].user_id && !online_players[main_player].loaded)
            {
              online_players[main_player].position = new_sequence[new_sequence.length - 1];
              //online_players[main_player].walk_sequence.push(new_sequence[new_sequence.length - 1]);
            }
                
            online_players[player].loaded = true;
          }
        }
      }
    }
  };

  xhttp.send();  
  console.log("Load other Positions");
}

function MovePlayers()
{
  //Check all players
  for(let new_player in online_players)
  {
    player = online_players[new_player];
    //Check if player has a sequence to walk through

    //Assign first step to position
    if(player.walk_sequence.length > 0)
    {
      //If they do, check if they've completed it
      if(player.step < player.walk_sequence.length)
      {
        //Proceed if player isn't moving
        if(!player.moving)
        {
          //Compare current position to that of the next position in the sequence
          //Use a step counter to see how far in the sequence you are

          if( player.position.x > player.walk_sequence[player.step].x)
              player.MoveLeft();
          
          if( player.position.x < player.walk_sequence[player.step].x)
              player.MoveRight();

          if( player.position.y > player.walk_sequence[player.step].y)
              player.MoveUp();
          
          if( player.position.y < player.walk_sequence[player.step].y)
              player.MoveDown();

          player.position = player.walk_sequence[player.step];
          
          player.step ++;
            
        }  
      }  
    }  
  }
}

function LogOut(id)
{

}


