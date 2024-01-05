let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gencompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor( Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game is draw");
    msg.innerText = "Game is Draw. Play Again!";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `YOU WIN !, Your ${userChoice} defeats ${compChoice}`;
        msg.style.backgroundColor = "#16a085";
        msg.style.color = "white";
    }else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `YOU LOSE !, ${compChoice} defeats your ${userChoice}`;
        msg.style.backgroundColor = "rgb(200, 59, 59)";
        msg.style.color = "white";
    }
}

const playGame = (userChoice) => {
    console.log(`user choice = ${userChoice}`);
    const compChoice = gencompChoice();
    console.log(`Computer choice = ${compChoice}`);

    if(userChoice === compChoice ){
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissor, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            // rock, scissor
            userWin = compChoice === "scissor" ? false : true;
        } else{
            // roxk, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

        const img = choice.querySelector("img");
        const currentImg = img.getAttribute("src");

        const alternateImg = "./changed_" + choice.getAttribute("id") + ".jpg"; // Adjust the pattern according to your image names

        // Change the image source
        img.setAttribute("src", alternateImg);

        // Revert the image back after a short delay (for instant visual feedback)
        setTimeout(() => {
            img.setAttribute("src", currentImg); // Revert back to the original image after 500 milliseconds
        }, 250);
    });
});
