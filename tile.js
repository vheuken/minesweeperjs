function Tile (isMine)
{
    this.isMine = isMine;
    this.isClicked = true;
    this.isFlagged = false;
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
