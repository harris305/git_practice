let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

console.log(compareGuesses(6, 4, generateTarget()));
// Write your code below:
function generateTarget() {
    return Math.random() * 10; 
}

function compareGuesses(human, computer, secret) {
  // Retrieve distance between human and secret
  const humanDist = Math.abs(human - secret);
  // Also retrieve distance between computer and secret
  const compDist = Math.abs(computer - secret);
  // If the human guess is closer, then return true
  // If the computer guess is closer, then return false
  // If both are tied, then return true
  if (humanDist < compDist) {
    return true;
  } else if (humanDist > compDist) {
    return false;
  } else if (humanDist === compDist) {
    return true;
  }
}

function updateScore(winner) {
    // Iterate either humanscore or computerscore by one depending on the winner passed into this function (either 'human' or 'computer')
    if (winner === 'human') {
      humanScore++; 
    } else if (computer === 'computer') {
      computerScore++;
    }
    }