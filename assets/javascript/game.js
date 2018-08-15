// let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Pick a random word from an array

let words = ["the alamo", "golden gate bridge", "grand canyon", "hoover dam", "independance hall", "st louis arch", "mount rushmore", "national mall", "pearl harbor", "statue of liberty", "yellowstone"];

let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

let answer = [];

let word = "";

function initializeGame(){
    word = words[Math.floor(Math.random() * words.length)]
    // remove this word from the words array below

    for (let i = 0; i < word.length; i++) {
        answer[i] = "_";
    }

    let wordString = answer.join(" ");    
    writeWord(wordString);
}
// writes a given string to the .card-text element
// when initialized, just _
// later, with letters
function writeWord( strToWrite ){
    document.querySelector(".card-text").innerHTML = strToWrite;    
}
// the initial game initialization, can be called to reset the game
// with new word
initializeGame();


// Let user make a choice
document.onkeyup = function (event) {
   let userGuess = String.fromCharCode(event.keyCode).toLowerCase();
   let indexes = [];
    // loop through "word" and get indexes matching the letter
    // if( word[i] === userGuess ) indexes.push(i)
    // loop through index arary and replace the indexes that match with the userGuess
    // answer[indexes[i]] = userGuess; 
   console.log(userGuess);
}

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
