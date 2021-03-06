//1. Load all eggs
//2. Check if egg is active
//3. Yes: place egg on position
//4. No: check if enough time has passed
//5. Activate egg, save position

let time_in_seconds;

let cooldown = 1000;

let egg_data;

let egg_sheet = new Image();
egg_sheet.src = base_url + 'images/MetallicEggs.png'

let egg_values = [
    1, 3, 10
];

let respawn_time = [
    20, 60, 120
]

let egg_layer =
[
    []
];

for(let y = 0; y < background.length; y++)
{
    egg_layer[y] = [];

    for(let x = 0; x < background[y].length; x++)
        egg_layer[y][x] = null;
}

class Egg
{
    constructor(new_vector_x, new_vector_y, new_type)
    {
        this.id = 0;

        this.type = new_type;

        this.active = false;

        this.value = egg_values[this.type];

        this.position = {
            x : new_vector_x,
            y : new_vector_y
        }

        this.last_position = {
            x : 0,
            y : 0
        }

        this.size = 32;

        this.sprite =
        {
            x : this.size * this.type,
            y : 0
        };

        this.DrawSprite(this.position.x, this.position.y);
    }

    DrawSprite(x, y)
    {
        context.drawImage(  egg_sheet,
                            this.type * this.size,
                            0,
                            this.size,
                            this.size,
                            draw_center.min.x + (x * tile_size) + main_offset.x,
                            draw_center.min.y + (y * tile_size) + main_offset.y,
                            tile_size,
                            tile_size);
    }
}

//.Load eggs once every refresh rate
//.Activate available eggs
//.(Loop)Draw activated eggs
function LoadEggs()
{
    var url =  base_url + "index.php/api/egg/eggs";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);

    xhttp.onreadystatechange=function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            egg_data = JSON.parse(xhttp.responseText);

            GetEggs();
        }
    }

    xhttp.send();
}

function GetEggs()
{
    time_in_seconds = TimeInSeconds(GetTime());

    for(let egg in egg_data)
    {
        let new_egg = egg_data[egg];

        let new_time = TimeInSeconds(new_egg.collect_time) + respawn_time[new_egg.type];

        if(time_in_seconds > new_time)
        { 
            SpawnEgg(new_egg);
        }
    }   
}

function SpawnEgg(new_egg)
{
    //New egg = JSON data
    //(Old) egg = egg Class
    let egg = egg_layer[new_egg.vector_y][new_egg.vector_x];

    if(egg == null)
    {
        egg = new Egg(new_egg.vector_x, new_egg.vector_y, 0);
        egg_layer[new_egg.vector_y][new_egg.vector_x] = egg;
    }

    if(!egg.active)
    {
        //console.log("Activate egg " + new_egg.type);

        egg.id = new_egg.id;
        egg.type = new_egg.type;

        egg.vector_x = new_egg.vector_x;
        egg.vector_y = new_egg.vector_y;

        egg.active = true;
    }
}

function TimeInSeconds(new_time)
{
    let date_time = new_time.split(' ');

    let date = date_time[0].split('-');

    let year_to_second = parseInt(date[0] * 365 * 24 * 60 * 60);
    let month_to_second = parseInt(date[1] * (365 / 12) * 24 * 60 * 60);
    let day_to_second = parseInt(date[2]) * 24 * 60 * 60;

    let time = date_time[1].split(':');

    let hour_to_second = parseInt(time[0] * 60 * 60);
    let minute_to_second = parseInt(time[1] * 60);

    let seconds =   year_to_second + month_to_second + day_to_second + 
                    hour_to_second + minute_to_second + parseInt(time[2]);

    return seconds;
}

function GetTime()
{
    let date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    let hour = date.getHours();
    if(hour < 10)
        hour = "0" + date.getHours();

    let minute = date.getMinutes();
    if(minute < 10)
        minute = "0" + date.getMinutes();

    let second = date.getSeconds();
    if(second < 10)
        second = "0" + date.getSeconds();

    let current_time =  year + "-" + month + "-" + day + " " + 
                        hour + ":" + minute + ":" + second;


    return current_time;
}


function UpdateEgg(new_egg)
{
    var url =  base_url + "index.php/api/egg/eggs";
    var xhttp = new XMLHttpRequest();

    xhttp.open('PUT', url, true);

    var data = {};

    data.id = new_egg.id;
    data.type = new_egg.type;

    new_egg.last_position = new_egg.position;

    let new_position = RandomPosition();

    data.vector_x = new_position.x;
    data.vector_y = new_position.y;
    data.collect_time = GetTime();

    var jsonData = JSON.stringify(data);

    xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhttp.send(jsonData);
}

function RandomPosition()
{
    let random_position = {
        x: Math.floor((Math.random() * background[0].length)),
        y: Math.floor((Math.random() * background.length))
    }

    while(  foreground[random_position.y][random_position.x] != null &&
            foreground[random_position.y][random_position.x].collision ||
             egg_layer[random_position.y][random_position.x] != null)
            {
                random_position.x = Math.floor((Math.random() * background[0].length));
                random_position.y = Math.floor((Math.random() * background.length));
            }

    return random_position;
}

function RandomizeEggs()
{
    for(let egg in egg_data)
    {
        UpdateEgg(egg_data[egg]);
    }

    console.log("Randomized eggs");
}