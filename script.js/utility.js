function hideElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmopqrstuvwxbyz'
    const alphabets = alphabetString.split('');
 // get a random number between 0-25
 const randomNumber = Math.random()*25;
 const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    // console.log(index,alphabet);
    return alphabet;
}

function addBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getTextElementValueById(elementId){
     const element = document.getElementById(elementId);
     const elementValueText = element.innerText;
     const value = parseInt(elementValueText);
     return value;
}

function setTextElementValueById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}