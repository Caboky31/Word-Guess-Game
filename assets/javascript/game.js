
var tpWords = ["bob", "giant", "cooper", "diane", "cave", "owl", "coffee"];
let numGuesses = 0; // This stores the current amount of guessed letters
let rand = Math.floor(Math.random() * tpWords.length);
let word = tpWords[rand]; //This is the word chosen at random
let splitWord = word.split('');
let nameLength = word.length;
let correctNumSpace = [];
let hiddenAnswer = word;
let correctKeys = [];
let wrongKeys = [];

// Everything about this  line is a variable ********************************************

// This add an _ to each letter in chosen word
for (var i = 0; n < nameLength; i++) {
    correctNumSpace[i] = "_ ";
}
// This add it to the HTML page
document.getElementById("blankAnswer").innerHTML = correctNumSpace.join("");

// *************************************************************************************************

// Checks what user guesses and alerts user to only guess letters
document.onkeyup = function (event) {
    var userGuess = event.key;
    if (event.keyCode < 65 || event.keyCode > 90) {
        alert("You must select valid letter!")
        return;
    }
    // Checks user guess to chosen word
    checkGuess(word, userGuess);
    // Check if user wrong guess if under 10 if above 10 you lose
    if (numGuesses >= 10) {
        alert("You lose! PLEASE try again")
        return;
    }
    else if (numGuesses < 10 && correctNumSpace.indexOf("_ ") < 0) {   // If user guessed correct letters and in under 10 guesses they win
        alert("You win!!!! You are lucky or have scene TWIN PEAKS!")
        return;
    }
}
// ***************************************************************
// This function checks the user selection to the random word from the TP Array
function checkGuess(hiddenAnswer, userSelection) {
    let doesLetterExist = false;
    for (var i = 0; i < hiddenAnswer.length; i++) {  // These checks the the userGuess to each index of chosen word.
        var search = hiddenAnswer.charAt(i);
        {
            if (search == userSelection) {
                doesLetterExist = true;
                // flip letter to reveal correct letter 
            }
        }
    }
    if (doesLetterExist === true) {
        // 1)Replace any _ with correct letter and space
        if (correctKeys.indexOf(userSelection) >= 0) {
            alert("The letter " + userSelection + " has been checked already! ");
            return;
        }
            // This splits the chosen word to a string to be check against user selection 
        for (var l = 0; l < word.length; l++) {
            if (userSelection == splitWord[l]) {
                correctNumSpace[l] = userSelection + " ";
            }
        }
        // 2) Add letter to array of correct keys
        correctKeys.push(userSelection);
        // 3) redisplay updated array
        document.getElementById("blankAnswer").innerHTML = correctNumSpace.join("");
    }
    else { //This checks the user guess to to wrong key array and alerts user if key already selected
        if (wrongKeys.indexOf(userSelection) >= 0) {
            alert("The letter " + userSelection + " has been checked already! ");
        }
        else {
            // adds incorrect letter to wrongKey array
            wrongKeys.push(userSelection);
            document.getElementById("wrongLetter").innerHTML = wrongKeys.join(" ");
            numGuesses++;
        }
    }
        // This updates the html to show user how many guesses they have
    document.getElementById("numberOfGuesses").innerHTML = "Current Guesses:  " + numGuesses;
};


//**********************************************************************END OF JAVASCRIPT */
