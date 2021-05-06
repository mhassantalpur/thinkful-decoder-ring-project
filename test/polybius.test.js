// Write your tests here!
const expect = require("chai").expect;
const polybius = require("../src/polybius").polybius;

describe("polybius() testing", () => {
    it("maintains spaces in the message, before and after encoding or decoding.", () => {
        const expected = '3251131343 2543241341';
        const actual = polybius("hello world");
        expect(actual).to.equal(expected);

        const expected2 = "hello world"
        const actual2 = polybius('3251131343 2543241341', false);
        expect(actual2).to.equal(expected2);
    })

    it("ignores capital letters.", () => {
        const expected = '3251131343 2543241341';
        const actual = polybius("Hello world");
        expect(actual).to.equal(expected);
    })

    it("translates the letters i and j to 42 when encoding, translates 42 to (i/j) when decoding", () => {
        const expected = "th(i/j)nkful";
        const actual = polybius("4432423352125413", false);
        expect(actual).to.equal(expected);
    })
})