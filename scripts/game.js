let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
}

// create newGame() and add it to our exports
function newGame() {
    game.score = 0;
    game.currentGame.length = [0];
    // use .length to be explicit and [0] or
    game.playerMoves = [];
    showScore();
    addTurn();
}

// define addTurn()
function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    // showTurns;
}

// define showScore() to manage game score and call the function above in newGame()
function showScore() {
    document.getElementById("score").innerText = game.score;
}

// export the code to test file as { game }
module.exports = { game, newGame, showScore, addTurn };