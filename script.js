
let playerScores=0;
let computerScores=0;
const scoresDiv = document.querySelector('.score');
const main = document.querySelector('.main');
const announ = document.querySelector ('.announ');
const playerScoresDiv = document.createElement('div');
playerScoresDiv.classList.add('scoretext');

const computerScoresDiv = document.createElement('div');
computerScoresDiv.classList.add('scoretext');

const winnerAnnouncement = document.createElement('h3');
winnerAnnouncement.classList.add('winner');


const computerPlay = () => {
    const choices=["ROCK", "PAPER", "SCISSORS"];
    const random = Math.floor(Math.random()*choices.length);
    return choices[random];
}

const playRound= (playerSelection, computerSelection) => {
    if(playerSelection.toUpperCase()==="ROCK"){
        if(computerSelection.toUpperCase()==="PAPER"){
            return -1;
        }
        else if(computerSelection.toUpperCase()==="SCISSORS"){
            return  1;
        }
        else {
            return  0;
        }
    }
    else if(playerSelection.toUpperCase()==="PAPER"){
        if(computerSelection.toUpperCase()==="ROCK"){
            return 1;
        }
        else if(computerSelection.toUpperCase()==="SCISSORS"){
            return -1;
        }
        else {
            return 0;
        }
    }

    else if(playerSelection.toUpperCase()==="SCISSORS"){
        if(computerSelection.toUpperCase()==="ROCK"){
            return -1;
        }
        else if(computerSelection.toUpperCase()==="PAPER"){
            return 1;
        }
        else {
            return 0;
        }
    }
}


const showTheScores = () => {
    playerScoresDiv.textContent = `Player: ${playerScores}`;
    scoresDiv.appendChild(playerScoresDiv);
    computerScoresDiv.textContent = `Computer: ${computerScores}`;
    scoresDiv.appendChild(computerScoresDiv);
}

showTheScores();

const game = (e) => {
    const playerSelection = e.target.id;
    const computerSelection = computerPlay();
    if(playRound(playerSelection, computerSelection)===1){
            playerScores++;
        }
    else if(playRound(playerSelection, computerSelection)===-1){
            computerScores++;
        } 
}

const check = (e) => {
    game(e); 
    showTheScores();
    if(computerScores >= 5){
        winnerAnnouncement.textContent = "Sorry! Computer beats you. Try next time";
        winnerAnnouncement.style.color="red";
        announ.appendChild(winnerAnnouncement);
        playerScores= 0;
        computerScores = 0;
    }
    else if(playerScores >= 5){
        winnerAnnouncement.textContent = "YES! You are the winner. Congratz!";
        winnerAnnouncement.style.color="royalblue";
        announ.appendChild(winnerAnnouncement);
        playerScores= 0;
        computerScores = 0;
    }
    else{
        winnerAnnouncement.textContent = "Can you beat the computer? ";
        winnerAnnouncement.style.color ="white";
        announ.appendChild(winnerAnnouncement);
    }

}


const buttonPlay = document.createElement('button');
buttonPlay.classList.add('playbutton');
buttonPlay.textContent= "Play";
main.appendChild(buttonPlay);

buttonPlay.addEventListener('click', () => {
playerScores= 0;
computerScores = 0;
}
);

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

  button.addEventListener('click', check);
});