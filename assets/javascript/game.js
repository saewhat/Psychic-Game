// variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];

var compChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// this chooses a random letter within the array above as the computer's choice.
var compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];

