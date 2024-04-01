let gameState = {
  'State' : 'Game Loop',
  'Turn' : 'playerGoldie',
  beaglePosition : 0,
  goldiePosition : 0,
 };

let stateV =  gameState['State'];

console.log("Here's the Game State: ", stateV);

// On lance le dé. Returns a random integer from 1 to 6.
Math.floor(Math.random() * 6);

function lancer() {

  return Math.floor(Math.random() * 6 + 1);

};

let total = lancer();
console.log(total);

document.getElementById("lancerB").onclick = function () {
  let total = lancer();
  console.log("Answer: ", total);
  let inputElement = document.getElementById("total");
  inputElement.value = total;
};

// After clicking c'est parti button, beaglePosition value adds diceTotal value, reassigns it to the newPosition. 
document.getElementById("parti").onclick = function () {
  let diceTotal = document.getElementById("total").value;
      diceTotal = parseInt(diceTotal);
  if (gameState['Turn'] === 'playerBeagle') {
    newPosition = gameState.beaglePosition + diceTotal;
    gameState.beaglePosition = newPosition;
  } else {
    newPosition = gameState.goldiePosition + diceTotal;
    gameState.goldiePosition = newPosition;
  }
  console.log("Tell us the state of the game: ", gameState);
};

// Has anyone won? If beaglePosition or goldiePosition is greater than or equal to position 23, beagle or goldie has won; gameState enters gameover state. If not, game continues, gameState enters gameLoop state.
if (gameState.beaglePosition >= 23) {
  console.log("Beagle has won. gameState enters gameover state.");
} else if (gameState.goldiePosition >= 23){
  console.log("Goldie has won. gameState enters gameover state.")
} else {
  console.log("No one has won. gameState enters gameloop state.")
}

// Whose turn is it? if Turn equals to playerBeagle is True, update Turn to goldie, if Turn equals to playerBeagle is False, update Turn to beagle.

if (gameState.Turn === "playerBeagle") {
  console.log("Update gameState.Turn to playerGoldie.");
} else {
  console.log("Update gameState.Turn to playerBeagle.");
}