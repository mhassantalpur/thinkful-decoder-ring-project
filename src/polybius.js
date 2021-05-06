// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

/*
input refers to the inputted text to be encoded or decoded.
encode refers to whether you should encode or decode the message. 
By default it is set to true.

* You are welcome to assume that no additional symbols will be 
* included as part of the input. Only spaces and letters will be 
included.
* When encoding, your output should still be a string.
* When decoding, the number of characters in the string excluding 
spaces should be even. Otherwise, return false.
* Spaces should be maintained throughout.
* Capital letters can be ignored.
* The letters "I" and "J" share a space. 
When encoding, both letters can be converted to 42, 
but when decoding, both letters should somehow be shown.
*/

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    const alphabet = {
      11: 'a', 21: 'b', 31: 'c', 41: 'd', 51: 'e',
      12: 'f', 22: 'g', 32: 'h', 42: '(i/j)', 52: 'k',
      13: 'l', 23: 'm', 33: 'n', 43: 'o', 53: 'p',
      14: 'q', 24: 'r', 34: 's', 44: 't', 54: 'u',
      15: 'v', 25: 'w', 35: 'x', 45: 'y', 55: 'z'
    };
    
    let finalMessage = "";
    input = input.toLowerCase();

    if(typeof input != "string") {
      return finalMessage = false;
    }

    if(encode === true) {
      for(characters in input) {
        const character = input[characters]
        if(character === " "){
          finalMessage += character;
          continue;
        }
        if(character === "i" || character === "j") {
          finalMessage += 42;
          continue;
        }
        for(letters in alphabet) {
          if(character === alphabet[letters]) {
            finalMessage += letters;
          }
        }
      }
    }
    else {
      for(numbers in input) {
        let checkIfEven = input.split(" ");
        for(word in checkIfEven) {
          if(checkIfEven[word].length%2 != 0) {
            return finalMessage = false;
          } 
        }
        const ijPair = `${input[0]}${input[1]}`;
        if(input[0] === " ") {
          finalMessage += input[0];
          input = input.slice(1);
          continue;
        }
        for(values in alphabet) {
          if (ijPair === values) {
            finalMessage += alphabet[values];
          }
        }
        input = input.slice(2);
      }
    }
    return finalMessage;
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
