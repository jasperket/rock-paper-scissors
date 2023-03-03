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
    if(playerSelection == 'Rock') {
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

function getResults(roundPlayed) {
    if(roundPlayed.search('win') != -1) {
        return 1;
    } else if(roundPlayed.search('lose') != -1) {
        return -1;
    }
    return 0;
}

function oneRound(selection) {
    const computerSelection = getComputerChoice();
    let resultAnnounce, results;
    resultAnnounce = playRound(selection,computerSelection);
    results = getResults(resultAnnounce);
    if(results === 1) {
        playerWins++;
        pScore.textContent++;
        log.style.color = '#77dd77';
    } else if (results === -1) {
        computerWins++;
        cScore.textContent++;
        log.style.color = '#ff6961';
    } else {
        log.style.color = 'black';
    }
    log.textContent = resultAnnounce;
}


let playerWins = 0;
let computerWins = 0;

const rock = document.querySelector('#rock');
rock.addEventListener('click', e => oneRound('Rock'));

const paper = document.querySelector('#paper');
paper.addEventListener('click', e => oneRound('Paper'));

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', e => oneRound('Scissors'));

const log = document.querySelector('#log');

const pScore = document.querySelector('#pScore');

const cScore = document.querySelector('#cScore');