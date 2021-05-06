// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

/*
caesar()
The caesar() function in the src/caesar.js file has three 
parameters:

input refers to the inputted text to be encoded or decoded.
shift refers to how much each letter is "shifted" by. A positive 
number means shifting to the right (i.e. "A" becomes "D") whereas
a negative number means shifting to the left (i.e. "M" becomes "K").
encode refers to whether you should encode or decode the message. 
By default it is set to true.
When building the function, keep the following constraints 
and rules in mind:

If the shift value is not present, equal to 0, less than -25, 
or greater than 25, the function should return false.
Spaces should be maintained throughout, as should other 
non-alphabetic symbols.
Capital letters can be ignored.
If a letter is shifted so that it goes "off" the alphabet 
(e.g. a shift of 3 on the letter "z"), it should wrap around to 
the front of the alphabet (e.g. "z" becomes "c").

Examples
caesar("thinkful", 3); //> 'wklqnixo'
caesar("thinkful", -3); //> 'qefkhcri'
caesar("wklqnixo", 3, false); //> 'thinkful'

caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'
caesar("BPQA qa I amkzmb umaaiom!", 8, false); //> 'this is a secret message!'

caesar("thinkful"); //> false
caesar("thinkful", 99); //> false
caesar("thinkful", -26); //> false
*/

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {

    input = input.toLowerCase();
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    let finalMessage = "";
    let shiftedIndex = 0;

    if(shift === 0 || shift < -25 || shift > 25) {
        return false;
    }
    
    for(characters in input) {
      character = input[characters];
      // check if character is a letter
      if(alphabet.indexOf(character) === -1) {
        finalMessage += character
        continue 
      }    

      alphabet.find(letter => {
        if(letter === character) {
          encode ? shiftedIndex = alphabet.indexOf(letter) + shift : shiftedIndex = alphabet.indexOf(letter) - shift
          if(shiftedIndex >= 26) {
            shiftedIndex -= 26
          } 
          else if(shiftedIndex <= -1) {
            shiftedIndex += 26
          }
          finalMessage += alphabet[shiftedIndex]
        }
      })
    }
  return finalMessage;
}

  return {
    caesar,
  };
})();
module.exports = { caesar: caesarModule.caesar };