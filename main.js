playGame();
function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            choice = 'rock';
            break;
        case 1:
            choice = 'paper';
            break;
        case 2:
            choice = 'scissor';
            break;
        default:
            choice = 'invalid choice'
    }
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    // UI element creation
    const body = document.querySelector('body');
    const rock = document.createElement('button');
    const paper = document.createElement('button');
    const scissor = document.createElement('button');
    const humanBoard = document.createElement('div');
    const compBoard = document.createElement('div');
    const messageBoard = document.createElement('div');

    rock.textContent = 'rock';
    paper.textContent = 'paper';
    scissor.textContent = 'scissor';
    humanBoard.textContent = `Your Score: ${humanScore}`;
    compBoard.textContent = `Computer Score: ${computerScore}`;

    body.append(rock, paper, scissor, humanBoard, compBoard, messageBoard);

    rock.addEventListener('click', () => playRound('rock', getComputerChoice()));
    paper.addEventListener('click', () => playRound('rock', getComputerChoice()));
    scissor.addEventListener('click', () => playRound('rock', getComputerChoice()));

    
    const playRound = (humanChoice, computerChoice) => {
        if (humanChoice === 'rock' && computerChoice === 'scissor' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissor' && computerChoice === 'paper') {
            ++humanScore;
            messageBoard.textContent = 'You Win!, you beat the stupid computer';
            humanBoard.textContent = `Your Score: ${humanScore}`;
        } else if (humanChoice === computerChoice) {
            messageBoard.textContent = `It's a Tie! Try Again`;
        } else if (humanChoice === 'paper' && computerChoice === 'scissor' || humanChoice === 'scissor' && computerChoice === 'rock' || humanChoice === 'rock' && computerChoice === 'paper'){
            ++computerScore;
            messageBoard.textContent = `You Lose!, the stupid computer beat you!`;
            compBoard.textContent = `Computer Score: ${computerScore}`;
        } 
    }
}