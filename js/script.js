function getPlayerPick() { 
    result.innerText = playerRound(this.id, computerPlay());
    cpuDiv.appendChild(result);
}

//random play from pc
function computerPlay() {
    let play = Math.floor(Math.random() * 3); //random between 0 and 2

    if (play === 0) {
        return "rock";
    }
    else if (play === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

//we decide the outcome here
function playerRound(playerSelection, computerSelection) {
    let playerPick = playerSelection.toUpperCase();
    let computerPick = computerPlay().toUpperCase();

    //verifying winning/losing options
    if ((playerPick == "ROCK" && computerPick == "SCISSORS") ||
        (playerPick == "PAPER" && computerPick == "ROCK") ||
        (playerPick == "SCISSORS" && computerPick == "PAPER")) {

        playerWin++;
        showScore();
        return `You win! ${playerPick} beats ${computerPick}`;
    }
    else if ((playerPick == "ROCK" && computerPick == "PAPER") ||
        (playerPick == "PAPER" && computerPick == "SCISSORS") ||
        (playerPick == "SCISSORS" && computerPick == "ROCK")) {

        computerWin++;
        showScore();
        return `You lost! ${computerPick} beats ${playerPick}`;
    }
    else {
        showScore();
        return `It's a draw between ${playerPick} and ${computerPick}`;        
    }
}

function showScore() {
    score.innerText = `Actual Score: \n player: ${playerWin} vs computer: ${computerWin}`;
    cpuDiv.appendChild(score);

    console.log(`Actual Score: \n player: ${playerWin} vs computer: ${computerWin}`);
}

//getting user input and play
const buttons = document.querySelectorAll('.btn');
const cpuDiv = document.querySelector('.cpuOptions');
const score = document.createElement('p');
const result = document.createElement('p');

let userPick = "";
let playerWin = 0;
let computerWin = 0;

buttons.forEach(button => button.addEventListener('click', getPlayerPick));

// //to play a 5 game round
// function game() {
//     return (playerWin == 3) ? "You won!"
//         : (computerWin == 3) ? "Computer wins"
//             : "It's a draw";
// }



// for (let i = 0; i < 5; i++) {
//     console.log(`Round ${i + 1}`);
//     let userPick = prompt("Pick your choice! Rock, Paper or Scissors!");
//     console.log(playerRound(userPick, computerPlay()));
// }

// game();