'use strict'

/**
 * @module gameboard
 * 
 * Represents the 3x3 grid on which Tic-Tac-Toe is played.
 */
const gameboard = (function createGameboard() {
    // private
    /**
     * @field grid
     * represents the grid of a tic-tac-toe game.
     * entries are "E" if the spot is empty or a player's name if it's full
     * accessed by grid[row][col]
     */
    let grid = [["E", "E", "E"],["E", "E", "E"],["E", "E", "E"]];
    /**
     * @field numEmpty
     * number of empty spots in the grid
     * by default, numEmpty = 9
     */
    let numEmpty = 9;

    /**
     * returns true if the spot has been filled with the given marker.
     * @param {number} row - 0 <= row <= 2 
     * @param {number} col - 0 <= col <= 2 
     * @param {string} marker
     * @returns boolean
     */
    const isSpotFilled = function (row, col, marker) {
        return grid[row][col] == marker;
    };

    // public
    /**
     * Fills in the spot at the given col/row coordinates with the marker.
     * @param {number} row - 0 <= row <= 2 
     * @param {number} col - 0 <= col <= 2
     * @param {string} marker
     */
    const markBox = function (row, col, marker) {
        if (isSpotFilled(row, col, "E")) {
            grid[row][col] = marker;
            numEmpty--;
        };
    };

    /**
     * Clears the entire gameboard.
     */
    const clearBoard = function () {
        grid = [["E", "E", "E"],["E", "E", "E"],["E", "E", "E"]];
        numEmpty = 9;
    };

    /**
     * Returns true if the row/col at the given index has been filled completely
     * by a single player.
     * @param {boolean} isRow - true = row, false = col 
     * @param {number} index - 0 <= index <= 2 
     * @param {string} playerName
     * @returns boolean
     */
    const isRowColWin = function (isRow, index, playerName) {
        let isWin = false;
        if (isRow) {
            for (let i = 0; i <= 2; i++) {
                isWin = isSpotFilled(index, i, playerName);
            };
        } else {
            for (let i = 0; i <= 2; i++) {
                isWin = isSpotFilled(i, index, playerName);
            };
        };
        return isWin;
    };

    /**
     * Returns true if the diagonal has been filled completely by a single
     * player.
     * @param {string} playerName
     * @returns boolean
     */
    const isDiagwin = function (playerName) {
        return isSpotFilled(0, 0, playerName) 
        && isSpotFilled(1, 1, playerName) 
        && isSpotFilled(2, 2, playerName);
    };

    /**
     * Returns true if the entire grid has been filled.
     * @returns boolean
     */
    const isBoardFilled = function () {
        let isFilled = false;
        for (let row = 0; row <= 2; row++) {
            for (let col = 0; col <= 2; col++) {
                isFilled = !isSpotFilled(row, col, "E");
            };
        };
        return isFilled;
    };

    // return gameboard object
    return { grid, numEmpty, markBox, 
        clearBoard, isRowColWin, isDiagwin, 
        isBoardFilled };
})();

export { gameboard };