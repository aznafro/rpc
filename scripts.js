

function round(pSel, cSel) {
	pSel = pSel.charAt(0).toUpperCase() + pSel.substring(1, pSel.length).toLowerCase();
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

function game() {
	let p1Score = 0;
	let p2Score = 0;
	do {
		let pChoice = prompt("Rock, Paper, or Scissors?");
		let result = round(pChoice, cChoice());
		if(result.indexOf("win") != -1) {
			p1Score += 1;
		} else if(result.indexOf("lose") != -1) {
			p2Score += 1;
		}
		alert(result);
	} while(p1Score + p2Score < 5);

	if(p1Score > p2Score) {
		alert("You Won! P1: " + p1Score + " vs. P2: " + p2Score);
	} else {
		alert("You Lost! P1: " + p1Score + " vs. P2: " + p2Score);
	}
}

game();