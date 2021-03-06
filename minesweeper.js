var DEFAULT_BOARD_WIDTH  = 8;
var DEFAULT_BOARD_HEIGHT = 8;
var DEFAULT_NUM_OF_MINES = 10;

var board = new Board(DEFAULT_BOARD_WIDTH, 
                      DEFAULT_BOARD_HEIGHT, 
                      DEFAULT_NUM_OF_MINES);

$(document).ready( function()
{
    board.draw('board');
    
    $('#board').on('click', '.tile_unclicked', ( function() 
    {
        var x = $(this).attr('data-x');
        var y = $(this).attr('data-y');
       
        if ( board.clickTile(x, y) === false )
        {
            alert("You hit a mine!");
            newGame();
        }
        
        board.draw('board');
    }));
    
    $('#board').on('mouseover', '.tile_unclicked', ( function() 
    {
        var x = $(this).attr('data-x');
        var y = $(this).attr('data-y');
        
        if ( board.getTile(x, y).isMine === true )
        {
            document.getElementById('cheat_text').innerHTML = 'a mine!';
        }
        else
        {
            document.getElementById('cheat_text').innerHTML = 'not a mine!';
        }
    }));
});

function newGame()
{
    this.board = new Board(DEFAULT_BOARD_WIDTH, 
                           DEFAULT_BOARD_HEIGHT, 
                           DEFAULT_NUM_OF_MINES);
    
    board.draw('board');
}

function validate()
{
    if ( board.validate() === true )
    {
        alert('Victory! You win!');
    }
    else
    {
        alert('Fail! You lose!');
    }
}