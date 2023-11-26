//Dev note: Still encountering issue when replay button is hit, it starts the first round with no
//answer from user, thus only having 4 rounds instead of 5.
//id "textbox" is also not resetting with reset(). 
let playerSelection;
let computerSelection;
let compWin = 0;
let playerWin = 0;
let rounds = 0;


//DOM Manipulation to make buttons responsive
const buttons = document.querySelectorAll(".btns");
const replay = document.getElementById("replay-button");

document.getElementById("replay-button").style.visibility = 'hidden';
replay.addEventListener('click', () => {
    reset();
});

document.getElementById("rock").value = "rock";
document.getElementById("paper").value = "paper";
document.getElementById("scissors").value = "scissors";
    
buttons.forEach((button) => {
button.addEventListener('click', () => {
    let x = button.value;
    playerSelection = x;

    game();
    score(); 
    rounds++;
        
    if(rounds === 5)
    {
        winner();
        rounds = 0;
        document.getElementById("replay-button").style.visibility ='visible';
    } 
    });        
});       

//Generates a random number and assigns a value of RPS accordingly
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

//switch case function to determine winner
function playRound(computerSelection, playerSelection) {
    document.getElementById("textbox").innerText = "The computer chose " + computerSelection + ".";
    
    switch(playerSelection) {
        case 'rock':
            if(computerSelection == 'paper') {
                document.getElementById("wintieloss").innerText = "you lose!";
                compWin++;
            }

            else if(computerSelection == 'scissors') {
                document.getElementById("wintieloss").innerText = "You win!";               
                playerWin++;
            }

            else {
                document.getElementById("wintieloss").innerText = "it's a tie!";
            }
            break;

        case 'paper':  
            if(computerSelection == 'scissors') {
                document.getElementById("wintieloss").innerText = "You lose!";
                compWin++;
            }

            else if(computerSelection == 'rock') {
                document.getElementById("wintieloss").innerText = "You win!";
                playerWin++;
            }

            else {
                document.getElementById("wintieloss").innerText = "it's a tie!";
            }
            break;

         case 'scissors':
            if(computerSelection == 'rock') {
                document.getElementById("wintieloss").innerText = "You lose!";                
                compWin++;
            }

            else if(computerSelection == 'paper') {
                document.getElementById("wintieloss").innerText = "You win!";                
                playerWin++;
            }

            else {
                document.getElementById("wintieloss").innerText = "it's a tie!";
            }
            break;
    }
}

//initiates the game and plays a full round
function game() { 
    let computerSelection = getComputerChoice();
    playRound(computerSelection, playerSelection);
}

//determines winner based off score of user
function winner() {
    if(compWin > playerWin) {
        document.getElementById("textbox").innerText = "Computer wins, you lose!";
        document.getElementById("wintieloss").innerText = "";
    }

    else if(playerWin > compWin) {
        document.getElementById("textbox").innerText = "Congratulations, you win!";
        document.getElementById("wintieloss").innerText = "";
    }

    else {
        document.getElementById("textbox").innerText = "it's a tie!";
        document.getElementById("wintieloss").innerText = "";
     }
}

//tracks and outputs score
function score() {
    document.getElementById("player-score").innerText = playerWin;
    document.getElementById("computer-score").innerText = compWin;
}

function reset() {
    document.getElementById("textbox").innerText = "Choose your weapon!";
    document.getElementById("winlosetie").innerText = "";
    document.getElementById("replay-button").style.visibility = 'hidden';
    compWin = 0;
    playerWin = 0;
    rounds = 0;
}