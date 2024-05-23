'use strict'

/**
 * @module Player
 * Represents a player of the tic-tac-toe game.
 * 
 * @param {string} name - the name of the player
 * @field numWins - the number of times the player won
 * @function increaseNumWins - increase numWins by 1
 */
function createPlayer(name) {
    let numWins = 0;

    /**
     * Increases the number of wins by 1
     */
    const increaseNumWins = function () {
        numWins++;
    }

    return { name, numWins, increaseNumWins };
}

export { createPlayer };