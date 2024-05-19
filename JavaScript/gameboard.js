'use strict'

/**
 * @class Gameboard
 * 
 * Represents the 3x3 grid on which Tic-Tac-Toe is played
 * 
 * @private
 * @field grid - a 2D array where each entry is either "E" if it's an empty spot or
 * a player's name if it's been filled.
 * @field numEmpty - the number of currently empty slots. By default this is 9
 * @function isSpotFilled - returns true if the given spot is filled
 * @function subEmpty - decrements the number of empty slots
 * 
 * @public
 * @function markBox - fills in a spot with the given marker
 * @function clearBoard - clears the entire gameboard.
 * @function isRowColFilled - returns true if the row/col is filled
 * @function isDiagFilled - returns true if the diagonal is filled
 * @function isRowColWin - returns true if the row/col has been filled entirely by a player
 * @function isDiagwin - returns true if the diagonal has been filled entirely by a player
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
     */
    const subEmpty = function () {
        numEmpty--;
    };

    /**
     * Returns true if the row/col at the given index has been filled
     * @param {boolean} isRow - true if it's a row, false if it's a col 
     * @param {number} index - 0 <= index <= 2
     * @returns boolean
     */
    const isRowColFilled = function (isRow, index) {}

    /**
     * Returns true if the diagonal has been filled
     * @returns boolean
     */
    const isDiagFilled = function () {}

    // public
    /**
     * Fills in the spot at the given col/row coordinates with the marker
     * @param {number} col - 0 <= col <= 2
     * @param {number} row - 0 <= col <= 2
     * @param {string} marker
     */
    const markBox = function (col, row, marker) {
        if (!isSpotFilled(col, row)) {
            grid[col][row] = marker;
            numEmpty--;
        }
    }

    /**
     * Clears the entire gameboard.
     */
    const clearBoard = function () {
        grid = [["E", "E", "E"],["E", "E", "E"],["E", "E", "E"]];
        numEmpty = 9;
    }

    /**
     * Returns true if the row/col at the given index has been filled completely
     * by a single player.
     * @param {boolean} isRow - true if it's a row, false if it's a col 
     * @param {number} index - 0 <= index <= 2 
     * @returns boolean
     */
    const isRowColWin = function (isRow, index) {}

    /**
     * Returns true if the diagonal has been filled completely by a single
     * player.
     * @returns boolean
     */
    const isDiagwin = function () {}

    /**
     * Returns true if the entire grid has been filled.
     * @returns boolean
     */
    const isBoardFilled = function () {}

    // return gameboard object
    return { grid, numEmpty, markBox, 
        clearBoard, isRowColWin, isDiagwin, 
        isBoardFilled }
}