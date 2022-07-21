// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// This function will either return a NUMBER (>=8 and <=128)  or return NOTHING
function getPasswordLength() {
  var passwordLength = parseInt(window.prompt("How many characters would you like your password to contain?"));
 
  if (isNaN(passwordLength)) {
    if (!window.confirm("Please input a number in digit. Continue?")) return;
    else return getPasswordLength();
  }

  if (passwordLength < 8 || passwordLength > 128) {
    if (!window.confirm("Please choose a number between 8 and 128. Continue?")) return;
    else return getPasswordLength();
  }  

  return passwordLength;
}

function getRandomIntegerNumber(min, max) {
  return Math.floor(Math.random() * (max-min)) + min;
}

function generatePassword() {
  var passwordLength = getPasswordLength();
  var password = "";
  
  if (isNaN(passwordLength)) return "";
  else {

    var isLowercase = window.confirm("Click OK to confirm including lowercase characters.");
    var isUppercase = window.confirm("Click OK to confirm including uppercase characters.");
    var isNumeric = window.confirm("Click OK to confirm including numeric characters.");
    var isSpecial = window.confirm("Click OK to confirm including special characters.");
    
    var randomCharacter;
  
    for (var i = 0; i < passwordLength; i++) {
      var isTrue = true;

      while (isTrue) {
        isTrue = false;
        randomCharacter = getRandomIntegerNumber(32, 126);
        if (randomCharacter >= 97 && randomCharacter <= 122) {
          if (!isLowercase)  isTrue = true;
        } else if (randomCharacter >= 65 && randomCharacter <= 90) {
          if (!isUppercase) isTrue = true;
        } else if (randomCharacter >= 48 && randomCharacter <= 57) {
          if (!isNumeric) isTrue = true;
        } else {
          if (!isSpecial) isTrue = true;
        }
      }

      password = password + String.fromCharCode(randomCharacter);
    }
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
