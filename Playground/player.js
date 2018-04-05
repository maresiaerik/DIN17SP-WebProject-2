
let player = {
    x : 4,
    y : 4,
    moving : false
  }

let control_scheme = ["w", "a", "s", "d"];

function input(event)
{
    var keypressed = event.key;

    if(control_scheme.includes(keypressed) && !player.moving)
    {
        switch (keypressed)
        {
            case "w" : CheckTile(player.x, player.y-1) ? null : (player.y--, tile_offset.y = -tile_size, SetGrid());
                break;

            case "a" : CheckTile(player.x-1, player.y) ? null : (player.x--, tile_offset.x = -tile_size, SetGrid());
                break;
            
            case "s" : CheckTile(player.x, player.y+1) ? null : (player.y++, tile_offset.y = tile_size, SetGrid());
                break;
            
            case "d" : CheckTile(player.x+1, player.y) ? null : (player.x++, tile_offset.x = tile_size, SetGrid());
                break;

            default : null;
        } 
        
        
    }
}



function CheckTile(x, y)
{
    if(foreground[y] != null)
    {
        if(foreground[y][x] != null)
            return foreground[y][x].collision;  
    }
}