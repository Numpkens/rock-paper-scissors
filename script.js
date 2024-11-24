// Get computer choice of 1-3
function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}

// Get human choice of 1-3
function getHumanChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let choiceIndex;

  console.log("Please select one of the following options:");
  for (let i = 0; i < choices.length; i++) {
    console.log(`${i + 1}. ${choices[i]}`);
  }

  const userInput = prompt("Enter the number of your chosen option (1-3):");

  if (
    isNaN(parseInt(userInput)) ||
    parseInt(userInput) < 1 ||
    parseInt(userInput) > 3
  ) {
    console.log("Invalid input. Please try again.");
    return getHumanChoice();
  }

  choiceIndex = parseInt(userInput) - 1;
  return choices[choiceIndex];
}

function playRound() {
  const playerChoice = getHumanChoice();
  const computerChoice = getComputerChoice();

  let computerChoiceText;
  switch (computerChoice) {
    case 1:
      computerChoiceText = "Rock";
      break;
    case 2:
      computerChoiceText = "Paper";
      break;
    case 3:
      computerChoiceText = "Scissors";
      break;
  }

  console.log(`Computer chose: ${computerChoiceText}`);
  console.log(`You chose: ${playerChoice}`);

  if (playerChoice === computerChoiceText) {
    return "It's a Draw!";
  }

  if (
    (playerChoice === "Rock" && computerChoiceText === "Scissors") ||
    (playerChoice === "Paper" && computerChoiceText === "Rock") ||
    (playerChoice === "Scissors" && computerChoiceText === "Paper")
  ) {
    return "You Win!";
  }

  return "Computer Wins!";
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    console.log(`\nRound ${round}:`);
    const result = playRound();
    console.log(result);

    if (result === "You Win!") {
      playerScore++;
    } else if (result === "Computer Wins!") {
      computerScore++;
    }

    console.log(`Score - You: ${playerScore}, Computer: ${computerScore}`);
  }

  console.log("\nGame Over!");
  if (playerScore > computerScore) {
    console.log("You won the game!");
  } else if (computerScore > playerScore) {
    console.log("Computer won the game!");
  } else {
    console.log("The game is a tie!");
  }
}
game();
