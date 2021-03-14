// variables
let randomNumber = 0;
let roundScore = 0;
let activePlayer = 0;
let scores = [0, 0];

// Get the #dice element
const dice = document.querySelector("#dice");
// Get roll button
const roll = document.querySelector("#reload");
// Get hold button
const hold = document.querySelector("#download");
// Get the players
const player0 = document.querySelector(".player-0");
const player1 = document.querySelector(".player-1");

// Roll the dice and display the round score
const rollDice = function () {
  // Create a random number
  randomNumber = Math.floor(Math.random() * 6) + 1;

  // Display dice
  dice.innerHTML = `<img class="dice" src="./images/dice/dice-${randomNumber}.png" alt="dice ${randomNumber}">`;

  // Round score
  if (randomNumber !== 1) {
    roundScore += randomNumber;
    // Display round score
    document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
  } else {
    roundScore = 0;
    changePlayer();
  }
};

// Change player
const changePlayer = function () {
  document.querySelector(`#current-${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("active-player");
  player1.classList.toggle("active-player");
};

// Hol the score
const holdScore = function () {
  // add current score
  scores[activePlayer] += roundScore;

  document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];
}

// Listen for click events
roll.addEventListener("click", rollDice, false);
hold.addEventListener("click", holdScore, false);
