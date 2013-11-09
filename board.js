function Board (width, height, numOfMines) 
{
    this.width = width;
    this.height = height;
    this.numOfMines = numOfMines;
    
    var listOfMineIndexes = new Array(this.width * this.height);
    
    for (var i = 0; i < this.numOfMines; i++)
    {
        var index;
        
        do
        {
            index = Math.floor( Math.random() * this.width * this.height );
        } while ( $.inArray(index, listOfMineIndexes) !== -1 );
        
        listOfMineIndexes[i] = index;
    }
    
    this.arrayOfTiles = new Array(this.height);
    
    for (var i = 0; i < 10; i++)
    {
        this.arrayOfTiles[i] = new Array(this.width);
    }
    
    var tileIndex = 0;
    
    for (var y = 0; y < this.height; y++)
    {
        for (var x = 0; x < this.width; x++)
        {
            if ( $.inArray(tileIndex, listOfMineIndexes) === -1 )
            {
                this.arrayOfTiles[y][x] = new Tile(x, y, false);
            }
            else
            {
                this.arrayOfTiles[y][x] = new Tile(x, y, true);
            }
            
            tileIndex++;
        }
    }
}

Board.prototype.getTile = function (x, y)
{
    return this.arrayOfTiles[y][x];
}

Board.prototype.validate = function (x, y)
{
    for (var y = 0; y < this.height; y++)
    {
        for (var x = 0; x < this.height; x++)
        {
            var tile = this.arrayOfTiles[y][x];
            
            if ( tile.isClicked === false )
            {
                if ( tile.isMine === false )
                {
                    return false;
                }
            }
        }
    }
    return true;
}

Board.prototype.draw = function (boardElementId) 
{
    var boardElement = document.getElementById(boardElementId);
    
    // clear board
    boardElement.innerHTML = "";
    
    for (var y = 0; y < this.height; y++)
    {
        for (var x = 0; x < this.width; x++)
        {
            boardElement.innerHTML += this.arrayOfTiles[y][x].html;
        }
        boardElement.innerHTML += "<br>";
    }
}