const choises = ["rock", "paper", "scissors"]

function getComputerChoice(choises) {
    return choises[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "draw"
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        return "rock(i) win";
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        return "paper(i) win";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "scissors(i) win";
    }
    else {
        return "I lose"
    }
}

const playerSelection = prompt("rock paper scissors?");
const computerSelection = getComputerChoice(choises);
console.log("computer choise: " + computerSelection);
console.log(playRound(playerSelection.toLowerCase, computerSelection));