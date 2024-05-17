'use strict'

/**
 * @class Gameboard
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
 * the spot at said coordinates with said string. Coordinates must be between [0,2] 
 * for cols and rows
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
    // private
    let grid = [["E", "E", "E"],["E", "E", "E"],["E", "E", "E"]];
    let numEmpty = 9;

    /**
     * returns true if the spot has been filled.
     * @param {number} col - 0 <= col <= 2 
     * @param {number} row - 0 <= row <= 2 
     * @returns boolean
     */
    const isSpotFilled = function (col, row) {
        return !(grid[col][row] == "E");
    }

    /**
     * Decrements numEmpty by 1.
     * @returns void
     */
    const subEmpty = function () {
        numEmpty--;
    };

    // public
    /**
     * Fills in the spot at the given col/row coordinates with the marker
     * @param {number} col - 0 <= col <= 2
     * @param {number} row - 0 <= col <= 2
     * @param {string} marker
     * @returns void
     */
    const markBox = function (col, row, marker) {
        if (!isSpotFilled(col, row)) {
            grid[col][row] = marker;
            numEmpty--;
        }
    }

    /**
     * Clears the entire gameboard.
     * @returns void
     */
    const clearBoard = function () {
        grid = [["E", "E", "E"],["E", "E", "E"],["E", "E", "E"]];
        numEmpty = 9;
    }
}