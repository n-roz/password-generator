var characterLength = 8;
var choiceArr = [];

// special characters
var specialCharArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", "~", "{", "}", "[", "]", ",", ".", "_", "<", ">", "/", "?", "|", "'"];

// lowercase characters
var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// upercase characters
var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// numeric characters
var numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

}

