/* Imports */
import { getRandomItem } from './utils.js';

/* State */
let gameState = 'results'; // 'guess' or 'results'
let guess = 'guess-1'; // 'guess-1' 'guess-2' 'guess-3'
let answer = 'quess-1'; // 'guess-1' 'guess-2' 'guess-3'
let result = 'win'; // 'win' or 'lose'

let totalWins = 0;
let totalLosses = 0;
let totalPlays = 0;

// probability array
const pearlLocation = ['guess-1', 'guess-2', 'guess-3'];

const pearl1 = document.getElementById('pearl-1');
const pearl2 = document.getElementById('pearl-2');
const pearl3 = document.getElementById('pearl-3');

const shell1 = document.getElementById('shell-1');
const shell2 = document.getElementById('shell-2');
const shell3 = document.getElementById('shell-3');

const guess1Button = document.getElementById('guess-1-button');
const guess2Button = document.getElementById('guess-2-button');
const guess3Button = document.getElementById('guess-3-button');

const displayText1 = document.getElementById('display-text-1');
const displayText2 = document.getElementById('display-text-2');
const displayText3 = document.getElementById('display-text-3');

const playAgainButton = document.getElementById('play-again-button');

/* Actions */
function loadPage() {
    displayShells();
}

function displayShells() {
    gameState = 'guess';
    if (gameState === 'guess') {
        pearl1.classList.add('hidden');
        pearl2.classList.add('hidden');
        pearl3.classList.add('hidden');
        shell1.classList.remove('reveal');
        shell2.classList.remove('reveal');
        shell3.classList.remove('reveal');
        displayText1.classList.add('hidden');
        displayText2.classList.add('hidden');
        displayText3.classList.add('hidden');
        playAgainButton.classList.add('hidden');
    }
}

// display

/* function displayResults() {
    if (gameState === 'results') {
        guess1Button.classList.add('hidden');
        guess2Button.classList.add('hidden');
        guess3Button.classList.add('hidden');
        playAgainButton.classList.remove('hidden');
    }
} */

function playGame(userGuess) {
    displayText1.innerHTML = '';
    displayText2.innerHTML = '';
    displayText3.innerHTML = '';

    gameState = 'results';
    guess = userGuess;
    answer = getRandomItem(pearlLocation);
    totalPlays++;
    displayText1.classList.remove('hidden');
    displayText2.classList.remove('hidden');
    displayText3.classList.remove('hidden');
    playAgainButton.classList.remove('hidden');

    if (guess === 'guess-1' && answer === 'guess-1') {
        shell1.classList.add('reveal');
        pearl1.classList.remove('hidden');
        displayText1.textContent = 'Found it!';
        result = 'win';
    }

    if (guess === 'guess-1' && answer === 'guess-2') {
        shell1.classList.add('reveal');
        shell2.classList.add('reveal');
        pearl2.classList.remove('hidden');
        displayText1.textContent = 'Not here!';
        result = 'lose';
    }

    if (guess === 'guess-1' && answer === 'guess-3') {
        shell1.classList.add('reveal');
        shell3.classList.add('reveal');
        pearl3.classList.remove('hidden');
        displayText1.textContent = 'Not here!';
        result = 'lose';
    }

    if (guess === 'guess-2' && answer === 'guess-1') {
        shell2.classList.add('reveal');
        shell1.classList.add('reveal');
        pearl1.classList.remove('hidden');
        displayText2.textContent = 'Not here!';
        result = 'lose';
    }

    if (guess === 'guess-2' && answer === 'guess-2') {
        shell2.classList.add('reveal');
        pearl2.classList.remove('hidden');
        displayText2.textContent = 'Found it!';
        result = 'win';
    }

    if (guess === 'guess-2' && answer === 'guess-3') {
        shell2.classList.add('reveal');
        shell3.classList.add('reveal');
        pearl3.classList.remove('hidden');
        displayText2.textContent = 'Not here!';
        result = 'lose';
    }

    if (guess === 'guess-3' && answer === 'guess-1') {
        shell3.classList.add('reveal');
        shell1.classList.add('reveal');
        pearl1.classList.remove('hidden');
        displayText3.textContent = 'Not here!';
        result = 'lose';
    }

    if (guess === 'guess-3' && answer === 'guess-2') {
        shell3.classList.add('reveal');
        shell2.classList.add('reveal');
        pearl2.classList.remove('hidden');
        displayText3.textContent = 'Not here!';
        result = 'lose';
    }

    if (guess === 'guess-3' && answer === 'guess-3') {
        shell3.classList.add('reveal');
        pearl3.classList.remove('hidden');
        displayText3.textContent = 'Found it!';
        result = 'win';
    }

    console.log(guess);
    console.log(answer);
    console.log(totalPlays);
    console.log(result);

    // displayResults();
    displayScoreboard();
}

/* Scoreboard */
const winsDisplay = document.getElementById('wins-display');
const lossesDisplay = document.getElementById('losses-display');
const totalDisplay = document.getElementById('total-display');

function displayScoreboard() {
    guess1Button.classList.add('hidden');
    guess2Button.classList.add('hidden');
    guess3Button.classList.add('hidden');

    if (result === 'win') {
        totalWins++;
    }
    if (result === 'lose') {
        totalLosses++;
    }
    winsDisplay.textContent = totalWins;
    lossesDisplay.textContent = totalLosses;
    totalDisplay.textContent = totalPlays;
}

// event listeners
guess1Button.addEventListener('click', () => {
    playGame('guess-1');
});

guess2Button.addEventListener('click', () => {
    playGame('guess-2');
});

guess3Button.addEventListener('click', () => {
    playGame('guess-3');
});

function playAgain() {
    gameState = 'guess';
    guess1Button.classList.remove('hidden');
    guess2Button.classList.remove('hidden');
    guess3Button.classList.remove('hidden');
    loadPage();
}

playAgainButton.addEventListener('click', () => {
    playAgain();
});

/* Run page load code */
loadPage();
