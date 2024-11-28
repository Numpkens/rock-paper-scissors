let playerScore = 0;
let computerScore = 0;

// Get computer choice
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

// Update the score display
function updateScore() {
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
}

// Display result
function displayResult(message) {
  document.getElementById("result").textContent = message;
}

// Display winner announcement
function displayAnnouncement(message) {
  document.getElementById("announcement").textContent = message;
}

// Play a single round
function playRound(playerChoice) {
  const computerChoice = getComputerChoice();

  displayResult(`You chose ${playerChoice} - Computer chose ${computerChoice}`);

  if (playerChoice === computerChoice) {
    displayAnnouncement("It's a Draw!");
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    playerScore++;
    displayAnnouncement("You Win!");
  } else {
    computerScore++;
    displayAnnouncement("Computer Wins!");
  }

  updateScore();

  // Check for game winner
  if (playerScore === 5) {
    endGame("Congratulations! You won the game!");
  } else if (computerScore === 5) {
    endGame("Game Over! Computer won the game!");
  }
}

// End the game
function endGame(message) {
  displayAnnouncement(message);
  disableButtons();
  showPlayAgainButton();
}

// Disable buttons after game end
function disableButtons() {
  const buttons = document.querySelectorAll(".choice");
  buttons.forEach((button) => (button.disabled = true));
}

// Enable buttons
function enableButtons() {
  const buttons = document.querySelectorAll(".choice");
  buttons.forEach((button) => (button.disabled = false));
}

// Show Play Again button
function showPlayAgainButton() {
  const playAgainButton = document.getElementById("play-again");
  playAgainButton.classList.add("visible");
}

// Hide Play Again button
function hidePlayAgainButton() {
  const playAgainButton = document.getElementById("play-again");
  playAgainButton.classList.remove("visible");
}

// Reset game
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  updateScore();
  displayResult("");
  displayAnnouncement("Choose your weapon!");
  enableButtons();
  hidePlayAgainButton();
}

// Add event listeners to buttons
document.querySelectorAll(".choice").forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.getAttribute("data-choice"));
  });
});

// Add event listener to Play Again button
document.getElementById("play-again").addEventListener("click", resetGame);

// Initial game setup
displayAnnouncement("Choose your weapon!");
