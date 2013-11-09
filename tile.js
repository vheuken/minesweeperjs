var TILE_UNCLICKED_CLASS = 'tile_unclicked';
var TILE_CLICKED_CLASS   = 'tile_clicked';

function Tile (x, y, isMine)
{
    this.generateHTML = function () 
    {
        var html = '<div ';
        
        if (this.isClicked === false)
        {
            html += 'class="' + TILE_UNCLICKED_CLASS + '" ';
        }
        else
        {
            html += 'class="' + TILE_CLICKED_CLASS + '" ';
        }        
        
        html += 'data-x="' + this.x + '" ';
        html += 'data-y="' + this.y + '" ';
        
        html += '></div>';
        
        return html;
    }
    
    this.x = x;
    this.y = y;
    this.isMine = isMine;
    this.isClicked = false;
    this.isFlagged = false;
    
    this.html = this.generateHTML();
}

Tile.prototype.click = function ()
{
    if (this.isClicked === false)
    {
        this.isClicked = true;
        this.html = this.generateHTML();
    }
}

Tile.prototype.flag = function ()
{
    if (isFlagged === true)
    {
        this.isFlagged = false;
    }
    else
    {
        this.isFlagged = true;
    }
    this.html = this.generateHTML();
}
