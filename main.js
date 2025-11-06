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

    rock.textContent = 'rock';
    paper.textContent = 'paper';
    scissor.textContent = 'scissor';

    body.append(rock, paper, scissor);
    
    rock.addEventListener('click', () => playRound('rock', getComputerChoice()));
    paper.addEventListener('click', () => playRound('rock', getComputerChoice()));
    scissor.addEventListener('click', () => playRound('rock', getComputerChoice()));


    const playRound = (humanChoice, computerChoice) => {
        if (humanChoice === 'rock' && computerChoice === 'scissor' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissor' && computerChoice === 'paper') {
            ++humanScore;
            console.log('You Win!, you beat the stupid computer');
            alert('You Win!, you beat the stupid computer');
        } else if (humanChoice === computerChoice) {
            console.log(`It's a Tie! Try Again`);
            alert(`It's a Tie! Try Again`);
        } else if (humanChoice === 'paper' && computerChoice === 'scissor' || humanChoice === 'scissor' && computerChoice === 'rock' || humanChoice === 'rock' && computerChoice === 'paper'){
            ++computerScore;
            console.log(`You Lose!, the stupid computer beat you!`);
            alert(`You Lose!, the stupid computer beat you!`);
        } else {
            alert('Please enter a valid choice')
        }
    }

    


}