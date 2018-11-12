var choices =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

    
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var guessChoices = [];


    var userGuess = null;
    
    function updateGuessesLeft() {
        document.querySelector("#guesses-left").innerHTML = guessesLeft;
        console.log(guessesLeft)
    }

 function updateLettersToGuess() {
       userGuess = choices[Math.floor(Math.random() * choices.length)]
       console.log(userGuess)
    }

    function updateGuessesSofar() {
        let guessChoicesToPrint = document.getElementsByClassName("current-guesses")[0].firstElementChild
        guessChoicesToPrint.innerHTML = guessChoices.join(", ")
        updatedGuesses = guessChoicesToPrint.innerHTML
    }

    function resetGame(){
        guessesLeft = 10;
        guessChoices = [];
        updateLettersToGuess();
        updateGuessesLeft();
        updateGuessesSofar();
    }
    // // run these functions when the page loads
    updateLettersToGuess();
    updateGuessesLeft();

    document.onkeyup = function(event){
        console.log(event) 
    // this is going to reduce guesses by one
        guessesLeft--;
        //lower the letter
        var letter = String.fromCharCode(event.which).toLowerCase()
        //add the guess to the guess letters array
        guessChoices.push(letter);
        updateGuessesLeft();
        updateGuessesSofar();
        //if we are out of guesses and did not get the right letter
        if(guessesLeft === 0){
            //then we lose and update html to update loss
            losses++;
            document.querySelector("#losses").innerHTML=losses;
            resetGame();
        }
        if(letter === userGuess){
            wins++;
            document.querySelector("#wins").innerHTML=wins;
            resetGame();
        }
    }
    