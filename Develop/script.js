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
// The function is dynamic. Tried to make it easier for other programmers to 
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
    //var ruleSetMap = {zerothRule:upperCaseArray, firstRule:lowerCaseArray, secondRule:numberArray, thirdRule:specialSymbolArray};

    while (password.length < chosenLength) {
        var randomlyPickedRule = Math.floor(Math.random() * userRuleSet.length); 
        var randomlyPickedCharacter;

        var theRule = userRuleSet[randomlyPickedRule];
        if (theRule === 'uppercases') {
            var randomlyPickedCharacter = Math.floor(Math.random() * theRule.length);
            password.push(randomlyPickedCharacter);
        } else if (theRule === 'lowercases') {
            var randomlyPickedCharacter = Math.floor(Math.random() * theRule.length);
            password.push(randomlyPickedCharacter);
        } else if (theRule === 'numbers') {
            var randomlyPickedCharacter = Math.floor(Math.random() * theRule.length);
            password.push(randomlyPickedCharacter);
        } else if (theRule === 'specialCharacters') {
            var randomlyPickedCharacter = Math.floor(Math.random() * theRule.length);
            password.push(randomlyPickedCharacter);
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
    } //else if ((x >= 8) && (x <= 128)) { // (1)
        return lengthInt;
    } 
      
}

// Made a counter of how many prompts the user agreed to.
// Made object for storing the t/f values of each rule based on user inputs to confirm functions.
// Confirm with user.
// Reset usersRuleChoice to reuse (just to be safe we reset the bool value).
// Return array of strings of rules user chose. Other rules not in array.
function askRules () {
    var usersRuleChoice = false;
    var userRules = {'upperCaseRule': false,
                    'lowerCaseRule': false,
                    'numberRule': false,
                    'specialCharacterRule': false};

    alert("Choose your rules.");

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
        usersRule.numberRule = true;
    }
    usersRuleChoice = confirm("Do you want to include special characters?");
    if (!(userRules.specialCharacterRule) && (usersRuleChoice)) {
        usersRuleChoice = false;
        userRules.specialCharacterRule = true;
    }

    finalRuleSet = [];
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
    
return finalRuleSet;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/* 
 if (randomlyPickedRule = 0) {
            randomlyPickedCharacter = Math.floor(Math.random() * ruleSetMap[zerothRule].length);
            password.push(randomlyPickedCharacter);
        } else if (randomlyPickedRule = 1) {
            randomlyPickedCharacter = Math.floor(Math.random() * ruleSetMap[firstRule].length);
            password.push(randomlyPickedCharacter);
        } else if (randomlyPickedRule = 2) {
            randomlyPickedCharacter = Math.floor(Math.random() * ruleSetMap[secondRule].length);
            password.push(randomlyPickedCharacter);
        } else if (randomlyPickedRule = 3) {
            randomlyPickedCharacter = Math.floor(Math.random() * ruleSetMap[thirdRule].length);
            password.push(randomlyPickedCharacter);
        }   



        function generatePassword () {
    var chosenLength = askLength();
    if (chosenLength = false) { 
        return chosenLength;
    }

    var userRuleSet = askRules(); //array of rules.
    var password = '';
    var zerothRule = userRuleSet[0];  //"uppercases" (2)
    var firstRule = userRuleSet[1]; //"lowercases"
    var secondRule = userRuleSet[2]; //"numbers"
    var thirdRule = userRuleSet[3]; //"specialCharacters"
    var upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var numberArray = [1,2,3,4,5,6,7,8,9,0];
    var specialSymbolArray = ["!","@","#","$","%","^","&","*"];
    //var ruleSetMap = {zerothRule:upperCaseArray, firstRule:lowerCaseArray, secondRule:numberArray, thirdRule:specialSymbolArray};

    while (password.length < chosenLength) {
        var randomlyPickedRule = Math.floor(Math.random() * userRuleSet.length); 
        var randomlyPickedCharacter;

       

    }
 return password;
}
*/