// This code will generate a random password with a character length or 8 - 128.

//Assignment Code + Event Listener to prompt questions when button is clicked.
document.querySelector("#generate").addEventListener("click", writePassword);

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
  var confirmLength = (prompt("Hello, how many characters would you like your password to contain? *Must be between 8 - 128*"));

  //  Will loop if the users answer is outside the length parameters.
  while(confirmLength <= 7 || confirmLength >= 129) {
    alert("Sorry, your password length must be between 8 - 128 characters. Please try again.");
    var confirmLength = (prompt("Hello again, how many characters would you like your password to contain?"));
  }

// Let the user know the character length they have chosen.
alert(`Good choice, your password will have ${confirmLength} characters`);

//Parameters of password.
var confirmSpecialCharacter = confirm("Please click OK to confirm if you would like to include special characters. If you would not like to include special characters, please click cancel.");
var confirmNumericCharacter = confirm("Please click OK to confirm if you would like to include numeric characters. If you would not like to include numeric characters, please click cancel.");    
var confirmLowerCase = confirm("Please click OK to confirm if you would like to include lowercase characters. If you would not like to include lowercase characters, please click cancel.");
var confirmUpperCase = confirm("Please click OK to confirm if you would like to include uppercase characters. If you would not like to include uppercase characters, please click cancel.");
  // Loop if answer is outside the parameters 
  while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
    alert("Sorry, you must choose at least one parameter. Let's try again.");
    var confirmSpecialCharacter = confirm("Please click OK to confirm if you would like to include special characters. If you would not like to include special characters, please click cancel.");
    var confirmNumericCharacter = confirm("Please click OK to confirm if you would like to include numeric characters. If you would not like to include numeric characters, please click cancel.");    
    var confirmLowerCase = confirm("Please click OK to confirm if you would like to include lowercase characters. If you would not like to include lowercase characters, please click cancel.");
    var confirmUpperCase = confirm("Please click OK to confirm if you would like to include uppercase characters. If you would not like to include uppercase characters, please click cancel.");   
} 

// Assign an action to the password parameters.
var passwordCharacters = []
      
if (confirmSpecialCharacter) {
  passwordCharacters = passwordCharacters.concat(specialChar)
}

if (confirmNumericCharacter) {
  passwordCharacters = passwordCharacters.concat(number)
}
  
if (confirmLowerCase) {
  passwordCharacters = passwordCharacters.concat(alphaLower)
}

if (confirmUpperCase) {
  passwordCharacters = passwordCharacters.concat(alphaUpper)
}

  console.log(passwordCharacters)

  // Empty string to be filled based on for loop selecting random characters from the array
  var randomPassword = ""
  
  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
