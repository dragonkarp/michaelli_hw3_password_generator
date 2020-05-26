++++ student notes ++++

:::::: format ::::::
what comment is about, (number code), files code is in: student comments/concerns
UPDATES:
::::::::::::::::::::

type error, (1), script.js: I think it has something to do with how I am using types. I want to get a string, convert it to an int, compare the int to int literals to know if the number is in range. I checked desiredLength's type after using parseInt() and successfully got an int returned. Then I tried to compare them to ints. I also tried basic troubleshooting included restarting VSC, the computer. I have no idea how to fix this if the logic is correct.

need advice, (2), script.js: The commented strings are what the literal strings are. The idea was to map the a type of character(upper,lower,etc) to a number. The purpose of this is to map a randomly generated number from 0-3 and map that number to the rule's appropriate array. Perhaps there is a better way of doing this? The mapping can get confusing.

explanation and need advice, (3), script.js: If the user changes their mind and clicks cancel when line 64 executes, a false bool is returned, checked by generatePassword, then checked by writePassword. writePassword will return 0, ending the program, if the check finds that the user chose to not try again. It doesn't work. I thought it would because I thought functions stop executing when a return statement is executed.
UPDATE: I tried using break instead in the if statement. It only exits the block. It doesn't give me anything to end the program with.

@@@@@ intended functionality @@@@@@@@
The program prompts the user to enter a length from 8-128. If the user enters improper input, they are given a prompt to either keep trying, or give up. If they give up, the program ends. If not, they are prompted again for length. When length is validated, the user is prompted to pick a rule set. If the user picks 0, they are asked if they want to give up, or keep trying. The program ends if they give up. If not, the user is presented with prompts to select a rule set again. If the rule set is not empty, the password is generated.
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

@@@@ to do list @@@@
# debug askRules(). sometimes, it cannot properly detect if the user has selected at least 1 rule, or not.
# Figure out how to end programs.
# test mapping in generatePassword
# figure out why 73 doesn't work



++++++++++++++++++++++


# 03 JavaScript: Password Generator

Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

If you are unfamiliar with special characters, take a look at [some examples](https://www.owasp.org/index.php/Password_special_characters).

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
    WHEN prompted for the length of the password
    THEN I choose a length of at least 8 characters and no more than 128 characters
    WHEN prompted for character types to include in the password
    THEN I choose lowercase, uppercase, numeric, and/or special characters
    WHEN I answer each prompt
    THEN my input should be validated and at least one character type should be selected
    WHEN all prompts are answered
    THEN a password is generated that matches the selected criteria
    WHEN the password is generated
    THEN the password is either displayed in an alert or written to the page
```

The following image demonstrates the application functionality:

![password generator demo](./Assets/03-javascript-homework-demo.png)

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
# hw3_Michael_Li_Random_password_generator
