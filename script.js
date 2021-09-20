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

// Prompt to ask how many characters the user would like in their password.
function generatePassword() {
  var confirmLength = (prompt("Hello, how many characters would you like your password to contain?"));

  //  Will loop if the users answer is outside the length parameters.
  while(confirmLength <= 7 || confirmLength >= 129) {
    alert("Sorry, your password length must be between 8 - 128 characters. Please try again.");
    var confirmLength = (prompt("Hello again, how many characters would you like your password to contain?"));
  }

// Let the user know the character length they have chosen.
alert(`Good choice, your password will have ${confirmLength} characters`);

//Parameters of password.
var confirmSpecialCharacter = confirm("Please click OK to confirm if you would like to include special characters");
var confirmNumericCharacter = confirm("Please click OK to confirm if you would like to include numeric characters");    
var confirmLowerCase = confirm("Please click OK to confirm if you would like to include lowercase characters");
var confirmUpperCase = confirm("Please click OK to confirm if you would like to include uppercase characters");
  // Loop if answer is outside the parameters 
  while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
    alert("Sorry, you must choose at least one parameter. Let's try again.");
    var confirmSpecialCharacter = confirm("Please click OK to confirm if you would like to include special characters");
    var confirmNumericCharacter = confirm("Please click OK to confirm if you would like to include numeric characters");    
    var confirmLowerCase = confirm("Please click OK to confirm if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Please click OK to confirm if you would like to include uppercase characters");   
} 





}