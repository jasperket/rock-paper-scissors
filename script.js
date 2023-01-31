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