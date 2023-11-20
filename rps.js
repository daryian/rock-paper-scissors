let playerSelection;
let computerSelection;
let compWin = 0;
let playerWin = 0;

for (let i = 0; i < 5; i++) {
    game();
    score();
}

winner();

function getComputerChoice() {
    let choice;
    choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0:
            return 'rock';

        case 1:
            return 'paper';

        case 2:
            return 'scissors';
    }
}

function playRound(computerSelection, playerSelection) {
    console.log("The computer chose " + computerSelection + ".");
    
    switch(playerSelection) {
        case 'rock':
            if(computerSelection == 'paper') {
                console.log("Paper beats Rock. You lose!");
                compWin++;
            }

            else if(computerSelection == 'scissors') {
                console.log("Rock beats Scissors. You win!");
                playerWin++;
            }

            else {
                console.log("It's a tie!");
            }
            break;

        case 'paper':  
            if(computerSelection == 'scissors') {
                console.log("Scissors beats Paper. You lose!");
                compWin++;
            }

            else if(computerSelection == 'rock') {
                console.log("Paper beats Rock. You win!");
                playerWin++;
            }

            else {
                console.log("It's a tie!");
            }
            break;

         case 'scissors':
            if(computerSelection == 'rock') {
                console.log("Rock beats Scissors. You lose!");
                compWin++;
            }

            else if(computerSelection == 'paper') {
                console.log("Scissors beats Paper. You win!");
                playerWin++;
            }

            else {
                console.log("It's a tie!")
            }
            break;
    }
}

function game() {
    let playerSelection = prompt("Rock, Paper or Scissors?");
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice();
    playRound(computerSelection, playerSelection);
}

function winner() {
    if(compWin > playerWin) {
        console.log("Computer Wins!");
    }

    else if(playerWin > compWin) {
        console.log("Player Wins!");
    }

    else {
        console.log("It's a TIE!");
    }
}

function score() {
    console.log("Player's Points: " + playerWin);
    console.log("Computer's Points: "+ compWin);
}