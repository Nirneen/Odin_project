const choises = ["rock", "paper", "scissors"]
let cScore = 0
let pScore = 0

function getComputerChoice(choises) {
    return choises[Math.floor(Math.random() * 3)];
}

function resetScore(){
    const computerScore = document.querySelector('.computer-score');
    const playerScore = document.querySelector('.player-score');

    cScore = 0;
    pScore = 0;
    
    playerScore.textContent = "player score: " + pScore;
    computerScore.textContent = "computer score: " + cScore;
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice(choises);

    const computerScore = document.querySelector('.computer-score');
    const playerScore = document.querySelector('.player-score');

    console.log("computer choise: " + computerSelection);
    console.log("player choise: " + playerSelection);

    let result = ""

    if (playerSelection === computerSelection){
        result = "draw";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        result =  "Player win";
        pScore += 1;
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        result = "Player win";
        pScore += 1;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        result =  "Player win";
        pScore += 1;
    }
    else {
        result = "Computer Win"
        cScore += 1;
    }

    console.log("result: " + result);

    playerScore.textContent = "player score: " + pScore;
    computerScore.textContent = "computer score: " + cScore;
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const reset = document.querySelector(".reset")


rock.addEventListener('click', () => playRound('rock', cScore, pScore));
paper.addEventListener('click', () =>  playRound('paper', cScore, pScore));
scissors.addEventListener('click', () =>  playRound('scissors', cScore, pScore));
reset.addEventListener("click", () => resetScore())
