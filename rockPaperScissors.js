
function computerPlay() {

    let num = Math.round(Math.random() * 100);
    if (num <=33) {
        return "rock";
    }
    else if ( num >= 67) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result;
    switch(playerSelection){
        case "rock":
            switch(computerSelection){
                case "rock":
                    result = "tied";
                    break;
                case "paper":
                    result = "lost";
                    break;
                default:
                    result = "won"
            }
            break;
        case "paper":
            switch(computerSelection){
                case "rock":
                    result = "won";
                    break;
                case "paper":
                    result = "tied";
                    break;
                default:
                    result = "lost"
            }
            break;
        default:
            switch(computerSelection){
                case "rock":
                    result = "lost";
                    break;
                case "paper":
                    result = "won";
                    break;
                default:
                    result = "tied"
            }
            //chose scissors
    }
    console.log(`You ${result}. Computer chose ${computerSelection} but you chose ${playerSelection}.`);
    
    if (result == "won") {
        return 1;
    }
    else if (result == "tied") {
        return 0;
    }
    else {
        return -1;
    }
    
}

function game() {
    let playerScore = 0;
    let compScore = 0;
    let playerSelection;
    for (let i = 0; i < 5; i++) {
        playerSelection = window.prompt("What is your choice?").toLowerCase();
        while (playerSelection != "rock" && playerSelection !="paper" && playerSelection !="scissors") {
            playerSelection = window.prompt("Please repeat your selection.").toLowerCase();
        }
        let resultInt = playRound(playerSelection, computerPlay());
        
        if (resultInt == 1) {
            playerScore++;
        }
        else if ( resultInt == 0) {
            playerScore++;
            compScore++;
        }
        else {
            compScore++;
        }
    }

    if ( compScore > playerScore) {
        console.log( `You lost! Computer scored ${compScore} but you scored ${playerScore}!`);
    }
    else if ( compScore < playerScore) {
        console.log( `You won! Computer scored ${compScore} but you scored ${playerScore}!`);
    }
    else{
        console.log("You tied! Both of you scored the same.");
    }
}

function debug() {
    let net = 0;
    for (let i = 0; i <100; i++) {
        net = net + playRound("rock", computerPlay());
    }
    console.log(net);
}