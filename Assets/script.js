// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerChar = ["a", "d", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialChar = ["!", "#", "$", "%", "&", "'", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@","^", "_", "`", "{", "|", "}", "~"]
var confirmLength = "";
var confirmSpecialChar;
var confirmNumberChar;
var confirmUpperChar;
var confirmLowerChar;

// Password length prompt

function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain? Choose between 8 -128 characters"));

  // alert if password length is less than 8 or more than 128
  while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8-128 characters");
      var confirmLength = (prompt("How many characters would you like your password to contain? Choose between 8 -128 characters"));
      } 

  // confirm parameters
  var confirmLowerChar = confirm("Would you like to use lower case characters? OK=YES CANCEL=NO");
  var confirmUpperChar = confirm("Would you like to use uppercase characters? OK=YES CANCEL=NO");
  var confirmSpecialChar = confirm("Would you like to use special characters? OK=YES CANCEL=NO");
  var confirmNumberChar = confirm("Would you like to use numbers? OK=YES CANCEL=NO");    
     

  // Action to chosen parameters
  var passwordCharacters = []
      
  if (confirmSpecialChar) {
    passwordCharacters = passwordCharacters.concat(specialChar)
  }

  if (confirmNumberChar) {
    passwordCharacters = passwordCharacters.concat(numberChar)
  }
      
  if (confirmLowerChar) {
    passwordCharacters = passwordCharacters.concat(lowerChar)
  }

  if (confirmUpperChar) {
    passwordCharacters = passwordCharacters.concat(upperChar)
  }

  console.log(passwordCharacters)

    
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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
