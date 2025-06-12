function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice == 0) {
    return "rock";
  } else if (choice == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}
let humanScore = 0;
let computerScore = 0;

const answer = document.createElement("div");

function playRound(human) {
  const humanChoice = human.toLowerCase();
  let computerChoice = getComputerChoice();
  if (computerChoice == humanChoice) {
    answer.textContent = "Draw!";
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore = humanScore + 1;
    computerScore = computerScore + 0;
    answer.textContent =
      "You Win! This Round Score : Computer: " +
      computerScore +
      " Player: " +
      humanScore;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore = humanScore + 1;
    computerScore = computerScore + 0;
    answer.textContent =
      "You Win! This Round Score : Computer: " +
      computerScore +
      " Player: " +
      humanScore;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore = humanScore + 1;
    computerScore = computerScore + 0;
    answer.textContent =
      "You Win! This Round Score : Computer: " +
      computerScore +
      " Player: " +
      humanScore;
  } else {
    humanScore = humanScore + 0;
    computerScore = computerScore + 1;
    answer.textContent =
      "Computer Wins! This Round Score : Computer: " +
      computerScore +
      " Player: " +
      humanScore;
  }
  checkScore();
}

const body = document.body;
const sect = document.createElement("section");

const rock = document.createElement("button");
rock.textContent = "Rock";
const paper = document.createElement("button");
paper.textContent = "Paper";
const scissors = document.createElement("button");
scissors.textContent = "Scissors";

rock.classList.add("button");
paper.classList.add("button");
scissors.classList.add("button");

sect.appendChild(rock);
sect.appendChild(paper);
sect.appendChild(scissors);

rock.addEventListener("click", () => {
  playRound(rock.textContent);
});
paper.addEventListener("click", () => {
  playRound(paper.textContent);
});
scissors.addEventListener("click", () => {
  playRound(scissors.textContent);
});
body.appendChild(sect);

sect.style.display = "flex";
sect.style.flexDirection = "column";
sect.style.maxWidth = "100px";
sect.style.gap = "10px";
sect.style.padding = "10px";

answer.style.maxWidth = "fit-content";
answer.style.gap = "10px";
answer.style.padding = "10px";
answer.style.border = "1px solid black";
body.appendChild(answer);

const btn = document.getElementsByClassName("button");
const btnArr = [...btn];
console.log(btnArr[0]);


function checkScore() {
  if (humanScore > 4) {
    answer.textContent =
      "You Win the Game score: " +
      humanScore +
      " computer score is : " +
      computerScore;
    btnArr.forEach((element) => {
      element.style.display = "none";
    });
  }
  if (computerScore > 4) {
    answer.textContent =
      "Computer Win's the Game score computer: " +
      computerScore +
      " human score is : " +
      humanScore;
    btnArr.forEach((element) => {
      element.style.display = "none";
    });
  }
}
