'use strict'

import { gameboard } from "./gameboard";
import { createPlayer } from "./player";

/**
 * @module gameflow
 * 
 * Manages the logic and gameplay of the tic-tac-toe game.
 * 
 * @function newGame - starts a new game by getting the players' names 
 * and randomising who goes first
 * @function restartGame - resets the gameboard and reselects a 
 * random player to start
 * @function makeMove - lets the current player make a move.
 * @function endGame - ends the game by announcing who won/tied and 
 * asking if the players want to go again.
 */
function createGameflow () {
    let board = gameboard;
    let playerOne;
    let playerTwo;
    let currentPlayer;

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    /**
     * starts a new game by getting the players' names and 
     * randomising who goes first
     * @return void
     */
    const newGame = function () {
        console.log("Player one, what is your name?")
    };

    /**
     * randomly picks a player to go first
     * @return void
     */
    const randomizeWhoStarts = function () {};

    /**
     * resets the gameboard and reselects a random player to
     * start
     * @return void
     */
    const restartGame = function () {};

    /**
     * lets the current player make a move.
     * @return void
     */
    const makeMove = function () {};

    /**
     * returns true if there is a tie.
     * @return boolean
     */
    const isTie = function () {};

    /**
     * returns true if there is a win (i.e. a row/col filled
     * by a player)
     * @return boolean
     */
    const isWin = function () {};

    /**
     * changes whose turn it currently is.
     * @return void
     */
    const changeTurn = function () {};

    /**
     * ends the game by announcing who won/tied and asking 
     * if the players want to go again.
     * @return void
     */
    const endGame = function () {};

    /**
     * increases the score of the winner.
     * @param {player} winner - the winning player
     * @return void
     */
    const changeWinnerScore = function (winner) {};
};