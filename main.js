playGame();
console.log('Hello Player!');
/ GET computer choice: rock, paper, or scissor / 
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

/ GET human choice: rock, paper, or scissor / 
function getHumanChoice() {
    let choice = prompt(`Lets play, What is your choice? (type: rock, paper, or scissor)`);
    if (choice.toLowerCase() === 'rock' || choice.toLowerCase() === 'paper' || choice.toLowerCase() === 'scissor') {
        choice = choice.toLowerCase();
    } else {
        choice = 'invalid choice';
    }
    return choice;
}

/*  
    IF human win: add point to human
    ELSE IF computer win: add point to computer
    ELSE the point not change
*/ 

/* IF either side gets to 5 points first, the other side lose */ 

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

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
while (humanScore < 5 && computerScore < 5) {
    playRound(getHumanChoice(), getComputerChoice());
}

if (humanScore > computerScore) {
    console.log('You Won The Game, All Hail Human Race!');
    console.log(`human score is ${humanScore} while computer score is ${computerScore}`);
    alert(`human score is ${humanScore} while computer score is ${computerScore}`);
    alert('You Won The Game, All Hail Human Race!');
} else {
    console.log('You Lose..., What a disappointment to Human Race!');
    console.log(`computer score is ${computerScore} while human score is ${humanScore}`)
    alert(`computer score is ${computerScore} while human score is ${humanScore}`)
    alert('You Lose..., What a disappointment to Human Race!');

}
}