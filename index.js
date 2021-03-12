// Get the #dice element
const dice = document.querySelector("#dice");
// Get roll button
const roll = document.querySelector("#reload");



// Render the dice
const renderDice = function () {

  // Create a random number
  let randomNumber = 0;
  randomNumber = Math.floor(Math.random() * 6) + 1;

  // Display dice
  dice.innerHTML =
    '<img class="dice" src="./images/dice/dice-' +
    randomNumber +
    '.png" alt="dice ' +
    randomNumber +
    '">';
};


// Listen for click events
roll.addEventListener("click", renderDice, false);
