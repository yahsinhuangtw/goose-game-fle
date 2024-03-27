# The Game of Goose 
## Le jeu de l'oie

Lancez le dé, avancez votre pion du nombre de cases indiquées et lisez sur quoi vous êtes tombés. Pour gagner, il faut être le premier à arriver sur la dernière case 23.

Le jeu de l'oie est parfait pour stimuler la mémorisation du vocabulaire en classe de français langue étrangère.

## A JavaScript program to implement simplified version of Game of the Goose

Two players, Beagle and Goldie, play against each other. The players each roll the dice (press “Lancer” to roll), and the person who rolls the highest becomes the first player.

The player then rolls a dice to start playing. The player moves the piece according to the dice value rolled. The first player to reach the 23rd space wins.

### Implementation:
Create seven functions for this project. 

#### Roll a dice 🎲
The function lancer() is designed to return a random integer between 1 and 6 using Math.random(). Every time you call this function, it generates a new random number within that range. The function will print the result of the dice. It will then return the value.

#### Print board 
The function printBoard() is designed to output the current board state. It has one parameter — the current positions of both players. The function will not have a return value.

#### Move a piece
The function makeMove() is designed to move the player’s piece to a space. Find the piece’s current position index, move the piece forward to the targeted position, moving one space at a time, using setTimeout.

#### Determine the active player
Whose turn is it ? The function whoseTurn() is designed to tell us whose turn it is to play; who is the active player. This function switches the player between ‘playerBeagle’ and ‘playerGoldie’, and updates the status text to indicate whose turn it is.

#### Game over
The function gameOver() is designed to return True if game has ended; return False if game is not yet over.

#### Declare a winner
The function declareWinner() is designed to determine if any of the pieces has landed on space 23. Return True if a player has reached space 23; return False if no one has reached space 23 yet.

#### Displaying the winning player
The function displayWinner() is designed to display an overlay with a winning message such as “The Beagle has won.” / “The Goldie has won.”. The function includes a reset game button.