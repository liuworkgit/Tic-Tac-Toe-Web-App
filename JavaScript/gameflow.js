'use strict'

import { gameboard } from "./gameboard";
import { createPlayer as player } from "./player";

/**
 * @module gameflow
 * 
 * Manages the logic and gameplay of the tic-tac-toe game.
 *  */
const gameflow = (function createGameflow () {
    let board = gameboard;
    let p1; // player 1
    let p2; // player 2
    let currTurn; // which player is currently going
    let isGameActive = false; // if there's an ongoing game

    /**
     * starts a new game by getting the players' names and 
     * randomising who goes first
     * @param {string} p1name - name of player 1
     * @param {string} p2name - name of player 2
     * @return void
     */
    const newGame = function (p1name, p2name) {
        p1 = player(p1name, 1, "X");
        p2 = player(p2name, 2, "O");
        randomizeStarting();
        isGameActive = true;
    };

    /**
     * randomly picks a player to go first
     * @return void
     */
    const randomizeStarting = function () {
        currTurn = (Math.random() < 0.5) ? p1 : p2;
    };

    /**
     * resets the gameboard and reselects a random player to
     * start
     * @return void
     */
    const restartGame = function () {
        board.clearBoard();
        randomizeStarting();
        isGameActive = true;
    };

    /**
     * lets the current player mark a box during their turn.
     * @param {number} row - 0 <= row <= 2
     * @param {number} col - 0 <= col <= 2
     * @return void
     */
    const playRound = function (row, col) {
        board.markBox(row, col, currTurn.getMarker());
        console.log(`${currTurn.getName()} marked box at 
        row ${row.toString()} and column ${col.toString()}`);

        isGameOver(row, col, currTurn);
        changeTurn();
    };

    /**
     * Checks if the game has ended yet (i.e. if someone's won or if there's a tie)
     * @param {number} row - 0 <= row <= 2
     * @param {number} col - 0 <= col <= 2
     * @param {player} currTurn - the player whose turn it currently is
     * @returns void
     */
    const isGameOver = function (row, col, currTurn) {
        if (isTie()) {
            endGame(currTurn, false);
        };
        if (isWin(row, col, currTurn.getMarker())) {
            endGame(currTurn, true);
        };
    };

    /**
     * returns true if there is a tie.
     * @return boolean
     */
    const isTie = function () {
        return board.isBoardFilled();
    };

    /**
     * returns true if there is a win (i.e. a row/col/diag filled
     * by a player)
     * @param {number} row - 0 <= row <= 2
     * @param {number} col - 0 <= col <= 2
     * @param {String} marker - marker of current turn player
     * @return boolean
     */
    const isWin = function (row, col, marker) {
        let result = false;
        result = board.isRowColWin(true, row, marker);
        result = board.isRowColWin(false, col, marker);
        result = board.isDiagwin(marker);
        return result;
    };

    /**
     * changes whose turn it currently is.
     * @return void
     */
    const changeTurn = function () {
        currTurn = (currTurn === p1) ? p2 : p1;
    };

    /**
     * ends the game and announces the results.
     * @param {player} winner - the player who won
     * @param {boolean} isWin - is true if the game ended from a win.
     * @return void
     */
    const endGame = function (winner, isWin) {
        isGameActive = false;
        if (isWin) {
            changeWinnerScore(winner);
            console.log(`${winner.getName()} won - 
            added one point to ${winner.getName()}'s score.`);
        } else {
            console.log("Nobody won.");
        }
    };

    /**
     * increases the score of the winner.
     * @param {player} winner - the winning player
     * @return void
     */
    const changeWinnerScore = function (winner) {
        winner.increaseNumWins();
    };

    return { newGame, restartGame, playRound, endGame };
})();

export { gameflow };