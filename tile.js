var TILE_UNCLICKED_HTML = '<div class="tile_unclicked"></div>';
var TILE_CLICKED_HTML   = '<div class="tile_clicked"></div>';

function Tile (isMine)
{
    this.isMine = isMine;
    this.isClicked = true;
    this.isFlagged = false;
    
    this.html = TILE_UNCLICKED_HTML;
}

Tile.prototype.click = function ()
{
    if (isClicked === true)
    {
        isClicked = false;
    }
    else
    {
        isClicked = true;
    }
}

Tile.prototype.flag = function ()
{
    if (isFlagged === true)
    {
        isFlagged = false;
    }
    else
    {
        isFlagged = true;
    }
}
