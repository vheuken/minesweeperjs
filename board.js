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
                this.arrayOfTiles[y][x] = new Tile(false);
            }
            else
            {
                this.arrayOfTiles[y][x] = new Tile(true);
            }
            
            tileIndex++;
        }
    }
}

Board.prototype.draw = function (boardElementId) 
{
    var boardElement = document.getElementById(boardElementId);
    
    for (var y = 0; y < this.height; y++)
    {
        for (var x = 0; x < this.width; x++)
        {
            boardElement.innerHTML += this.arrayOfTiles[y][x].isMine;
        }
        boardElement.innerHTML += "<br>";
    }
}