/* create function called getComputerChoice that returns rock paper or scissors randomly */
let computerSelection = Math.random() <= (1/3)? 1 : Math.random() <= (2/3)? 2 : Math.random() <=1? 1: "error";
console.log(computerSelection)

/*let computerSelection = function() {let a = Math.random(); let b = a <= (1/3)? 1 : a <= (2/3)? 2 : 3; return b;}
console.log (computerSelection());*/

let getComputerChoice = function() {let a = computerSelection == 1? "rock" : computerSelection == 2? "paper" : computerSelection == 3? "scissors" : "error"; return a;}
console.log(getComputerChoice())
/* getComputerChoice should return a word, like rock paper or scissors. playerChoice should also be a word. playerSelection and ComputerSelection don't need to be words. I guess those (the selections) will be the numbers to determine who won. So change that mess, */
let playerChoice = prompt("Rock, paper, or scissors?");
console.log(playerChoice)

let playerSelection = (playerChoice.toLowerCase() == "rock")? 1 : (playerChoice.toLowerCase()) == "paper"? 2 : (playerChoice.toLowerCase()) == "scissors"? 3 : "error";
console.log(playerSelection)


/* Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock" */
let whoWon = (playerChoice - getComputerChoice()) //=> {let result = playerChoice - getComputerChoice(); (result == -1 || result == 2)? `You win! ${playerSelection} beats ${computerSelection}!`}
let playRound = (playerSelection, computerSelection) => {}

/* Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end. */
let game = function() { 
    for (let i = 0; i < 5; i++) {
        playRound()
    }
}

/* Use prompt() to get input from the user. */