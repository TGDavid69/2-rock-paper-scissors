
//unsure how to solve the issue of keeping score
//without using global variables like this. I'm assuming
//we ought to use some form of set/get functions to
//keep the variables within our functions but yeah.
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){

    const computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice){
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

//removed the parameters because it was driving me insane
//going back and forth when testing to see if the functions worked
//I don't even think they are necessary, seeing as one is a user prompt
//and the other is randomly generated. I don't see the need for parameters here
function singleRound(){

    let userInput = prompt("What would you like to throw: ");
    let playerSelection = userInput.toLowerCase();
    const computerSelection = getComputerChoice();

    const tieMessage = `It's a tie! Both you and the computer chose ${computerSelection}`;

    let roundResult;
    switch (playerSelection){
        case "rock":
            if (computerSelection === "Rock"){
                roundResult = tieMessage;
            }
            else if (computerSelection === "Paper"){
                roundResult = "You lose! Rock loses to Paper.";
                computerScore++;
            }
            else if (computerSelection === "Scissors"){
                roundResult = "You win! Rock beats Scissors.";
                playerScore++;
            }
            break;

        case "paper":
            if (computerSelection === "Rock"){
                roundResult = "You win! Paper beats Rock.";
                playerScore++;
            }
            else if (computerSelection === "Paper"){
                roundResult = tieMessage;
            }
            else if (computerSelection === "Scissors"){
                roundResult = "You lose! Paper loses to Scissors.";
                computerScore++;
            }
            break;

        case "scissors":
            if (computerSelection === "Rock"){
                roundResult = "You lose! Scissors loses to Rock.";
                computerScore++;
            }
            else if (computerSelection === "Paper"){
                roundResult = "You win! Scissors beats Paper.";
                playerScore++;
            }
            else if (computerSelection === "Scissors"){
                roundResult = tieMessage;
            }
            break;

        default: 
            roundResult = "Please only enter either rock, paper, or scissors. Round was not played.";
    }
    return roundResult;    
}
//function that runs the singleRound function 5 times and displays
//the final score, along with a winner.
function game(){

    for (let i = 0; i < 5; i++){
        console.log(singleRound());
        //singleRound();
    }

    let finalScore = `The final score is ${playerScore} to ${computerScore}`;
    let finalResult;
    (playerScore < computerScore) ?
    finalResult = `${finalScore}. The computer wins...`:
    (playerScore > computerScore) ?
    finalResult = `${finalScore}. You win!!! `:
    //(playerScore === computerScore) ? Unnecessary.
    finalResult = `${finalScore}. It's a tie O:`;

    return finalResult;
    //resetting scores to 0. I know we can just refresh and there's
    //no UI to actually reset but yeah lol
    playerScore = 0;
    computerScore = 0;
}

console.log(game());


/* console.log(singleRound());
console.log(singleRound());
console.log(singleRound());
console.log(playerScore);
console.log(computerScore); */
