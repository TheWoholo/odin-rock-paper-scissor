console.log("Hello World");

function getComputerChoice(){
    const options = ["Rock","Paper","Scissors"];
    let choice = Math.floor(Math.random()*3);
    console.log(options[choice]);
    return options[choice];
    
}

function getHumanChoice(){
    return prompt("What do you choose?");
}

let humanScore=0;
let computerScore=0;

function playRound(humanChoice,computerChoice){
    const map = new Map();
    map.set("rock",0);
    map.set("paper",1);
    map.set("scissor",2);
    let humanNum = map.get(humanChoice);
    let computerNum = map.get(computerChoice);
    if(humanNum==computerNum)
    {
        console.log("Tied!");
    }
    else if(humanNum==(computerNum+1)%3)
    {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else
    {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }

    console.log(humanScore);
    console.log(computerScore);
}

const humanChoice = getHumanChoice().toLowerCase();
const computerChoice = getComputerChoice().toLowerCase();

playRound(humanChoice,computerChoice);