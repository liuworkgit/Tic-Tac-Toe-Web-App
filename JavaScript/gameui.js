'use strict'

import { gameflow } from "./gameflow";

/**
 * @module GameUI
 * 
 * Interface for playing tic-tac-toe through the console.
 * 
 * readline module code referenced from altacademy 
 * (https://www.altcademy.com/blog/how-to-get-input-in-javascript/#getting-user-input-through-console-input)
 */
const ui = (function createGameUI() {
    let gf = gameflow;
    const readline = require('readline').createInterface(
        {input: process.stdin, output: process.stdout}
    );

    /**
     * Starts a new game and plays it until the end
     * @return void
     */
    const playGame = function () {
        gf.newGame();
        readline.question(`${gf.getCurrTurn.getName()}, please enter the row and
        column of the box to make your move:`, rowcol => {
            gf.playRound(Number(rowcol.charAt(0)), Number(rowcol.charAt(1)));
        });
    };

    return { playGame };
})();

ui.playGame();