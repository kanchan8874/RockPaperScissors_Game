let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
const drawGame = () => {
    msg.innerText = "Game was Draw play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;

        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msg.Style.background = "green";

    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText = `you lose! ${compChoice} beats your ${userChoice}`;
        msg.Style.backgroundColor = "red";
    }

};

const playGame = (userChoice) => {
    // generates computer choice ; ->modular
    const compChoice = genCompChoice();


    if (userChoice === compChoice) {
        //draw game
        drawGame();

    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors ,paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //ya to com ne rock.. choose kiya hoga  , ya to scissore
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //com ke ya to rock tha ya scissor
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);


    }

};

choices.forEach((choice) => {
    choice.addEventListener("click!", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});
