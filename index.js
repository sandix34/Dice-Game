// variables
let randomNumber = 0;
let roundScore = 0;


// Get the #dice element
const dice = document.querySelector("#dice");
// Get roll button
const roll = document.querySelector("#reload");



// Render the dice
const rollDice = function () {

  // Create a random number
  randomNumber = Math.floor(Math.random() * 6) + 1;

  // Display dice
  dice.innerHTML =
    '<img class="dice" src="./images/dice/dice-' +
    randomNumber +
    '.png" alt="dice ' +
    randomNumber +
    '">';

  // Round score
  if(randomNumber != 1) {
    roundScore += randomNumber;
    console.log("roundScore" + roundScore);
  } else {
    roundScore = 0;
  }
  
  // Display round score
  document.querySelector('#current-0').textContent = roundScore;
};


// Listen for click events
roll.addEventListener("click", rollDice, false);
