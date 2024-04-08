let gameState = {
  'State': 'Game Loop',
  'Turn': 'Beagle',
  beaglePosition: 0,
  goldiePosition: 0,
  'Winner': '___',
};

let stateV = gameState['State'];

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
  if (gameState['Turn'] === 'Beagle') {
    let oldPosition = gameState.beaglePosition;
    let newPosition = gameState.beaglePosition + diceTotal;
    gameState.beaglePosition = newPosition;
    document.getElementById(oldPosition).innerText = `${oldPosition} (${gameState.Turn})`;
  } else {
    newPosition = gameState.goldiePosition + diceTotal;
    gameState.goldiePosition = newPosition;
    document.getElementById(newPosition).innerText = `${newPosition} (${gameState.Turn})`;
  }
  console.log("Tell us the state of the game: ", gameState);
  // Has anyone won? If beaglePosition or goldiePosition is greater than or equal to position 23, beagle or goldie has won; gameState enters gameover state. If not, game continues, gameState enters gameLoop state.
  if (gameState.beaglePosition >= 23) {
    gameState.Winner = "Beagle";
    enterGameOver();
    console.log("Beagle has won. gameState enters gameover state.");
    return
  } else if (gameState.goldiePosition >= 23) {
    gameState.Winner = "Goldie";
    enterGameOver();
    console.log("Goldie has won. gameState enters gameover state.")
    return
  } else {
    console.log("No one has won. gameState enters gameloop state.")
  }

  // Whose turn is it? if Turn equals to playerBeagle is True, update Turn to goldie, if Turn equals to playerBeagle is False, update Turn to beagle.

  if (gameState.Turn === "Beagle") {
    console.log("Update gameState.Turn to Goldie.");
    gameState.Turn = 'Goldie';
  } else {
    console.log("Update gameState.Turn to Beagle.");
    gameState.Turn = 'Beagle';
  }
  document.getElementById("turnP").innerText = `${gameState.Turn}, it's your turn.`;
};
/* enterGameOver(){} function: hide lancerB, hide partiB, hide "Résultat" form; show restartB, show winner name text.
<div id="gameover"> ... </div>
*/
function enterGameOver() {
  document.getElementById("winnerName").innerText = `${gameState.Winner} has won.`;
  document.querySelectorAll(".groupA").forEach(function (elem) {
    elem.style.visibility = "hidden";
  });
  document.querySelectorAll(".groupB").forEach(function (elem) {
    elem.style.visibility = "visible";
  });
}
/* write enterGameLoop(){} function including show lancerB, show partiB, show restartB, show "Résultat" form.
<div id="gameloop"> ... </div>
document.querySelectorAll(".gameloop").forEach
*/
function enterGameLoop() {
  document.querySelectorAll(".groupB").forEach(function (elem) {
    elem.style.visibility = "hidden";
  });
  document.querySelectorAll(".groupA").forEach(function (elem) {
    elem.style.visibility = "visible";
  });
}

document.getElementById("restartB").onclick = function () {
  restart();
}

function restart() {
  gameState.beaglePosition = 0;
  gameState.goldiePosition = 0;
  document.getElementById("total").value = "";
  document.getElementById("turnP").innerText = `${gameState.Turn}, it's your turn.`;
  document.getElementById("0").innerText = "0 Départ (Beagle) (Goldie)";
  enterGameLoop();
}

restart(); // When the page loads, we set up the game.
