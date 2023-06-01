function getComputerChoice() {
    //console.log(getRandomArbitrary(1, 4));
    let cpuChoice = parseInt(getRandomArbitrary(1, 4));
    if(cpuChoice == 1)
        return "rock";
    else if(cpuChoice == 2)
        return "paper";
    else   
        return "scissors";
}

function getRandomArbitrary(min, max){
    return Math.random() * (max - min) + min;
}

function playerSelection(){
    let myselection = "rock";
    return myselection;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection= computerSelection.toLowerCase();

    if(playerSelection == "rock" && computerSelection == "paper")
        console.log("CPU WINS");
    else if(playerSelection == "rock" && computerSelection == "rock")
        console.log("ITS A TIE");
    else if(playerSelection == "rock" && computerSelection == "scissors")
        console.log("ITS A TIE");
    else if(playerSelection == "paper" && computerSelection == "paper")
        console.log("ITS A TIE");
    else if(playerSelection == "paper" && computerSelection == "rock")
        console.log("PLAYER WINS");
    else if(playerSelection == "paper" && computerSelection == "scissors")
        console.log("CPU WINS");
    else if(playerSelection == "scissors" && computerSelection == "scissors")
        console.log("ITS A TIE");
    else if(playerSelection == "scissors" && computerSelection == "paper")
        console.log("PLAYER WINS");
    else if(playerSelection == "scissors" && computerSelection == "rock")
        console.log("CPU WINS");
    else
        console.log("IMPOSSIBLEEEE");
}

playRound(playerSelection(), getComputerChoice());
