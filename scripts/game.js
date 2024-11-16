let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    turnNumber: 0,
    choices: ["button1", "button2", "button3", "button4"],
}

// create newGame() and add it to our exports
function newGame() {
    game.score = 0;
    game.currentGame.length = [0];
    // use .length to be explicit and [0] or
    game.playerMoves = [];
    for (let circle of document.getElementsByClassName("circle")) {
        if (circle.getAttribute("data-listener") !== "true") {
            circle.addEventListener("click", (e) => {
                let move = e.target.getAttribute("id");
                lightsOn(move);
                game.playerMoves.push(move);
                playerTurn();
            });
            circle.setAttribute("data-listener", "true");
        }
    }
    showScore();
    addTurn();
}

// define addTurn()
function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    showTurns();
}

// define showScore() to manage game score and call the function above in newGame()
function showScore() {
    document.getElementById("score").innerText = game.score;
}
// create a function to flash the game light
function lightsOn(circ) {
    document.getElementById(circ).classList.add("light");
    setTimeout(() => {
        document.getElementById(circ).classList.remove("light");
    }, 400);
}

// write a function to show the random sequence that the player needs to remember
function showTurns() {
    game.turnNumber = 0;
    let turns = setInterval(function() {
        lightsOn(game.currentGame[game.turnNumber]);
        game.turnNumber++;
        if (game.turnNumber >= game.currentGame.length) {
            clearInterval(turns);
        }
    }, 800);
}

// export the code to test file as { game }
module.exports = { game, newGame, showScore, addTurn, lightsOn, showTurns };