

function round(pSel, cSel) {
	let winLose = "";

	if(pSel == "Paper") {
		if(cSel == "Rock") {
			winLose = "Win";
		} else if(cSel == "Scissors") {
			winLose =  "Lose";
		} else {
			winLose = "Draw";
		}
	} else if(pSel == "Rock") {
		if(cSel == "Scissors") {
			winLose = "Win";
		} else if(cSel == "Paper") {
			winLose = "Lose";
		} else {
			winLose = "Draw";
		}
	} else if(pSel == "Scissors") {
		if(cSel == "Paper") {
			winLose = "Win";
		} else if(cSel == "Rock") {
			winLose = "Lose";
		} else {
			winLose = "Draw";
		}
	} else {
		alert(playerSelection + " is not a valid choice. Pick 'rock', 'paper', or 'scissors'");
		return;
	}

	if(winLose == "Win") {
		return "You win! " + pSel + " beats " + cSel + "!";
	} else if(winLose == "Lose") {
		return "You lose! " + cSel + " beats " + pSel + "!";
	} else {
		return "It's a draw! " + pSel + " vs " + cSel + "!";
	}
}

function cChoice() {
	let choices = ["Rock", "Scissors", "Paper"];
	let num = Math.floor(Math.random() * 3);
	return choices[num];
}

let p1Score = 0;
let p2Score = 0;
let rounds = 1;
let banner = document.querySelector(".banner");
let p1 = document.querySelector(".player-1 .score");
let p2 = document.querySelector(".player-2 .score");
function game() {
	let pChoice = this.getAttribute("data-key"); 
	let result = round(pChoice, cChoice());
	banner.textContent = result;
	if(result.indexOf("win") != -1) {
		p1Score++;
		p1.textContent = p1Score;
	} else if(result.indexOf("lose") != -1) {
		p2Score++;
		p2.textContent = p2Score;
	}

	if(rounds > 5) {
		if(p1Score > p2Score) {
			banner.textContent = "You Won! P1: " + p1Score + " vs. P2: " + p2Score;
		} else {
			banner.textContent = "You Lost! P1: " + p1Score + " vs. P2: " + p2Score;
		}
	}
}

document.querySelectorAll(".image").forEach(img => img.addEventListener("click", game));