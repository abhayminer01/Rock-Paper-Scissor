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

var win = 0, lose = 0, tie = 0;
const winComponent = document.querySelector('.win');
const loseComponent = document.querySelector('.lose');
const tieComponent = document.querySelector('.tie');

window.addEventListener('click', function(e) {
    const result = document.querySelector('.result');
    const userChoice = e.target.innerHTML;
    const computer = computerChoice();

    const res = `You : ${userChoice} - ${computer} : Computer`;
    result.innerHTML = res;

    findResult(userChoice, computer);
    updateResult();
});


function findResult(user, computer) {
    if(user === computer) {
        tie += 1;
    } else if(user === 'Rock' && computer === 'Paper') {
        lose += 1;
    } else if(user === 'Paper' && computer === 'Rock') {
        win += 1;
    } else if(user === 'Scissor' && computer === 'Paper') {
        win += 1;
    } else if(user === 'Paper' && computer === 'Scissor') {
        lose += 1;
    } else if(user === 'Scissor' && computer === 'Rock') {
        lose += 1;
    } else if(user === 'Rock' && computer === 'Scissor') {
        win += 1;
    } else {
        return;
    }
}

function updateResult() {
    winComponent.innerHTML = "Win : " + win;
    loseComponent.innerHTML = "Lose : " + lose;
    tieComponent.innerHTML = "Tie : " + tie;
}