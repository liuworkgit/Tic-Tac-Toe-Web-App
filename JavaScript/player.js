'use strict'

/**
 * @module player
 * 
 * Represents a player of the tic-tac-toe game.
 * 
 * @param {string} name - the name of the player
 * @param {number} id - the player's id number
 * @param {string} marker - what the player will draw on the board
 */
function createPlayer(name, id, marker) {
    /**
     * @field the number of times the player won
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
    };

    /**
     * returns the player's name.
     * @returns string
     */
    const getName = function () {
        return name;
    };

    /**
     * returns the player's id.
     * @returns number
     */
    const getId = function () {
        return id;
    };

    /**
     * returns the player's marker.
     * @returns string
     */
    const getMarker = function () {
        return marker;
    };

    return { increaseNumWins, getNumWins, getName, getId, getMarker };
};

export { createPlayer };