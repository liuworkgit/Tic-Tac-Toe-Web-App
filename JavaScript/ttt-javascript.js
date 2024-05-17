/**
 * Gameboard
 * Represents the 3x3 grid on which Tic-Tac-Toe is played
 * 
 * private:
 * @field grid - a 2D array where each entry is either "E" if it's an empty spot or
 * a player's name if it's been filled.
 * @field numEmpty - the number of currently empty slots. By default this is 9
 * @function isSpotFilled - returns true if the given spot is filled
 * @function subEmpty - decrements the number of empty slots
 * 
 * public:
 * @function markBox - takes a pair of grid coordinates and a string, and fills in 
 * the spot at said coordinates with said string.
 * @function clearBoard - clears the entire gameboard.
 * @function isRowWin - returns true if the given row is filled by the same player's 
 * name
 * @function isColWin - returns true if the given col is filled by the same player's 
 * name
 * @function isDiagWin - returns true if the diagonal is filled by the same player's 
 * name
 * @function isBoardFilled - returns true if the entire grid is filled
 */
function createGameboard() {
    let grid = [["E", "E", "E"],
                ["E", "E", "E"],
                ["E", "E", "E"]];
}