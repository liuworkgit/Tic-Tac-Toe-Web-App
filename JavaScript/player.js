'use strict'

/**
 * @module player
 * 
 * Represents a player of the tic-tac-toe game.
 * 
 * @param {string} name - the name of the player
 * @param {number} id - the player's id number
 * @function increaseNumWins - increase the number of wins by 1
 * @function getNumWins - returns the number of wins
 * @function getName - returns the player's name
 * @function getId - returns the player's id
 */
function createPlayer(name, id) {
    /**
     * @field numWins - the number of times the player won
     */
    let numWins = 0;

    /**
     * Increases the number of wins by 1.
     * @returns void
     */
    const increaseNumWins = function () {
        numWins++;
    };

    /**
     * returns the number of wins.
     * @returns number
     */
    const getNumWins = function () {
        return numWins;
    }

    /**
     * returns the player's name.
     * @returns string
     */
    const getName = function () {
        return name;
    }

    /**
     * returns the player's id.
     * @returns number
     */
    const getId = function () {
        return id;
    }

    return { increaseNumWins, getNumWins, getName, getId };
};

export { createPlayer };