# The Game of Goose 
## Le jeu de l'oie

Lancez le dé, avancez votre pion du nombre de cases indiquées et lisez sur quoi vous êtes tombés. Pour gagner, il faut être le premier à arriver sur la dernière case 63.

Le jeu de l'oie est parfait pour stimuler la mémorisation du vocabulaire en classe de français langue étrangère.

## A JavaScript program to implement simplified version of Game of the Goose

Two players, Beagle and Goldie, play against each other on the same computer.

### The Two States of the Game

#### Game loop
Player Beagle always go first. 

Player rolls a dice to start the game. The player moves the piece according to the dice value rolled. The first player to reach the 63rd space wins; the program proceeds to the game over state.

#### Game over
Display the winner; players could decide to restart the game or not.

### Implementation
#### Global game state object
Create a global game state to keep track of all of the variables related to the three game states (game initialization, game loop, game over). Variables such as the position of playerBeagle and position of playerGoldie; variables such as playerTurn and winnerName.

#### Roll a dice 🎲
Player clicks “Lancer” button to roll a dice. The function lancer() is designed to return a random integer between 1 and 6 using Math.random(). Every time you call this function, it generates a new random number within that range. The function will print the result of the dice. It will then return the value.

#### Determine the active player
Whose turn is it ? The function whoseTurn() is designed to tell us whose turn it is to play; who is the active player. This function switches the player between ‘playerBeagle’ and ‘playerGoldie’, and updates the status text to indicate whose turn it is.

#### Move a piece
Player clicks "C'est parti" button, the new position of the player's piece becomes the original position plus the value of the rolled dice. The playerTurn changes to the other player. Two pieces are allowed to be at the same position. 

If the new position is equal to or greater than space 63, the program enters the game over state.

#### Enter game over state
The program enters the game over state. Display "Restart" button. Hide “Lancer” button. Hide "C'est parti" button. Hide "Résultat" form. 

The function gameReset() is designed to display an overlay with a winning message such as “The Beagle has won.” / “The Goldie has won.”. 

#### Game reset
The two pieces reset to the position zero. Hide "Restart" button. Display "Lancer" button. Display "C'est parti" button. Display "Résultat" form.