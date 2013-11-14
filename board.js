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

Board.prototype.clickTile = function (x, y)
{
    var tile = this.getTile(x, y);
    var arrayOfEmptyTiles = new Array();
    
    if ( tile.isMine === true )
    {
        return false;
    }
    
    var numOfSurroundingMines = this.getNumOfSurroundingMines(tile, arrayOfEmptyTiles);
    
    tile.click(numOfSurroundingMines);
    
    if ( numOfSurroundingMines === 0 )
    {
        console.log("AT S");
       
        for (var i = 0; i < arrayOfEmptyTiles.length; i++)
        {
            emptyTile = arrayOfEmptyTiles[i];
            
            this.clickTile(emptyTile.x, emptyTile.y);
            
        }
    }
    
    return true;
}

Board.prototype.validate = function (x, y)
{
    for (var y = 0; y < this.height; y++)
    {
        for (var x = 0; x < this.height; x++)
        {
            var tile = this.getTile(x, y);
            
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
            boardElement.innerHTML += this.getTile(x, y).html;
        }
        boardElement.innerHTML += "<br>";
    }
}

Board.prototype.getNumOfSurroundingMines = function(tile, arrayOfEmptyTiles)
{
    var tempTile;
    var num = 0;
    var x = tile.x;
    var y = tile.y;
    
    if ( y > 0 )
    {
        // check above
        tempTile = this.getTile(x , y-1);
        if ( tempTile.isMine === true )
        {
            num++;
        }
        else if ( tempTile.isClicked === false )
        {
            arrayOfEmptyTiles.push(tempTile);
        }
        
        // check diagonal-up-right
        if ( x < (this.width-1) )
        {
            tempTile = this.getTile(x+1, y-1);
            if ( tempTile.isMine === true )
            {
                num++;
            }
            else if ( tempTile.isClicked === false )
            {
                arrayOfEmptyTiles.push(tempTile);
            }
        }

        
        // check diagonal-up-left
        if ( x > 0 )
        {
            tempTile = this.getTile(x-1, y-1);
            if ( tempTile.isMine === true )
            {
                num++;
            }     
            else if ( tempTile.isClicked === false )
            {
                arrayOfEmptyTiles.push(tempTile);
            }            
        }

}
    
    if ( y < (this.height-1) )
    {
        // check below
        tempTile = this.getTile(x , y+1);
        if ( tempTile.isMine === true )
        {
            num++;
        }
        else if ( tempTile.isClicked === false )
        {
            arrayOfEmptyTiles.push(tempTile);
        }  
        
        // check diagonal-down-right
        if ( x < (this.width-1) )
        {
            tempTile = this.getTile(x+1, y+1);
            if ( tempTile.isMine === true )
            {
                num++;
            }
            else if ( tempTile.isClicked === false )
            {
                arrayOfEmptyTiles.push(tempTile);
            }
        }
        
        // check diagonal-down-left
        if ( x > 0 )
        {
            tempTile = this.getTile(x-1, y+1);
            if ( tempTile.isMine === true )
            {
                num++;
            }      
            else if ( tempTile.isClicked === false )
            {
                arrayOfEmptyTiles.push(tempTile);
            }            
        }        
    }
    
    // check left
    if ( x > 0 )
    {
        tempTile = this.getTile(x-1, y);
        if ( tempTile.isMine === true )
        {
            num++;
        }
        else if ( tempTile.isClicked === false )
        {
            arrayOfEmptyTiles.push(tempTile);
        }
    }
    
    // check right
    if ( x < (this.width-1) )
    {
        tempTile = this.getTile(x+1, y);
        if ( tempTile.isMine === true )
        {
            num++;
        }  
        else if ( tempTile.isClicked === false )
        {
            arrayOfEmptyTiles.push(tempTile);
        }        
    }
    
    return num;
}