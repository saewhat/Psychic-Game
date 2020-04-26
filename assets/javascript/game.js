// variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];

var compChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// this chooses a random letter within the array above as the computer's choice
var compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];

// this updates the 'Guesses Left' counter
function updateGuessesLeft() {
    document.querySelector('#guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
}

// this updates the 'Your Guesses so far' list
function updateGuesses() {
    document.querySelector('#guesses').innerHTML = "Your Guesses so far: " + guesses.join(', ');
}

// resets the computer's choice
function resetCompChoice() {
    compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
}

// resets the game
function reset() {
    guessesLeft = 9;
    guesses = [];

    updateGuesses();
    updateGuessesLeft();
    resetCompChoice();
}

// user's interactions with the website
document.onkeyup = function(event) {
    guessesLeft--;
    var userGuess = event.key;

    guesses.push(userGuess);
    updateGuessesLeft();
    updateGuesses();

        if (userGuess === compGuess) {
            wins++;
            document.querySelector('#wins').innerHTML = "Wins: " + wins;
            alert("Good job! +1");
            reset();
        } else {
            losses++;
            document.querySelector('#loss').innerHTML = "Losses: " + losses;
        }

        if (guessesLeft === 0) {
            alert("GAME OVER!")
            reset();
        }

}