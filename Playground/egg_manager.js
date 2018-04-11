//1. Check egg limit before spawning
//2. Try Spawn Egg
//3. Randomize position
//4. Check Tile (collision, egg)
//5. Place Egg
//6. Add placed egg (int)
//7. Place all active eggs
//8. Else set interval (5s)

let egg_limit = 10;

let egg_list = [];

let position = {
    x: 0,
    y: 0
}

class Egg
{
    constructor(new_x, new_y)
    {  
        this.image = new Image(tile_size, tile_size);

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
        this.sprite.x   =   x * this.size;
        this.sprite.y   =   y * this.size;

        this.image.src  =   'yoshiegg.png';
        
        context.drawImage(  this.image, 
                            draw_center.min.x + (x * tile_size) + tile_offset.x, 
                            draw_center.min.y + (y * tile_size) + tile_offset.y,
                            tile_size, tile_size);

        /*
        context.drawImage(  this.image, 
                            this.sprite.x, 
                            this.sprite.y, 
                            fixed_tile_size, 
                            fixed_tile_size, 
                            draw_center.min.x + (x * tile_size) + tile_offset.x, 
                            draw_center.min.y + (y * tile_size) + tile_offset.y, 
                            tile_size, 
                            tile_size);
*/
    } 
}

GetEggs();

function GetEggs()
{
    console.log("test");
    
    for(let i = 0; i < 5; i++)
    {
        SpawnEgg(0,0);
    }

    EggSpawner();
}

function EggSpawner()
{
    if(egg_list.length < egg_limit)
        SpawnEgg(0,0);

    setInterval(EggSpawner, 1000);
}

SpawnEgg(4,7);
SpawnEgg(5,3);

//EggCheck

function GetPosition(){

    return position;
}

function SpawnEgg()
{
    let new_egg = new Egg(x,y);

    egg_list.push(new_egg);
}

