
// Create module variables and arrays
let words = ["the-alamo", "golden-gate-bridge", "grand-canyon", "hoover-dam", "independance-hall", "st-louis-arch", "mount-rushmore", "national-mall", "pearl-harbor", "statue-of-liberty", "yellowstone"];

let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "-"]

let answerArray = [];

let word = "";

let wins = 0;
let guesses = 0;
let remainingGuesses = 0;


// Initialize game function and picks a random word from an array of words
function initializeGame(){
    word = words[Math.floor(Math.random() * words.length)]

// Create array of blank underscores that equal the number of letters in each randomly chosen word
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
 
// Join array of blank spaces together as string with spaces
    let wordString = answerArray.join(" ");    
    writeWord(wordString);
}
// writes a given string to the .card-text element when intialized just later, with letters
function writeWord( strToWrite ){
    document.querySelector(".card-text").innerHTML = strToWrite;    
}

// Calling the game initialization, can be called to reset the game with new word
initializeGame();
// Hit reset button to choose another word
$(".btn-danger").on("click", function() {
    initializeGame();
  });

// Let user make a choice
// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

// Determines which key was pressed.
let userGuess = event.key;
userGuess = userGuess.toLowerCase();

// The game loop
    if (letters.includes(userGuess) === false) {
        alert("Please choose a letter!");  
        // I thought this next else statement would add letters to the letters guessed box. It does but then letters no longer show up in the actual puzzle. Also, no matter where I put the remainingGuesses--, the remaining guesses never count down.
            // } else if (answerArray.includes(userGuess) === false) {
            // remainingGuesses--;
            // document.querySelector(".letters-guessed").innerHTML = ("Letters guessed: " + userGuess);
    } else {
        for (let j = 0; j < word.length; j++) {
        if (word[j] === userGuess){
            answerArray[j] = userGuess;
            let wordString = answerArray.join(" ");    
            writeWord(wordString);
            remainingGuesses--;
            }
        }
    }
}
// To keep score
// This was supposed to add to the wins tally. It doesn't work. If I changed the === to a >= it shows one but never changes.
if (answerArray === word.length) {
    wins++;
    document.querySelector(".wins").innerHTML = ("Wins: " + wins);
}
// This sets the initial number of remaining guesses for each word.
remainingGuesses = word.length + 4;
document.querySelector(".guesses").innerHTML = ("Remaining guesses: " + remainingGuesses);


// Still need a function for winning/losing the game, increments and reinitialize the game


// function for losing the game, increments and reinitialize the game

