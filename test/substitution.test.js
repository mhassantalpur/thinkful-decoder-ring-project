// Write your tests here!
const expect = require("chai").expect;
const substitution = require("../src/substitution").substitution;

describe("substitution() testing", () => {
    it("returns false if the given alphabet isn't exactly 26 characters long.", () => {
        const actual = substitution("not26", "short");
        expect(actual).to.be.false;
    })
    it("ignores capital letters", () => {
        const actual = substitution("AbcD", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'xoyq';
        expect(actual).to.equal(expected);
    })
    it("It maintains spaces in the message, before and after encoding or decoding.", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'elp xhm xf mbymwwmfj dne';
        expect(actual).to.equal(expected);
    })
    it("It correctly translates the given phrase, based on the alphabet given to the function.", () => {
        const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        const expected = "y&ss$r&";
        expect(actual).to.equal(expected);
    })
    it("returns false if there are any duplicate characters in the given alphabet.", () => {
        const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpz");
        expect(actual).to.be.false;
    })
})