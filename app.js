/* Imports */
import { getRandomItem } from './utils.js';

/* State */
let gameState = 'guess'; // 'guess' or 'results'
let guess = ''; // 'guess-1' 'guess-2' 'guess-3'
let answer = ''; // 'guess-1' 'guess-2' 'guess-3'
let result = 'win'; // 'win' or 'lose'

let totalWins = 0;
let totalPlays = 0;

// probability array
const pearlLocation = ['guess-1', 'guess-2', 'guess-3'];

const pearl1 = document.getElementById('pearl-1');
const pearl2 = document.getElementById('pearl-2');
const pearl3 = document.getElementById('pearl-3');

const shell1 = document.getElementById('shell-1');
const shell2 = document.getElementById('shell-2');
const shell3 = document.getElementById('shell-3');

const guess1 = document.getElementById('guess-1');
const guess2 = document.getElementById('guess-2');
const guess3 = document.getElementById('guess-3');

const display1 = document.getElementById('display-1');
const display2 = document.getElementById('display-2');
const display3 = document.getElementById('display-3');

const playAgainButton = document.getElementById('play-again-button');

/* Actions */
function loadPage() {
    displayShells();
    displayResults();
    displayScoreboard();
}

function displayShells() {
    if (gameState === 'guess') {
        pearl1.classList.add('hidden');
        pearl2.classList.add('hidden');
        pearl3.classList.add('hidden');
        shell1.classList.remove('reveal');
        shell2.classList.remove('reveal');
        shell3.classList.remove('reveal');
        display1.classList.add('hidden');
        display2.classList.add('hidden');
        display3.classList.add('hidden');
        playAgainButton.classList.add('hidden');
    }
}

// display

function displayResults() {
    if (gameState === 'results') {
        guess1.classList.add('hidden');
        guess2.classList.add('hidden');
        guess3.classList.add('hidden');
        playAgainButton.classList.remove('hidden');
    }

    guess = userGuess;
    answer = getRandomItem(pearlLocation);
    totalPlays++;

    if (guess === 'guess-1') {
        shell1.classList.add('reveal');
    }

    if (guess === 'guess-2') {
        shell2.classList.add('reveal');
    }

    if (guess === 'guess-3') {
        shell3.classList.add('reveal');
    }

    if (guess === answer) {
        result = 'win';
        totalWins++;
    } else {
        result = 'lose';
    }

    loadPage();
}

function playAgain() {
    gameState = 'guess';
    loadPage();
}
/* Scoreboard */

const winsDisplay = document.getElementById('wins-display');
const lossesDisplay = document.getElementById('losses-display');
const totalDisplay = document.getElementById('total-display');

function displayScoreboard() {
    totalDisplay.textContent = totalPlays;
    winsDisplay.textContent = totalWins;
    lossesDisplay.textContent = totalPlays - totalWins;
}
// event listeners
guess1.addEventListener('click', () => {
    displayResults('guess-1');
});

guess2.addEventListener('click', () => {
    displayResults('guess-2');
});

guess3.addEventListener('click', () => {
    displayResults('guess-3');
});

playAgainButton.addEventListener('click', () => {
    playAgain();
});

/* Run page load code */
loadPage();
