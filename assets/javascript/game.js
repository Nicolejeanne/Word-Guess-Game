
// Create module variables and arrays
let words = ["the-alamo", "golden-gate-bridge", "grand-canyon", "hoover-dam", "independance-hall", "st-louis-arch", "mount-rushmore", "national-mall", "pearl-harbor", "statue-of-liberty", "yellowstone"];

let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "-"]

let answerArray = [];

let word = "";

let wins = 0;
let guesses = 0;


// Initialize game function and picks a random word from an array of words
function initializeGame(){
    word = words[Math.floor(Math.random() * words.length)]

    // remove this word from the words array below
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

// the initial game initialization, can be called to reset the game with new word
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
// document.onkeyup = function (event) {
    // let userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
console.log(userGuess);
// The game loop
// while (remainingLetters > 0) {
     
    if (letters.includes(userGuess) === false) {
        alert("Please choose a letter!");
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

// Create variable to keep track of letters guessed
let remainingGuesses = word.length + 4;
document.querySelector(".guesses").innerHTML = ("Remaining guesses: " + remainingGuesses);

// make two functions win and loss
// each will increment and reinitialize the game

// Populate score table

let lettersGuessedElement = document.querySelector(".letters-guessed")
function displayLettersGuessed(letter){
    remainingGuesses--; 
    lettersGuessedElement.innerHTML = remainingGuesses;
}


// Let user make a choice
// document.onkeyup = function (event) {
//    let userGuess = String.fromCharCode(event.keyCode).toLowerCase();
//    let indexes = [];


//    words.indexOf[i];
//    while(i>0)
    // loop through "word" and get indexes matching the letter
    // if( word[i] === userGuess ) indexes.push(i)
    
    // loop through index arary and replace the indexes that match with the userGuess
    // answer[indexes[i]] = userGuess; 
//    console.log(userGuess);


// Display choice user makes, either in puzzle or in letter bank
// Count down number of guesses
// Show a win if user guesses the puzzle
// Display puzzle solution if player wins
// Display puzzle solution photo when player wins
// reset to new puzzle upon key hit after winning or losing


// <!-- catches
// if (userGuess === "a letter") {
    // alert("chosen correctly!");
//  }
//  else {
    //  alert("Please choose a letter");
//  }
