//1. Check egg limit before spawning
//2. Try Spawn Egg
//3. Randomize position
//4. Check Tile (collision, egg)
//5. Place Egg
//6. Add placed egg (int)
//7. Place all active eggs
//8. Else set interval (5s)

let spawned_eggs = 0;
let egg_limit = 50;

let cooldown = 1000;

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
    constructor(new_x, new_y)
    {  
        this.image = new Image(tile_size, tile_size);
        this.image.src  =   'yoshiegg.png';

        this.position = {
            x : new_x, 
            y : new_y
        }

        this.size = 32;

        this.sprite =
        {
            x : 0,
            y : 0
        };

        this.DrawSprite(this.position.x, this.position.y);
    }

    DrawSprite(x, y)
    {
        context.drawImage(  this.image, 
                            draw_center.min.x + (x * tile_size) + tile_offset.x, 
                            draw_center.min.y + (y * tile_size) + tile_offset.y,
                            tile_size, tile_size);
    } 
}

GetEggs();

function GetEggs()
{
    for(let i = 0; i < 5; i++)
    {
        let new_position = {
            x: 0,
            y: 0
        }

        SpawnEgg(new_position);
    }
    console.log("Get Eggs");
    EggSpawner();
}

function EggSpawner()
{
    if(spawned_eggs < egg_limit)
        SpawnEgg(GetPosition());

    setTimeout(EggSpawner, cooldown);
}

function GetPosition()
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

    if(foreground[random_position.y][random_position.x] != null)
        console.log(foreground[random_position.y][random_position.x].collision);

    return random_position;
}

function SpawnEgg(new_position)
{ 
    let new_egg = new Egg(new_position.x, new_position.y);

    egg_layer[new_position.y][new_position.x] = new_egg;

    spawned_eggs ++;

    DrawGrid();
}

