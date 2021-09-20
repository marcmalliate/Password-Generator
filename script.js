// This code will generate a random password with a character length or 8 - 128.

//Assignment Code + Event Listener to prompt questions when button is clicked.
document.querySelector("generate").addEventListener("click", writePassword);

// Arrays
var number = Array.from('0123456789');
var specialChar = Array.from('!@#$%^&*()-_=+]}[{:.;,/|}]');
var alphaLower = Array.from('abcdefghijklmnopqrstuvwxyz');
var alphaUpper = Array.from('ABCDEFGHIJKLMPNOPQRSTUVWXYZ');

// Variable Declarations
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase
var confirmLowerCase

// Prompt to ask how many characters the user would like in their passwoord.
function generatePassword() {
  var confirmLength = (prompt("Hello, how many characters would you like your password to contain?"));

  //  Will loop if the users answer is outside the length parameters.
  while(confirmLength <= 7 || confirmLength >= 129) {
    alert("Sorry, your password length must be between 8 - 128 characters. Please try again.");
    var confirmLength = (prompt("Hello again, how many characters would you like your password to contain?"));
  }

// Let the user know the character length they have chosen.
alert(`Good choice, your password will have ${confirmLength} characters`);









}