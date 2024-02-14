
function continueGame(){
   const alphabet = getRandomAlphabet();
   const setAlphabet = document.getElementById('current-alphabet');
    setAlphabet.innerText = alphabet.toUpperCase();
    // set background color
    addBackgroundColor(alphabet);
    
   
}

function play(){
    hideElement("home-screen");
    showElement("playground-section");
    continueGame();
    
}

// handling key events for the player.
document.addEventListener('keyup',function handleKeyEvents(event){
    playerPressed = event.key;

if(playerPressed === 'Escape'){
    const liveScorePage = document.getElementById('score-section');
    const playgroundSection = document.getElementById('playground-section');
    playgroundSection.classList.add("hidden");
    liveScorePage.classList.remove("hidden"); 
}

    const setAlphabet = document.getElementById('current-alphabet');
    const currentAlphabetValue = setAlphabet.innerText;

    const expectedAlphabet = currentAlphabetValue.toLowerCase()

    console.log(`Current Screen Value is, ${currentAlphabetValue} and Player Pressed, ${playerPressed}`); 

    
    if(playerPressed === expectedAlphabet){
        console.log('You Won a point');
        removeBackgroundColor(expectedAlphabet);

    // Using common Function
        const currentScore = getTextElementValueById('score-button')
        const newScore = currentScore + 1;
        setTextElementValueById('score-button',newScore)
        console.log("Your new score is:",newScore);
        setTextElementValueById('player-score',newScore);

       continueGame();
    }

    else{
// using function value
    const currentLifeValue = getTextElementValueById('life-button');
    const newLifeValue = currentLifeValue - 1;
    setTextElementValueById('life-button',newLifeValue)
        console.log(`You have ${newLifeValue} lives remaining`);
        

        if(newLifeValue == 0){
            const liveScorePage = document.getElementById('score-section');
            const playgroundSection = document.getElementById('playground-section');
            playgroundSection.classList.add("hidden");
            liveScorePage.classList.remove("hidden");
        }
    
 

    }
})

function clickPlayAgain(){
    hideElement('score-section');
    showElement('playground-section');
    const newScore = 0;
    const newLife = 5;

    setTextElementValueById('score-button',newScore)
    setTextElementValueById('life-button',newLife)
}



// simpler way


//    const currentScoreElement = document.getElementById('score-button');
    //    const currentScoreText = currentScoreElement.innerText;
    //    const currentScore = parseInt(currentScoreText);
       
    //    const newScore = currentScore + 1;
    //    currentScoreElement.innerText = newScore;
    //    console.log(newScore);


    //     let lifeElement = document.getElementById('life-button');
    //     let lifeElementText = lifeElement.innerText;
    //     let lifeElementValue = parseInt(lifeElementText);
    //     const newLifeValue = lifeElementValue-1;
    //     lifeElement.innerText = newLifeValue;
    //    console.log('You lose a life');
    //     console.log(newLifeValue);

