 //VARIABLES
 //=====================================================================

 // Array of Word Options (all lowercase)
 var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 // Solution will be held here.
 var computerGuess = null;
 // This will break the solution into individual letters to be stored in array.
 var guessedLetters = [];
 // This will be the number of blanks we show based on the solution
 var guessesLeft = 9;
 
 // Game counters
 var wins = 0;
 var losses = 0;
 var guessesLeft = 9;

 //Grab DOM/HTML Elements and store in variables.
 var userGuessHTML = document.getElementById('user-guess');
 //  var computerGuessHTML = document.getElementById('computer-guess');
 var winsHTML = document.getElementById('wins');
 var lossesHTML = document.getElementById('losses');
 var guessesleftHTML = document.getElementById('guessesLeft');
 var duplicateHTML = document.getElementById('duplicate');
 //  var tiesHTML = document.getElementById('ties');

 //Create a variable array to hold possible computer choices (r,p,s).
 //  var choices = ['r', 'p', 's'];

 // Create variables for wins/losses/ties.
 var wins = 0;
 var losses = 0;

var computerGuess = updateComputerGuess();

 //FUNCTIONS
 //=============================================================================

 document.onkeyup = function (event) {
   // Capture user's guess
   var userGuess = event.key.toLowerCase();

   console.log("iscg: " + computerGuess);
   //Add into array.
   if (guessedLetters.includes(userGuess)) {
     var duplicate = userGuess;
     duplicateHTML.textContent = "you already choose " + duplicate;
     console.log("You already chose " + userGuess);
   } else {
     var duplicate = '';
     guessesLeft--;
     console.log("guessesLeft: " + guessesLeft);
     guessesleftHTML.textContent = guessesLeft;
     duplicateHTML.textContent = duplicate;
     guessedLetters.push(userGuess)
     console.log(guessedLetters);


     if (userGuess === computerGuess) {
       wins++;
       winsHTML.textContent = wins;
       console.log("wins: " + wins);
       reset();
     } else if (userGuess != computerGuess) {
       console.log("userGuess " + userGuess + " computerGuess: " + computerGuess);
       losses++;
       console.log("losses: " + losses);
       lossesHTML.textContent = losses;
     }
     //invoke wins/losses;
     if (guessesLeft === 0){
       reset();
     }
   }

   //Write results to HTML
   userGuessHTML.textContent = userGuess;
 }

 function updateComputerGuess() { //
   computerGuess = letters[Math.floor(Math.random() * letters.length)];
   console.log(Math.floor(Math.random() * letters.length));
   console.log(Math.random());
   console.log("computerGuess: " + computerGuess);
   return computerGuess
 }

 function updateGuessesSoFar () {
  document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
 }

 function reset() {
   guessesLeft = 9;
   updateComputerGuess();
 }

 // MAIN PROCESS
 //============================================================