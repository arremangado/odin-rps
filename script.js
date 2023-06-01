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
    let myselection = prompt("Enter player selection");
    return myselection;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection= computerSelection.toLowerCase();

    if(playerSelection == "rock" && computerSelection == "paper")
    {
        console.log("CPU WINS");
        return 2;
    }
    else if(playerSelection == "rock" && computerSelection == "rock")
    {
        console.log("ITS A TIE");
        return 3;
    }
    else if(playerSelection == "rock" && computerSelection == "scissors")
    {
        console.log("PLAYER WINS");
        return 1;
    }
    else if(playerSelection == "paper" && computerSelection == "paper")
    {
        console.log("ITS A TIE");
        return 3;
    }
    else if(playerSelection == "paper" && computerSelection == "rock")
    {
        console.log("PLAYER WINS");
        return 1;
    }
    else if(playerSelection == "paper" && computerSelection == "scissors")
    {
        console.log("CPU WINS");
        return 2;
    }
    else if(playerSelection == "scissors" && computerSelection == "scissors")
    {
        console.log("ITS A TIE");
        return 3;
    }
    else if(playerSelection == "scissors" && computerSelection == "paper")
    {
        console.log("PLAYER WINS");
        return 1;
    }
    else if(playerSelection == "scissors" && computerSelection == "rock")
    {
        console.log("CPU WINS");
        return 2;
    }
    else
        console.log("IMPOSSIBLEEEE");

   // console.log(`${playerSelection} beats ${computerSelection}`);
}

function game() {
    let playerScore = 0;
    let cpuScore = 0;
    let roundWinner = 0;
    for (let i = 0; i < 5; i++) {
        roundWinner = (playRound(playerSelection(), getComputerChoice()));
        if(roundWinner == 1)
            playerScore++;
        else if(roundWinner == 2)
            cpuScore++;
        else
            continue;
    }
    if(playerScore > cpuScore)
        console.log("Player wins the game.");
    else if(cpuScore > playerScore)
        console.log("CPU wins the game.");
    else
        console.log("ERROR???");
}

game();