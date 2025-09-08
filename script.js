function computerChoice() {
    let choice;
    const random = Math.floor(Math.random() * 3);
    if(random === 0) {
        choice = 'rock';
    } else if(random === 1) {
        choice = 'paper';
    } else {
        choice = 'scissor';
    };
    return choice;
}

