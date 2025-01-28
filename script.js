console.log("Hello World");

function getComputerChoice(){
    const options = ["Rock","Paper","Scissor"];
    let choice = Math.floor(Math.random()*3);
    console.log(options[choice]);
    return options[choice];
    
}

function getHumanChoice(){
    return prompt("What do you choose?");
}

function announceWinner(winner){
    let winnerDiv = document.querySelector('.Winner')
    winnerDiv.textContent=`Congratulations!, ${winner} wins!`;
}

function updateRoundResults(roundResult,humanScore,computerScore){

    const roundResultDiv = document.querySelector('.Round_Result');
    const humanScoreDiv = document.querySelector('.HumanScore');
    const computerScoreDiv = document.querySelector('.ComputerScore');

    roundResultDiv.textContent = roundResult;
    humanScoreDiv.textContent = `Human: ${humanScore}`;
    computerScoreDiv.textContent = `Computer: ${computerScore}`;
}

function playGame(){

    let humanScore=0;
    let computerScore=0;
    const map = new Map();
    map.set("Rock",0);
    map.set("Paper",1);
    map.set("Scissor",2);
    let winner = false;

    function playRound(humanChoice){
        let humanNum = map.get(humanChoice);
        let computerChoice = getComputerChoice();
        let computerNum = map.get(computerChoice);
        let roundResult="";
        if(humanNum==computerNum)
        {
            roundResult="Tied";
        }
        else if(humanNum==(computerNum+1)%3)
        {
            roundResult=`You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        }
        else
        {
            roundResult=`You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
        }
        updateRoundResults(roundResult,humanScore,computerScore);
    }

    function checkWinner(){
        if(!winner && humanScore==5){
            winner=true;
            announceWinner('Human');
        }
        else if(!winner && computerScore==5){
            winner=true;
            announceWinner('Computer');
        }
    }

    const buttons = document.querySelectorAll('.choice_button');

    const options = ["Rock","Paper","Scissors"];
    buttons.forEach( (button,index) => {
        button.addEventListener('click', () => {
            const humanChoice=button.getAttribute('data-param');
            playRound(humanChoice);
            checkWinner();
        });
    });

    

}

playGame();