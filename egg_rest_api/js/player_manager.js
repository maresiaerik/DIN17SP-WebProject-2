let player_pool = [];

let online_players = [];

// let main_user_id = document.getElementById("user_id").value;
let main_user_id = session_id;
// console.log(main_user_id);
let main_player = 0;

class Player
{
  constructor(new_user_id)
  {
    this.active = false;

    this.user_id = new_user_id;
    this.loaded = false;

    this.moving = false;

    this.image = new Image(tile_size, tile_size);
    this.image.src = base_url + 'images/BunnySheet.png';

    this.position = {
      x : 0,
      y : 0
    }

    this.offset = {
      x : 0,
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

    this.collected_eggs = [0,0,0];
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
                      draw_center.min.x + this.position.x * tile_size + (this != online_players[main_player] ? + this.offset.x + main_offset.x : 0),
                      draw_center.min.y + this.position.y * tile_size + (this != online_players[main_player] ? + this.offset.y + main_offset.y: 0),
                      tile_size,
                      tile_size);
  }

  AddSequenceDown()
  {
    this.PushDirection( this.position.x,
                        this.position.y + 1);

    main_offset.y = tile_size;
  }
  AddSequenceUp()
  {
    this.PushDirection( this.position.x,
                        this.position.y - 1);

    main_offset.y = -tile_size;
  }
  AddSequenceRight()
  {
    this.PushDirection( this.position.x + 1,
                        this.position.y);

    main_offset.x = tile_size;
  }
  AddSequenceLeft()
  {
    this.PushDirection( this.position.x - 1,
                        this.position.y);

    main_offset.x = -tile_size;
  }

  PushDirection(x, y)
  {
    this.walk_sequence.push( { x, y } );

    //CheckEgg( {x, y} );
  }

  MoveDown()  { this.sheet_row = 0; this.offset.y = -tile_size; this.Move(); }
  MoveUp()    { this.sheet_row = 1; this.offset.y =  tile_size; this.Move(); }
  MoveRight() { this.sheet_row = 2; this.offset.x = -tile_size; this.Move(); }
  MoveLeft()  { this.sheet_row = 3; this.offset.x =  tile_size; this.Move(); }

  Move()      { this.moving = true; CheckEgg( this.walk_sequence[this.step], this.user_id );}

  UpdateUser(online_status)
  {
    var url =  base_url + "index.php/api/user/users";
    var xhttp = new XMLHttpRequest();

    xhttp.open('PUT', url, true);

    var data = {};

    data.id = this.user_id;
    data.online = online_status;

    let new_position = this.AssembleArray();

    data.vector_x = new_position.x;
    data.vector_y = new_position.y;

    data.bronze_egg_collected = this.collected_eggs[0];
    data.silver_egg_collected = this.collected_eggs[1];
    data.gold_egg_collected = this.collected_eggs[2];

    var jsonData = JSON.stringify(data);

    xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhttp.send(jsonData);
  }

  AssembleArray()
  {
    let new_position = {
      x : "",
      y : ""
    }

    //Save sequence
    for(let step in this.walk_sequence)
    {
      if(step < this.walk_sequence.length)
      {
        new_position.x += this.walk_sequence[step].x;
        new_position.y += this.walk_sequence[step].y;
      }

      if(step < this.walk_sequence.length - 1)
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

  Animate(offset)
  {
    if(offset.x > 0)
      offset.x -= this.speed;
    if(offset.x < 0)
      offset.x += this.speed;

    if(offset.y > 0)
      offset.y -= this.speed;
    if(offset.y < 0)
      offset.y += this.speed;

    this.sprite.y = this.sheet_row * this.size;

    this.step_distance = (tile_size / 1.5);

    if( offset.x > 0 && offset.x <  this.step_distance ||
        offset.x < 0 && offset.x > -this.step_distance ||
        offset.y > 0 && offset.y <  this.step_distance ||
        offset.y < 0 && offset.y > -this.step_distance)
     {
       this.sprite.x = 1 * this.size;
     } else {
       this.sprite.x = 0;
     }

     if(offset.x == 0 && offset.y == 0)
      this.moving = false;
  }
}

function InitializeMainPlayer()
{
  let new_player = new Player(parseInt(session_id));
  new_player.active = true;

  player_pool.push(new_player);

  online_players.push(new_player);
}

function LoadOnlinePlayers()
{
  var url =  base_url + "index.php/api/user/users";
  var xhttp = new XMLHttpRequest();

  xhttp.open('GET', url, true);

  var jsonData = '';
  var data = "";

  xhttp.onreadystatechange=function()
  {
    if (this.readyState == 4 && this.status == 200)
    {
      jsonData = JSON.parse(xhttp.responseText);

      //Initialize online players
      ResetOnlinePlayers();

      for(let index in jsonData)
      {
        let new_id = parseInt(jsonData[index].id);

        if(jsonData[index].online == 1 && new_id != session_id)
        {
          let new_player = NewPlayer(jsonData[index].id);

          new_player.active = true;

          online_players.push(new_player);
        }
      }

      //Empty online_players array
      //Add players to fresh array
      //Main player avoids reset. Always index 0

      for(let player in online_players)
      {
//[1,2,3,4,5]   //[6,7,8,9]
//step: 2       //step: 0

//[4,5,6,7,8,9]
//step: 0
//current steps = []
//if keyarray < 1
// for ( walksequencelength / 3)

//Keep adding to the walk sequence
//Move from your current position to the first step in the sequence
//Assign first step as current position
//Remove first step from sequence

        if(online_players[player].step >= 10)
        {
          online_players[player].walk_sequence.splice(0, 4);
          online_players[player].step = online_players[player].walk_sequence.length;
        }
        
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

            for(let vector in new_vectors.x)
            {
              new_sequence.push(
              {
                x : parseInt(new_vectors.x[vector]),
                y : parseInt(new_vectors.y[vector])
              } );
            }

            if( new_id != online_players[main_player].user_id )
            {
              online_players[player].walk_sequence = new_sequence;
            }

            //Only load the main player once
            if( new_id == online_players[main_player].user_id && !online_players[main_player].loaded)
            {
              online_players[main_player].position = new_sequence[new_sequence.length - 1];

              SetScore( jsonData[index].bronze_egg_collected,
                        jsonData[index].silver_egg_collected,
                        jsonData[index].gold_egg_collected  );
            }

            online_players[player].loaded = true;
          }
        }
      }
    }
  };

  xhttp.send();
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

function ResetOnlinePlayers()
{
  //Skip main player
  for(let player = 1; player < player_pool.length; player++)
    player_pool[player].active = false;
  
  let old_main_player = online_players[0];

  online_players = [old_main_player];
}

function NewPlayer(new_id)
{
  let new_player;
  //Skip main player
  for(let player = 1; player < player_pool.length; player++)
  {
    if(!player_pool[player].active)
    {
      new_player = player_pool[player];

      new_player.user_id = new_id;

      return new_player;
    }  
  }

  new_player = new Player(new_id);

  player_pool.push(new_player);

  return new_player;
}

function LogOut()
{
  online_players[main_player].UpdateUser(0);
}
