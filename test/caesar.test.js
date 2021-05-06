// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar").caesar;

describe("caesar() testing", () => {
    it("returns false if the shift value is equal to 0, less than -25, greater than 25, or not present", () => {
        const zero = caesar("alsdkjf", 0);
        expect(zero).to.be.false;

        const moreThan = caesar("fqwpiru", 26);
        expect(moreThan).to.be.false;

        const lessThan = caesar("dfjowiwuq", -40);
        expect(lessThan).to.be.false;
    });
    it("maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.", () => {
        // test case taken from examples
        const expected = 'bpqa qa i amkzmb  umaaiom!';
        const actual = caesar("This is a secret  message!", 8);
        expect(actual).to.equal(expected)
    });
    it("ignores capital letters", () => {
        // test case taken from capital edge case example
        const expected = 'wklqnixo';
        const actual = caesar("ThinKfUL", 3);
        expect(actual).to.equal(expected);
    });
    it("Should wrap letters that get shifted off the alphabet", () => {
        const expected = 'this is a secret message!';
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        expect(actual).to.equal(expected);
    });
})