// M Petrizzelli
// 13/11/20223
// Rock Paper Scissors - Online Game

function submission() {
    var playerName = document.getElementById("playerName").value; // input player's name
    var playerPick = document.getElementById("playerPick").value; // picker user
    var computerPick = Math.floor(Math.random() * (3 - 1 + 1) + 1); // picker computer with Math.random
    // alert("P: " + playerPick + " & computer: " + computerPick); for debugging
    computeRockPaperScissors(playerName, playerPick, computerPick); // function to check and output result of the game
}

function computeRockPaperScissors(playerName, playerPick, computerPick) {
    var msg; // output
    var playerInput; // converter 
    var computerInput; // converter 

    // checker
    if (playerPick == computerPick) {
        msg = "That's a draw. Try again!";
    }
    else if (playerPick == 1) {
        if (computerPick == 2) {
            playerInput = "ROCK";
            computerInput = "PAPER";
            msg = "You lose!";
        } else if (computerPick == 3) {
            playerInput = "ROCK";
            computerInput = "SCISSORS";
            msg = "You win!";
        }
    } else if (playerPick == 2) {
        if (computerPick == 1) {
            playerInput = "PAPER";
            computerInput = "ROCK";
            msg = "You win!";
        } else if (computerPick == 3) {
            playerInput = "PAPER";
            computerInput = "SCISSORS";
            msg = "You lose!";
        }
    } else if (playerPick == 3) {
        if (computerPick == 1) {
            playerInput = "SCISSORS";
            computerInput = "ROCK";
            msg = "You lose!";
        } else if (computerPick == 2) {
            playerInput = "SCISSORS";
            computerInput = "PAPER";
            msg = "You win!";
        }
    }

    // output
    if (playerPick == computerPick) {
        alert(playerName + " you both picked the same item: " + msg);
    }
    else {
        alert(playerName + " you picked " + playerInput + " while the computer picked " + computerInput + ": " + msg);
    }
}


