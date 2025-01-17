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