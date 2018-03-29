let player = {
    x : 4,
    y : 4
  }

function input(event)
{
    var keypressed = event.key;

    if(keypressed)
    {
        switch (keypressed)
        {
            case "w" : !CheckTile(player.x, player.y-1) ? player.y-- : null;
                break;

            case "a" : !CheckTile(player.x-1, player.y) ? player.x-- : null;
                break;
            
            case "s" : !CheckTile(player.x, player.y+1) ? player.y++ : null;
                break;
            
            case "d" : !CheckTile(player.x+1, player.y) ? player.x++ : null;
                break;

            default : null;
        }

        DrawGrid();
    }
}

function CheckTile(x, y)
{
    if(grid[1][x] != null)
    {
        if(grid[1][x][y] != null)
            return grid[1][x][y].collision;
    }
}