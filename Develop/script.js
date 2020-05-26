// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
} 

/*
// Alerts user to begin password length selection.
// Store input in var.
// If input is invalid, call function again. User has option to exit (false is returned and used to signal main program).
// If input is valid, return length.
function askLength () {
  alert("Choose a password length from 8 to 128.");
  var passwordsLength = prompt("Enter the password length you want from 8-128 characters.");

  while ((Number.isInteger(passwordsLength) < 8) || (Number.isInteger(passwordsLength > 128))) {
    var confirmTryAgain = confirm("Sorry, this doesn't follow the rule. Would you like to keep trying?");
    if (confirmTryAgain) {
      askLength();
    } else if (!confirmTryAgain) {
        return false;
    }
  }
  return passwordsLength;
}

// Made a counter of how many prompts the user agreed to.
// Made bool vars, all false.
// I chose 2 rules. Alert to select 2.
// 
function askRules () {
  var ruleCount = 0;
  //var upperCaseRule = false;
  //var lowerCaseRule = false
  //var numberRule = false;
  //var specialCharacterRule = false; 

  var userRules = {'upperCaseRule': false,
                   'lowerCaseRule': false,
                   'numberRule': false,
                   'specialCharacterRule': false};

  alert("Now choose 2 more rules for your password to follow.");
  userRules.upperCaseRule = 


}

*/






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* alert("Let's generate a strong password! Follow the instructions."); */
