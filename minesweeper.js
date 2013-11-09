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
        
        board.arrayOfTiles[y][x].click();
        
        board.draw('board');
    }));
});
