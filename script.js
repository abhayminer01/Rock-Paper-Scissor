function computerChoice() {
    let choice;
    const random = Math.floor(Math.random() * 3);
    if(random === 0) {
        choice = 'Rock';
    } else if(random === 1) {
        choice = 'Paper';
    } else {
        choice = 'Scissor';
    };
    return choice;
}

window.addEventListener('click', function(e) {
    const result = document.querySelector('.result');
    const userChoice = e.target.innerHTML;
    const computer = computerChoice();

    const res = `You : ${userChoice} - ${computer} : Computer`;
    result.innerHTML = res;
});
