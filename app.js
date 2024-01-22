let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");


const genCompChoice = () => {
    let options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
    //rock,paper,scissors
}

const drawGame = () => {
    
    msg.innerText = "Game Draw! Play Again"; //arrow function
    msg.style.backgroundColor = "bisque";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore ++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore ++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `You lose :( ${compChoice} beats ${userChoice}`;
        
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
        //generate computer choice    
    const compChoice = genCompChoice();
    
    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissor,paper
            userWin = compChoice === "paper" ? false : true ;
        } else if(userChoice === "paper") {
            //rock,scissor
            userWin = compChoice === "scissor" ? false : true ;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};


choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click" , ()=> {
        
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        
    });
});