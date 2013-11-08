var TILE_UNCLICKED_HTML = '<span class="tile_unclicked"></span>';
var TILE_CLICKED_HTML   = '<span class="tile_clicked"></span>';

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
