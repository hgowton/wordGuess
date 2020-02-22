//Declare variables
var winCounter = 0; 
var currentWord = document.getElementById("currentWord");
var guessCounter = 9;
var guessedLetters = [];
var loses = 0;

var wordDictionary = ["UPENN", "JUSTIN", "AMANDA", "VINCE", "HEATHER"];
var word = wordDictionary[Math.floor(Math.random() * wordDictionary.length)];

console.log(word);

//Create variables that hold ref in HTML


 
//Identify userguess and either insert into word or add to guessed letters
document.onkeypress = function(event) {

    var userGuess = event.key.toUpperCase();
    console.log(userGuess)
    //remove duplicates
    currentWord.innerHTML = "";
    if (guessedLetters.includes(userGuess) === false) {
    //add to guessed letter and subtract from guess counter
        guessedLetters.push(String(userGuess))
        guessCounter--;

        for (var i = 0; i < word.length; i++) {
            if (guessedLetters.includes(word[i])) {
                currentWord.innerHTML+=word[i]
                console.log(currentWord.innerHTML)
    
            }
            else{
                currentWord.innerHTML+=" _ "
    
            }
    
        if (currentWord.innerHTML == word)
        {
            guessedLetters = [];
            guessCounter = 9;
            alert("You Win!  Press another letter to play again!")
            word = "";
            winCounter++;
            word = wordDictionary[Math.floor(Math.random() * wordDictionary.length)];
            console.log(word);
        }

        if (guessCounter === 0) {
            guessedLetters = [];
            loses++;
            guessCounter = 9;
            word = wordDictionary[Math.floor(Math.random() * wordDictionary.length)];
            console.log(word);
        }
        
        console.log(guessedLetters)
        console.log(currentWord.innerText)
        console.log(word)
    }

    

    } 

        //fill in letter on current word
    //Display onscreen
    document.getElementById("winCounter").innerHTML="Wins: " + winCounter
    document.getElementById("guessCounter").innerHTML="Guesses Left: " + guessCounter
    document.getElementById("guessedLetters").innerHTML="Letters Guessed: " + guessedLetters
    document.getElementById("loses").innerHTML="Loses: " + loses

    }


    

