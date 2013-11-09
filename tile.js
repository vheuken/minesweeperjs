var TILE_UNCLICKED_CLASS = 'tile_unclicked';
var TILE_CLICKED_CLASS   = 'tile_clicked';

function Tile (x, y, isMine)
{
    this.generateHTML = function () 
    {
        var html = '<div ';
        
        if (this.isClicked === true)
        {
            html += 'class="' + TILE_UNCLICKED_CLASS + '"';
        }
        else
        {
            html += 'class="' + TILE_CLICKED_CLASS + '"';
        }        
        
        html += '></div>';
        
        return html;
    }
    
    this.x = x;
    this.y = y;
    this.isMine = isMine;
    this.isClicked = true;
    this.isFlagged = false;
    
    this.html = this.generateHTML();
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
