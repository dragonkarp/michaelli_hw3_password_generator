// Assignment Code
//else if ((lengthInt <= 8 ) && (lengthInt >= 128)){}; for some reason, the first use of < in the document gives and error. putting at the top and commenting seems like a work around. 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    if (!password) { // End program. (3) 
        return;
    }
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Call askLength and askRules and store return values.
// Check to see if user gave up. 
// while loop: mapping to rules selected by user is done here. (2)

// The function somewhat dynamic, but not entirely. Tried to make it easier for other programmers to add rules.
function generatePassword () {
    var chosenLength = askLength();
    var userRuleSet = askRules(); //array of rules.

    // askLength and askRules return false if user wants to end program. Return value is used in the same way in the parent function, writePassword().
    if (chosenLength === false) { 
        return false;
    } else if (userRuleSet === false) {
        return false;
    }

    var password = [];
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
 return password.join('');
}

// Alerts user to begin password length selection.
// Store input in var.
// If input is invalid, call function again. User has option to exit (false is returned and used to signal main program).
// If input is valid, return length.
function askLength () {
    var desiredLength = prompt("Enter the password length you want from 8-128 characters.");
    var lengthInt = parseInt(desiredLength);

    console.log(typeof desiredLength);
    console.log(desiredLength);
    console.log(typeof lengthInt);
    console.log(lengthInt);

    var x = (Number.isInteger(lengthInt));
    console.log(x);
    
    if (!(Number.isInteger(lengthInt))) {
        var confirmTryAgain = confirm("Sorry, that doesn't work. Would you like to keep trying?");
        if (confirmTryAgain) {
            console.log('1');
            askLength();
        } else if (!confirmTryAgain) {
            console.log('2');
            alert("Okay. Nevermind.");
            return;
        }
    } else if ((lengthInt <= 8 ) && (lengthInt >= 128)){
        var confirmTryAgain_notInRange = confirm("Sorry, the number isn't within the required range: 1 - 128. Would you like to keep trying?");
        if (confirmTryAgain_notInRange) {
            console.log('3');
            askLength();
        } else if (!confirmTryAgain_notInRange) {
            console.log('4');
            alert("Okay. Nevermind.");
            return;
        }
    } else if ((lengthInt >= 8 ) && (lengthInt <= 128)) {
        console.log('5');
        console.log("last block")
        return lengthInt;
    }
}

// Takes user input and populates finalRuleSet.
// Returns array of rules user selects at least 1.
// Function calls itself if user didn't select a rule AND chooses to continue.  
// Function returns false if user doesn't want to try again. 
function askRules () {
    var usersRuleChoice;
    finalRuleSet = [];
    var userRules = {'upperCaseRule': false,
                    'lowerCaseRule': false,
                    'numberRule': false,
                    'specialCharacterRule': false};

    alert("Choose At least 1 rule.");

    usersRuleChoice = confirm("Do you want to include uppercases?");
    if (usersRuleChoice) {
        userRules.upperCaseRule = true;
        console.log(userRules.upperCaseRule)
    }
    usersRuleChoice = confirm("Do you want to include lowercases?");
    if (usersRuleChoice) {
        userRules.lowerCaseRule = true;
        console.log(userRules.lowerCaseRule)
    }
    usersRuleChoice = confirm("Do you want to include numbers?");
    if (usersRuleChoice) {
        userRules.numberRule = true;
        console.log(userRules.numberRule)
    }
    usersRuleChoice = confirm("Do you want to include special characters?");
    if (usersRuleChoice) {
        userRules.specialCharacterRule = true;
        console.log(userRules.specialCharacterRule)
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
    console.log(finalRuleSet);
    
    if (finalRuleSet.length > 0) {
        return finalRuleSet;
    } else { //if (finalRuleSet.length === 0)
        var tryAgainOption = confirm("You didn't pick any rules. You need at least 1. Try again?");
        for (var i = 0; i < finalRuleSet.length; i++) {
            console.log(finalRuleSet[i]);
        }
        if (tryAgainOption === true) {
            askRules();
        } else if (tryAgainOption === false) {
            return false;
        }
    }
}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", writePassword);