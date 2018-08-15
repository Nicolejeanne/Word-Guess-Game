// Start of game
alert("Press Ok key to begin!");

// Pick a random word from an array
 let words = ["the alamo", "golden gate bridge", "grand canyon", "hoover dam", "independance hall", "st louis arch", "mount rushmore", "national mall", "pearl harbor", "statue of liberty", "yellowstone"]

 let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
 
 let word = words[Math.floor(Math.random() * words.length)];


// Set up the answer block
 
 let answer = [];
 function getReady() {
 for (var i = 0; i < word.length; i++) {
    answer[i] = "_";
}
let wordString = answer.join(" ");
 document.getElementById(".card-text").innerHTML = wordString;
}

//  remainingLetters = word.length;

//  while (remainingLetters > 0) {
//  return(answer.join(" "));

 
// Let user make a choice
 document.onkeyup = function(event) {
    var userGuess = event.key;
//    var userGuess = String.fromCharCode(KeyboardEvent.keyCode).toUpperCase();
 }
 console.log(userGuess);

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
