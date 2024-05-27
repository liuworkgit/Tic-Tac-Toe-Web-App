'use strict'

/**
 * @module GameUI
 * 
 * Interface for playing tic-tac-toe through the console.
 * 
 * readline module code referenced from altacademy 
 * (https://www.altcademy.com/blog/how-to-get-input-in-javascript/#getting-user-input-through-console-input)
 */
function createGameUI() {
    /**
     * gets the players' names and starts the game.
     * @returns void
     */
    const newGame = function () {};

    /**
     * lets the current player play a round.
     * @returns void
     */
    const playRound = function () {};

    /**
     * ends the game by announcing a win/tie.
     * @returns void
     */
    const endGame = function () {};

    return { newGame, playRound, endGame };
};