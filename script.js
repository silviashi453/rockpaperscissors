function computerPlay(){
    const choices=["ROCK", "PAPER", "SCISSORS"];
    const random = Math.floor(Math.random()*choices.length);
    return choices[random];
}

function playRound(playerSelection, computerSelection) {
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



function game(){
    let playerScores=0;
    let computerScores=0;
    for(let i=1; i<=5; i++){
        const playerSelection = window.prompt("Enter your input: ");
        const computerSelection = computerPlay();
        if(playRound(playerSelection, computerSelection)===1){
            playerScores++;
        }
        else if(playRound(playerSelection, computerSelection)===-1){
            computerScores++;
        } 
        console.log("Player Scores : " + playerScores);
        console.log("Computer Scores : " + computerScores);
    }

   if(playerScores>computerScores){
    console.log("You are the winner. Congratz!");
} else{
    console.log("Sorry! Computer beats you. Try next time");
}
}

game();