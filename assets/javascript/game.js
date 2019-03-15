// Array of words for Game
var tpWords = ["bob", "giant", "cooper", "diane", "cave", "owl", "coffee"];

let numGuesses = 0; // This stores the current amount of guessed letters

// need a function that picks a random word from the array

var rand = Math.floor(Math.random() * tpWords.length);

var word = tpWords[rand]; //This is the word chosen at random


// Log word to console to check if random word is from tpWords array
console.log(word);


document.onkeyup = function (event) {
    var userGuess = event.key;
    if (event.keyCode < 65 || event.keyCode > 90) {
        alert("You must select valid letter!")
        return;
    }
    console.log(userGuess)
    checkGuess(word, userGuess);

    if (numGuesses >= 10) {
        alert("You lose!")
    }

}


var nameLength = word.length;
var letterPosition = 0;
var blankWord = "";


while (letterPosition < nameLength) {
    blankWord = blankWord + "_ ";
    letterPosition++;
}

document.getElementById("blankAnswer").innerHTML = blankWord

var hiddenAnswer = word;
var correctKeys = [];
var wrongKeys = [];



function checkGuess(hiddenAnswer, userSelection) {

    let doesLetterExist = false;

    for (var i = 0; i < hiddenAnswer.length; i++) {

        var search = hiddenAnswer.charAt(i);
        {
            if (search == userSelection) {

                doesLetterExist = true;
                // flip letter to reveal correct letter
            } 
            if (userSelection.indexOf(hiddenAnswer)> -1 )  {
                console.log("Can you storm troopers kill red shirts?")
            }
        }
    }

    if (doesLetterExist === true) {
        correctKeys.push(userSelection);
        document.getElementById("blankAnswer").innerHTML = correctKeys.join("");
    } 
    
    else {
        if (wrongKeys.indexOf(userSelection) >= 0) {
            alert("The letter " + userSelection + " has been checked already! "); 

          
            
        }
        else {
              // adds incorrect letter to wrongKey array
            wrongKeys.push(userSelection);
            document.getElementById("wrongLetter").innerHTML = wrongKeys;
            numGuesses++;
        }
    
    }

    document.getElementById("numberOfGuesses").innerHTML = "Current Guesses:  " + numGuesses;
};



