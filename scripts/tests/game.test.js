/**
 * @jest-environment jsdom
 */

// define { game } as a constant from game.js

const { game } = require("../game");

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
});