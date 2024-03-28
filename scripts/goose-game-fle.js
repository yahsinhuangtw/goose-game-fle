let gameState = {
  'State' : 'Game Loop',
  'Turn' : 'playerBeagle',
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