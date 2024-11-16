/**
 * @jest-environment jsdom
 */

// define { game } as a constant from game.js
// add new functions etc. as we go
const { game, newGame, showScore, addTurn, lightsOn, showTurns } = require("../game");

/** 
 * load index.html into jest's mock DOM before anything else runs.
 * This code will be the same for every html file we want to load into the mock DOM 
 * just change the file name
*/
beforeAll(() => {
    // install fs library
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

// create a failing test to check that the score key exists
describe("game object contains the correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    // next create a failing test to check if the currentGame key exists
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    // next create a failing test to check if the playerMoves key exists
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    // next create a failing test to check if the choices key exists
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    // create a test to check that choices conatins the ids
    test("choices conatains the correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
    test("turnNumber key exists", () => {
        expect("turnNumber" in game).toBe(true);
    });
});

// test the newGame function
describe("newGame works correctly", () => {
    beforeAll(() => {
        game.score = 42;
        // add new fake data
        game.playerMoves = ["button1", "button2"];
        game.currentGame = ["button1", "button2"];
        document.getElementById("score").innerText = "42"
        newGame();
    });
    test("should set game score to 0", () => {
        expect(game.score).toEqual(0);
    });
    /* test("should clear the computer sequence array", () => {
        // use .length to set the number of items in the array
        expect(game.currentGame.length).toBe(0);
    });
    */
    test("should be one move in the computer's game array", () => {
        expect(game.currentGame.length).toBe(1);
    });
    test("should clear the player moves array", () => {
        expect(game.playerMoves.length).toBe(0);
    });
    test("should display 0 for the element with the id of score", () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    });
});

describe("gameplay works correctly", () => {
    beforeEach(() => {
        game.score = 0;
        game.currentGame = [];
        game.playerMoves = [];
        addTurn();
    });
    afterEach(() => {
        game.score = 0;
        game.currentGame = [];
        game.playerMoves = [];
    });
    test("addTurn adds a new turn to the game", () => {
        addTurn();
        expect(game.currentGame.length).toBe(2);
    });
    test("should add correct class to light up the buttons", () => {
        let button = document.getElementById(game.currentGame[0]);
        lightsOn(game.currentGame[0]);
        expect(button.classList).toContain("light");
    });
    test("showTurns should update game.turnNumber", () => {
        game.turnNumber = 42;
        showTurns(0);
        expect(game.turnNumber).toBe(0);
    });
});