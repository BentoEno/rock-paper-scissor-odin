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

let humanScore = 0;
let computerScore = 0;

function playGame() {
    // UI element creation
    const body = document.querySelector('body');
    const rock = document.createElement('button');
    const paper = document.createElement('button');
    const scissor = document.createElement('button');
    const humanBoard = document.createElement('div');
    const compBoard = document.createElement('div');
    const messageBoard = document.createElement('div');
    const reset = document.createElement('button');

    rock.textContent = 'rock';
    paper.textContent = 'paper';
    scissor.textContent = 'scissor';
    humanBoard.textContent = `Your Score: ${humanScore}`;
    compBoard.textContent = `Computer Score: ${computerScore}`;
    reset.textContent = 'play again';

    body.append(rock, paper, scissor, humanBoard, compBoard, messageBoard, reset);
    
    const updateScore = () => {
        humanBoard.textContent = `Your Score: ${humanScore}`;
        compBoard.textContent = `Computer Score: ${computerScore}`;
    };
    
    const playRound = (humanChoice, computerChoice) => {
        if (
            (humanChoice === 'rock' && computerChoice === 'scissor') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissor' && computerChoice === 'paper')
        ) {
            ++humanScore;
            messageBoard.textContent = 'You Win! You beat the stupid computer.';
        } else if (humanChoice === computerChoice) {
            messageBoard.textContent = "It's a Tie! Try Again.";
        } else {
            ++computerScore;
            messageBoard.textContent = 'You Lose! The stupid computer beat you!';
        }

        updateScore();

        if (humanScore === 5) {
            messageBoard.textContent = 'YOUUUU WINNN! Press reset to play again.';
        } else if (computerScore === 5) {
            messageBoard.textContent = 'You lose... Press reset to play again.';
        }
    };

    rock.addEventListener('click', () => playRound('rock', getComputerChoice()));
    paper.addEventListener('click', () => playRound('paper', getComputerChoice()));
    scissor.addEventListener('click', () => playRound('scissor', getComputerChoice())); 

    reset.addEventListener('click', () => {
        humanScore = 0;
        computerScore = 0;
        updateScore();
        messageBoard.textContent = 'Game reset! May the force be with you!';
    })
}

playGame();
