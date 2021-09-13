
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
    //console.log(playerSelection + " comp:" + computerSelection);
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
    h1.textContent = (`You ${result}. Computer chose ${computerSelection} but you chose ${playerSelection}.`);
    
    if (result == "won") {
        playerScore++;
    }
    else if (result == "lost") {
        compScore++;
    }
    player.textContent = "Player: " + playerScore;
    computer.textContent = "Computer: " + compScore;
    if (compScore == 5 || playerScore == 5) {
        //console.log("sdflkjsdflksd");
        buttons.forEach( (button) => {
            button.removeEventListener("click", play);
        })
    }
    if ( compScore == 5) {
        h1.textContent =`You lost! Computer scored ${compScore} but you scored ${playerScore}!`;
    }
    else if (playerScore == 5) {
        h1.textContent = `You won! Computer scored ${compScore} but you scored ${playerScore}!`;
    }



    
}

function play(e) {
    //console.log(button.getAttribute("class"));
    playRound(e.target.getAttribute("class"), computerPlay());
}

let playerScore = 0;
let compScore = 0;
let buttons = document.querySelectorAll("button");
let player = document.querySelector(".player");
let computer = document.querySelector(".computer");
let h1 = document.querySelector("h1");

console.log(buttons);
buttons.forEach( (button) => {
    button.addEventListener("click", play);
})

