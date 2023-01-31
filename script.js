function getComputerChoice() {
    const random = Math.random();
    if(random < (1/3)) {
        return 'Rock';
    }
    if(random < (2/3)) {
        return 'Paper';
    }
    return 'Scissors;'
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    if(playerSelection == 'ROCK') {
        if(computerSelection == 'Rock') {
            return 'Draw! Rock draws Rock';
        }
        if(computerSelection == 'Paper') {
            return 'You lose! Paper beats Rock';
        } 
        return 'You win! Rock beats Scissors';
    }
    if(playerSelection == 'Paper') {
        if(computerSelection == 'Rock') {
            return 'You win! Paper beats Rock';
        }
        if(computerSelection == 'Paper') {
            return 'Draw! Paper draws Paper';
        } 
        return 'You lose! Scissors beats Paper';
    }
    if(playerSelection == 'Scissors') {
        if(computerSelection == 'Rock') {
            return 'You lose! Rock beats Scissors';
        }
        if(computerSelection == 'Paper') {
            return 'You win! Scissors beats Paper';
        } 
        return 'Draw! Scissors draws Scissors';
    }
}

const playerSelection = prompt("Select your weapon! (Rock, Paper, or Scissors)");
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection,computerSelection));