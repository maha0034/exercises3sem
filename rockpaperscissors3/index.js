"use strict";

const rock_btn = document.querySelector(".rock");
const paper_btn = document.querySelector(".paper");
const scissors_btn = document.querySelector(".scissors");

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

const winText = document.querySelector("#win");
const loseText = document.querySelector("#lose");
const drawText = document.querySelector("#draw");

const buttons = document.querySelector("#buttons");

let userChoice;
let computerChoice;

document.addEventListener("DOMContentLoaded", init);

function init() {
  rock_btn.addEventListener("click", () => userChooses("rock"));
  paper_btn.addEventListener("click", () => userChooses("paper"));
  scissors_btn.addEventListener("click", () => userChooses("scissors"));
}

function userChooses(choice) {
  userChoice = choice;
  computerChooses();
  startShake();
}

function computerChooses() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    computerChoice = "rock";
  } else if (randomNumber === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
}

function startShake() {
  hideTexts();

  player1.className = "player shake";
  player2.className = "player shake";

  // Vent til animationen er færdig
  setTimeout(showResult, 1800);
}

function showResult() {
  player1.className = "player " + userChoice;
  player2.className = "player " + computerChoice;

  if (userChoice === computerChoice) {
    drawText.classList.remove("hidden");
  } else if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")) {
    winText.classList.remove("hidden");
  } else {
    loseText.classList.remove("hidden");
  }
}

function hideTexts() {
  winText.classList.add("hidden");
  loseText.classList.add("hidden");
  drawText.classList.add("hidden");
}
