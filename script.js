let userScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById(
    "user-choice"
  ).textContent = `You chose: ${playerChoice} 🏆`;

  document.getElementById(
    "computer-choice"
  ).textContent = `Computer chose: ${computerChoice}  💻`;

  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a tie!  🤝";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = `You Win! 🎉`;
    userScore++;
  } else {
    result = `You Lose! 😞`;
    computerScore++;
  }

  document.getElementById("user-score").textContent = userScore;
  document.getElementById("computer-score").textContent = computerScore;
  document.getElementById("result").textContent = result;

  checkWinner();
}

function checkWinner() {
  if (userScore === 3) {
    setTimeout(() => {
      alert("🎉 You won the game!");
      resetGame();
    }, 500);
  } else if (computerScore === 3) {
    setTimeout(() => {
      alert("💻 Computer win the game!");
      resetGame();
    }, 500);
  }
}

function resetGame() {
  userScore = 0;
  computerScore = 0;
  document.getElementById("user-score").textContent = userScore;
  document.getElementById("computer-score").textContent = computerScore;
  document.getElementById("user-choice").textContent = "You chose ❓";
  document.getElementById("computer-choice").textContent = "Computer chose ❓";
  document.getElementById("result").textContent = "Make a move!";
}