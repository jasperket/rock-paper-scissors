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
    if(playerSelection == 'PAPER') {
        if(computerSelection == 'Rock') {
            return 'You win! Paper beats Rock';
        }
        if(computerSelection == 'Paper') {
            return 'Draw! Paper draws Paper';
        } 
        return 'You lose! Scissors beats Paper';
    }
    if(playerSelection == 'SCISSORS') {
        if(computerSelection == 'Rock') {
            return 'You lose! Rock beats Scissors';
        }
        if(computerSelection == 'Paper') {
            return 'You win! Scissors beats Paper';
        } 
        return 'Draw! Scissors draws Scissors';
    }
}

function getResults(roundPlayed) {
    if(roundPlayed.search('win') != -1) {
        return 1;
    } else if(roundPlayed.search('lose') != -1) {
        return -1;
    }
    return 0;
}

let playerWins = 0;
let computerWins = 0;

for(let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt('Select your weapon! (Rock, paper, scissors)');
    const resultAnnounce = playRound(playerSelection,computerSelection);
    const results = getResults(resultAnnounce);
    if(results === 1) {
        playerWins++;
    } else if (results === -1) {
        computerWins++;
    }
    console.log(resultAnnounce);
}