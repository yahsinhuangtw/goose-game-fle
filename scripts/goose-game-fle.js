let gameState = {
  'State': 'Game Loop',
  'Turn': 'Beagle',
  beaglePosition: 0,
  goldiePosition: 0,
  'Winner': '___',
};

const NUMBEROFCELLS = 64;

const questions = [
  "Comment tu t'appelles?",
  "Quel est ton prénom?",
  "C'est quoi ton prénom?",
  "Comment est-ce que vous vous appelez?",
  "Tu t'appelles comment?",
  "Quel est votre nom?",
  "Comment vas-tu?",
  "Quel âge as-tu?",
  "Tu parles français?",
  "Quel livre aimes-tu?",
  "Où est-ce que tu travailles actuellement?",
  "Depuis combien de temps habites-tu ici?",
  "Qu'est-ce que tu fais dans la vie?",
  "Tu pars en vacances cet été?",
  "Tu prends du café le matin?",
  "Où est-ce que tu es né?",
  "Tu vis où?",
  "Est-ce tu es introverti ou extraverti?",
  "Depuis combien de temps tu étudies le français?",
  "Pourquoi tu as voulu apprendre le français?",
  "À part le français, quelles langues parles-tu?",
  "Tu as pris ton petit-déjeuner?",
  "Où est-ce que tu habites?",
  "Est-ce que tu as déjà voyagé dans un pays francophone?",
  "Est-ce que tu as des frères ou des sœurs?",
  "Tu préfères la ville ou la campagne?",
  "Combien de café prends-tu le matin?",
  "Qu'est-ce que tu vas faire cet après-midi?",
  "À quelle heure commence le cours?",
  "Où est-ce que tu travailles?",
  "Quelle est ta boisson préférée?",
  "Qu'est-ce que tu fais dimanche après-midi?",
  "Quel plat sais-tu cuisiner?",
  "Quel sport est-ce que tu fais?",
  "Tu parles plusieurs langues?",
  "Qu’est-ce que tu fais dans la vie?",
  "Quel livre lis-tu actuellement?",
  "Quel est ton livre préféré?",
  "Quelle est ta série préférée?",
  "Quel est ton film préféré?",
  "À quelle heure déjeunes-tu?",
  "Quel est ton plat préféré?",
  "Tu bois du thé au petit déjeuner?",
  "Quelle est ta profession?",
  "En général, comment allez-vous à l'école ou au travail?",
  "Qu'est-ce que tu prends au petit déjeuner?",
  "Où te sens-tu le plus productif - à la maison ou au bureau?",
  "Quelle était ta spécialité à l'université?",
  "Qu'est-ce que tu fais après les cours?",
  "Qu'est-ce que tu aimes faire le week-end, habituellement?",
  "Qu’est-ce que tu as vu comme expo dernièrement?",
  "Tu manges de la viande?",
  "Tu aimes le cinéma?",
  "Qu'est-ce que tu aimes comme genre de film?",
  "Quand es-tu allé au cinéma pour la dernière fois?",
  "Tu fais régulièrement du sport?",
  "Vas-tu souvent au cinéma?",
  "Vas-tu souvent dans des cafés?",
  "Quel est ton plat français préféré?",
  "Qu'est-ce que tu as fait hier?",
  "Ton week-end s'est bien passé?",
  "Quel est le dernier livre que tu as lu?",
  "Qu'est-ce que tu as étudié?"
];

function lancer() {

  return Math.floor(Math.random() * 6 + 1);

};

document.getElementById("lancerB").onclick = function () {
  let total = lancer();
  let inputElement = document.getElementById("total");
  inputElement.value = total;
  switchParti(true);
};

function drawBoard() {
  for (let i = 0; i < NUMBEROFCELLS; i++) {
    let beagleString = "";
    let goldieString = "";
    let specialName = "";
    if (gameState.beaglePosition === i) { beagleString = "(Beagle)" };
    if (gameState.goldiePosition === i) { goldieString = "(Goldie)" };
    if (i === 0) { specialName = "Départ" };
    if (i === NUMBEROFCELLS - 1) { specialName = "Arrivée" };
    document.getElementById(i).innerText = `${i} ${specialName} ${beagleString} ${goldieString}`
  }
}
// After clicking c'est parti button, beaglePosition value adds diceTotal value, reassigns it to the newPosition. 
document.getElementById("parti").onclick = function () {
  let diceTotal = document.getElementById("total").value;
  diceTotal = parseInt(diceTotal); //turn strings into numbers
  document.getElementById("total").value = "";
  let newPosition = 0;
  if (gameState['Turn'] === 'Beagle') {
    newPosition = gameState.beaglePosition + diceTotal;
    gameState.beaglePosition = newPosition;
  } else {
    newPosition = gameState.goldiePosition + diceTotal;
    gameState.goldiePosition = newPosition;
  }
  drawBoard();
  switchParti(false);
  if (newPosition < 63) {
    document.getElementById("blackboardText").innerText = `Question : ${questions[newPosition]}`;
  } else {
    gameState.Winner = gameState.Turn; //handle game over logic
    enterGameOver();
    return
  }
  // Whose turn is it? if Turn equals to playerBeagle is True, update Turn to goldie, if Turn equals to playerBeagle is False, update Turn to beagle.
  if (gameState.Turn === "Beagle") {
    gameState.Turn = 'Goldie';
  } else {
    gameState.Turn = 'Beagle';
  }
  document.getElementById("turnP").innerText = `${gameState.Turn}, c'est à toi de jouer.`;

  function printResponse(){
    // Get the value entered with an input field with the ID "responseText"
    let responseText = document.getElementById("responseText").value;
    
    console.log("Voir les réponses: ", responseText);
  }
};

function enterGameOver() {
  document.getElementById("winnerName").innerText = `${gameState.Winner} a gagné la partie.`;
  document.getElementById("blackboardText").innerText = "Question : ";
  document.querySelectorAll(".groupA").forEach(function (elem) {
    elem.style.display = "none";
  });
  document.querySelectorAll(".groupB").forEach(function (elem) {
    elem.style.display = "block";
  });
}

function enterGameLoop() {
  document.querySelectorAll(".groupB").forEach(function (elem) {
    elem.style.display = "none";
  });
  document.querySelectorAll(".groupA").forEach(function (elem) {
    elem.style.display = "block";
  });
}

document.getElementById("restartB").onclick = function () {
  restart();
}

function restart() {
  gameState.beaglePosition = 0;
  gameState.goldiePosition = 0;
  document.getElementById("total").value = "";
  switchParti(false);
  document.getElementById("turnP").innerText = `${gameState.Turn}, c'est à toi de jouer.`;
  document.getElementById("blackboardText").innerText = "Question : ";
  drawBoard();
  enterGameLoop();
}

function switchParti(enableParti){
  document.getElementById("parti").disabled = !enableParti;
  document.getElementById("lancerB").disabled = enableParti;
}
restart(); // When the page loads, we set up the game.
