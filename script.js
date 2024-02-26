//  user and computer
let userCount_js = 0;
let computerCount_js = 0;

// selection from HTMl
let choices = document.querySelectorAll(".choice");
let winnerMessage = document.querySelector(".butn");
let userCount = document.querySelector("#userCount");
let computerCount = document.querySelector("#computerCount");
let resetBtn = document.querySelector("#widthbtn");

// getting user choice
choices.forEach((choice) => {
  choice.addEventListener("click", function () {
    let userChoice = choice.getAttribute("id");
    bothChoices(userChoice);
  });
});

// getting computer choice
let computerChoosing = () => {
  let selection = ["rock", "paper", "scissors"];
  let computerSelected = Math.floor(Math.random() * 3);
  return selection[computerSelected];
};

//game logic
let bothChoices = (userChoice) => {
  let computerChoice = computerChoosing();
  // Game draw
  if (userChoice === computerChoice) {
    winnerMessage.style.backgroundColor = "orange";
    winnerMessage.innerHTML = "Game was draw! Play again";
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = computerChoice === "scissors" ? false : true;
    } else {
      userWin = computerChoice === "rock" ? false : true;
    }
    checkWinner(userWin, userChoice, computerChoice);
  }
};

// checking Winner
const checkWinner = (userWin, userChoice, computerChoice) => {
  if (userWin) {
    userCount.innerText = ++userCount_js;
    winnerMessage.style.backgroundColor = "green";
    winnerMessage.innerHTML = `You won!!! Your ${userChoice} beat ${computerChoice}`;
  } else {
    computerCount.innerText = ++computerCount_js;
    winnerMessage.style.backgroundColor = "red";
    winnerMessage.innerHTML = `You lose!!! Your ${userChoice} beaten  by ${computerChoice}`;
  }
};

// Reset button
Reset_button = () => {
    resetBtn.addEventListener("click", () => {
        computerCount_js = 0;
        userCount_js = 0;
        computerCount.innerText = computerCount_js;
        userCount.innerText = userCount_js;
        winnerMessage.style.backgroundColor = "rgb(1, 1, 36)";
        winnerMessage.innerHTML = "Play your move from start!";
      });
};

Reset_button();
