// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    if (!password) { // End program. (3) 
        return 0;
    }
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Call askLength and askRules and store return values.
// Check to see if user gave up. 
// while loop: mapping to rules selected by user is done here.
// 
// The function somewhat dynamic, but not entirely. Tried to make it easier for other programmers to add rules.
function generatePassword () {
    var chosenLength = askLength();
    if (chosenLength = false) { 
        return chosenLength;
    }

    var userRuleSet = askRules(); //array of rules.
    var password = '';
    var upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var numberArray = [1,2,3,4,5,6,7,8,9,0];
    var specialSymbolArray = ["!","@","#","$","%","^","&","*"];

    while (password.length < chosenLength) {
        var randomlyPickedRule = Math.floor(Math.random() * userRuleSet.length); 
        var randomlyPickedCharacterInArray; 
        var theRule = userRuleSet[randomlyPickedRule];

        if (theRule === 'uppercases') {
            randomlyPickedCharacterInArray = Math.floor(Math.random() * upperCaseArray.length);
            password.push(upperCaseArray[randomlyPickedCharacterInArray]);
        } else if (theRule === 'lowercases') {
            randomlyPickedCharacterInArray = Math.floor(Math.random() * lowerCaseArray.length);
            password.push(lowerCaseArray[randomlyPickedCharacterInArray]);
        } else if (theRule === 'numbers') {
            randomlyPickedCharacterInArray = Math.floor(Math.random() * numberArray.length);
            password.push(numberArray[randomlyPickedCharacterInArray]);
        } else if (theRule === 'specialCharacters') {
            randomlyPickedCharacterInArray = Math.floor(Math.random() * specialSymbolArray.length);
            password.push(specialSymbolArray[randomlyPickedCharacterInArray]);
        }
    }
 return password;
}

// Alerts user to begin password length selection.
// Store input in var.
// If input is invalid, call function again. User has option to exit (false is returned and used to signal main program).
// If input is valid, return length.
function askLength () {
    var desiredLength = prompt("Enter the password length you want from 8-128 characters.");
    var lengthInt = parseInt(desiredLength, 10); // Parse first continuous number from string. Return with type int.

    if (!(Number.isInteger(desiredLength))) {
        var confirmTryAgain = confirm("Sorry, that doesn't work. Would you like to keep trying?");

        if (confirmTryAgain) {
            askLength();
        } else if (!confirmTryAgain) {
            alert("Okay. Nevermind.");
            return false; 
        }
    } 
    //else if ((x >= 8) && (x <= 128)) { // (1)
    //return lengthInt;
      
}

// Made a counter of how many prompts the user agreed to.
// Made object for storing the t/f values of each rule based on user inputs to confirm functions.
// Confirm with user.
// Reset usersRuleChoice to reuse (just to be safe we reset the bool value).
// Return array of strings of rules user chose. Other rules not in array.
function askRules () {
    var usersRuleChoice = false;
    finalRuleSet = [];
    var userRules = {'upperCaseRule': false,
                    'lowerCaseRule': false,
                    'numberRule': false,
                    'specialCharacterRule': false};

    alert("Choose At least 1 rule.");

    usersRuleChoice = confirm("Do you want to include uppercases?");
    if (!(userRules.upperCaseRule) && (usersRuleChoice)) {
        usersRuleChoice = false;
        usersRuleChoice.upperCaseRule = true;
    }
    usersRuleChoice = confirm("Do you want to include lowercases?");
    if (!(userRules.lowerCaseRule) && (usersRuleChoice)) {
        usersRuleChoice = false;
        usersRuleChoice.lowerCaseRule = true;
    }
    usersRuleChoice = confirm("Do you want to include numbers?");
    if (!(userRules.numberRule) && (usersRuleChoice)) {
        usersRuleChoice = false;
        usersRuleChoice.numberRule = true;
    }
    usersRuleChoice = confirm("Do you want to include special characters?");
    if (!(userRules.specialCharacterRule) && (usersRuleChoice)) {
        usersRuleChoice = false;
        usersRuleChoice.specialCharacterRule = true;
    }

    if (userRules.upperCaseRule) {
        finalRuleSet.push('uppercases');
    }
    if (userRules.lowerCaseRule) {
        finalRuleSet.push('lowercases');
    } 
    if (userRules.numberRule) {
        finalRuleSet.push('numbers');
    }
    if (userRules.specialCharacterRule) {
        finalRuleSet.push('specialCharacters');
    }
    
    if (finalRuleSet.length != 0) {
        return finalRuleSet;
    } else if (finalRuleSet.length === 0) {
        var tryAgainOption = confirm("You didn't pick any rules. You need at least 1. Try again?")
        if (tryAgainOption === true) {
            askRules();
        }
        
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
