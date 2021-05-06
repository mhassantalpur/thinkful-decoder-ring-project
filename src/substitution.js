// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

/*
The substitution() function in the src/substitution.js file 
has three parameters:

input refers to the inputted text to be encoded or decoded.
alphabet refers to substitution alphabet.
encode refers to whether you should encode or decode the message. 
By default it is set to true.
When building the function, keep the following constraints and 
rules in mind:

The input could include spaces and letters as well as special 
characters such as #, $, *, etc.
Spaces should be maintained throughout.
Capital letters can be ignored.
The alphabet parameter must be a string of exactly 26 characters, 
which could include special characters such as #, $, *, etc. 
Otherwise, it should return false.
All the characters in the alphabet parameter must be unique. 
Otherwise, it should return false.
*/

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {

    if(!alphabet || alphabet.length !== 26) {
      return false;
    }
    input = input.toLowerCase();
    let checkForDuplicate = {};
    const actualAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let finalMessage = "";
    
    // check if alphabet has unique characters only
    for (let i = 0; i < alphabet.length; i++) {
      let character = alphabet[i];
      if (checkForDuplicate[character]) {
        return false
      }
      checkForDuplicate[character] = true;
    }

    for(characters in input) {
      const character = input[characters];
      let inputValue = alphabet.indexOf(character);
      let actualValue = actualAlphabet.indexOf(character);
      // check if character does not exist in actualAlphabet
      if(alphabet.indexOf(character) === -1) {
        finalMessage += character;
        continue;
      }
      if (encode) {
        finalMessage += alphabet[actualValue];
      }
      else {
        finalMessage += actualAlphabet[inputValue];
      }
    }
    return finalMessage;
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
