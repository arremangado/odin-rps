let playerScore = 0;
let cpuScore = 0;
let roundResult;

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
        cpuScore++;
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
        playerScore++;
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
        playerScore++;
        return 1;
    }
    else if(playerSelection == "paper" && computerSelection == "scissors")
    {
        console.log("CPU WINS");
        cpuScore++;
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
        playerScore++;
        return 1;
    }
    else if(playerSelection == "scissors" && computerSelection == "rock")
    {
        console.log("CPU WINS");
        cpuScore++;
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

function playerSelectedRock(){
    //let myselection = prompt("Enter player selection");
    //return myselection;
   // console.log("Rock SELECTED");
    roundResult = playRound('rock', getComputerChoice());
    playerScoreElement.innerHTML = playerScore;
    cpuScoreElement.innerHTML = cpuScore;
    if(playerScore == 5 || cpuScore == 5 ){
        gameOver();
        return;
    }
    if(roundResult == 1){
        playerWinsRoundAnimation();
    }
    else if(roundResult == 2){
        cpuWinsRoundAnimation();
    }
      else if(roundResult == 3){
        tiedRound();
    }
    else
    console.log(roundResult);
}

function playerSelectedPaper(){
    //let myselection = prompt("Enter player selection");
    //return myselection;
   // console.log("Paper SELECTED");
   roundResult = playRound('paper', getComputerChoice());
    playerScoreElement.innerHTML = playerScore;
    cpuScoreElement.innerHTML = cpuScore;
    if(playerScore == 5 || cpuScore == 5 ){
        gameOver();
        return;
    }
    if(roundResult == 1){
        playerWinsRoundAnimation();
    }
    else if(roundResult == 2){
        cpuWinsRoundAnimation();
    }
    else if(roundResult == 3){
        tiedRound();
    }
    else
        console.log(roundResult);
}

function playerSelectedScissors(){
    //let myselection = prompt("Enter player selection");
    //return myselection;
    //console.log("Scissors SELECTED");
    roundResult = playRound('scissors', getComputerChoice());
    playerScoreElement.innerHTML = playerScore;
    cpuScoreElement.innerHTML = cpuScore;
    if(playerScore == 5 || cpuScore == 5 ){
        gameOver();
        return;
    }
    if(roundResult == 1){
        playerWinsRoundAnimation();
    }
    else if(roundResult == 2){
        cpuWinsRoundAnimation();
    }
    else if(roundResult == 3){
        tiedRound();
    }
    else
    console.log(roundResult);
}

function gameOverAnimation(){
    playerScoreElement.remove();
    cpuScoreElement.remove();
}

function playerWinsRoundAnimation(){
    pageBackground.style.backgroundColor = 'green';
    setTimeout(() => {
        pageBackground.style.backgroundColor = '#ebebeb';
      }, 100);
}

function cpuWinsRoundAnimation(){
    pageBackground.style.backgroundColor = 'red';
    setTimeout(() => {
        pageBackground.style.backgroundColor = '#ebebeb';
      }, 100);
}

function tiedRound(){
    pageBackground.style.backgroundColor = 'grey';
    setTimeout(() => {
        pageBackground.style.backgroundColor = '#ebebeb';
      }, 100);
}

function setupResetButton(myButton){
    this.style.innerHTML = 'Play again?';
    this.style.display = 'flex';
    this.style.justifyContent = 'center';
}

function refreshPage(){
    window.location.reload();
} 

function playerWinsGameAnimation(){
    pageBackground.style.backgroundColor = 'green';
    playerScoreElement.remove();
    cpuScoreElement.remove();
    welcomeMessage.remove();
    footer.remove();
    buttonArea.remove();
    scoresArea.remove();
    scoresValue.remove();
    const resetButton = document.createElement("button");
    document.body.appendChild(resetButton);
    //setupResetButton(resetButton);
    resetButton.innerHTML = 'Play again?';
    resetButton.style.display = 'flex';
    resetButton.style.justifyContent = 'center';
    resetButton.style.backgroundColor = 'white';
    resetButton.style.margin = 'auto';
    resetButton.addEventListener("click", refreshPage);
}


function cpuWinsGameAnimation(){
    pageBackground.style.backgroundColor = 'red';
    playerScoreElement.remove();
    cpuScoreElement.remove();
    welcomeMessage.remove();
    footer.remove();
    buttonArea.remove();
    scoresArea.remove();
    scoresValue.remove();
    const resetButton = document.createElement("button");
    document.body.appendChild(resetButton);
    //setupResetButton(resetButton);
    resetButton.innerHTML = 'Play again?';
    resetButton.style.display = 'flex';
    resetButton.style.justifyContent = 'center';
    resetButton.style.backgroundColor = 'white';
    resetButton.style.margin = 'auto';
    resetButton.addEventListener("click", refreshPage);
}

function flashWinnerMessage(){
    if(resultElement.style.color == 'white')
        resultElement.style.color = 'black';
    else
        resultElement.style.color = 'white';
}

function gameOver(){
    if(playerScore > cpuScore){
        resultElement.innerHTML = "PLAYER WINS!!!";
        resultElement.style.display = 'flex';
        resultElement.style.color = 'white';
        resultElement.style.fontFamily = 'Marker Felt';
        resultElement.style.fontSize = '100px';
        resultElement.style.margin = 'auto';
        resultElement.style.justifyContent = 'center';
        resultElement.style.padding = '200px';
        setInterval(flashWinnerMessage, 500);
        playerWinsGameAnimation();
    }
    else if(cpuScore > playerScore){
        resultElement.innerHTML = "CPU WINS \n:(";
        resultElement.style.color = 'black';
        resultElement.style.display = 'flex';
        resultElement.style.fontFamily = 'Marker Felt';
        resultElement.style.fontSize = '100px';
        resultElement.style.margin = 'auto';
        resultElement.style.justifyContent = 'center';
        resultElement.style.padding = '200px';
        cpuWinsGameAnimation();
    }
    else
        console.log("ERROR???");
}

document.getElementById("rock").addEventListener("click", playerSelectedRock);
document.getElementById("paper").addEventListener("click", playerSelectedPaper);
document.getElementById("scissors").addEventListener("click", playerSelectedScissors);



const playerScoreElement = document.getElementById("playerScore");
const cpuScoreElement = document.getElementById("cpuScore");
const resultElement = document.getElementById("gameOverSection");
const pageBackground = document.querySelector("body");
const buttonArea = document.getElementById("buttonArea");
const welcomeMessage = document.getElementById("welcomeMessage");
const footer = document.getElementById("footer");
const scoresArea = document.getElementById("scores");
const scoresValue = document.getElementById("scoresValue");
//const bodyContainer = document.querySelector("body");

//document.getElementById("PlayerScore").addEventListener("click", playerSelection);



