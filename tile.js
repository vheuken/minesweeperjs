var TILE_UNCLICKED_CLASS = 'tile_unclicked';
var TILE_CLICKED_CLASS   = 'tile_clicked';

function Tile (x, y, isMine)
{
    this.x = x;
    this.y = y;
    this.isMine = isMine;
    this.isClicked = false;
    this.numOfAdjacentMines = null;
    
    this.html = this.generateHTML();
}

Tile.prototype.click = function (numOfAdjacentMines)
{
    if (this.isClicked === false)
    {
        this.isClicked = true;
        this.numOfAdjacentMines = numOfAdjacentMines;
        this.html = this.generateHTML();
    }
}


Tile.prototype.generateHTML = function () 
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
    
    html += '>';
    
    if (this.numOfAdjacentMines !== null)
    {
        html += this.numOfAdjacentMines;
    }
    else
    {
        html += '&nbsp;';
    }
    
    html += '</div>';
    
    return html;
}