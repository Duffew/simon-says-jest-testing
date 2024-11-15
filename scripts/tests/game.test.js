/**
 * @jest-environment jsdom
 */

// load index.html into jest's mock DOM before anything else
beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "uft-8");
    document.open();
    document.write(fileContents);
    document.close();
})