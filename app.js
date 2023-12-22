// variables to track scores
let userScore = 0;
let computerScore = 0;


// access images through choice(class)
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreP = document.querySelector("#userScore");
const computerScoreP = document.querySelector("#computerScore");



//adding event listners on ech choice and getting their id
choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});



// play game base
const playGame = (userChoice) =>{
    const compChoice = generateComputerChoice();
    // console.log("user = ",userChoice );
    // console.log("Comp = ",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}

//generate computer choice
const generateComputerChoice = () =>{
    const options = ["rock","paper","scissor"]
    const raIdx = Math.floor(Math.random() * 3);
    return options[raIdx];
}



//drawGame
const drawGame = () =>{
    // console.log("draw!");
    msg.innerText = "Game Draw!!";
    msg.style.backgroundColor = "blue"; 
}

//showWinner
const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        // console.log("You win!!");
        userScore++;
        userScoreP.innerText = userScore;
        msg.innerText = `You Win!! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"; 
    }else{
        // console.log("Computer Win!!")
        computerScore++;
        computerScoreP.innerText = computerScore;
        msg.innerText = `You Loose!! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red"; 
    }
}



