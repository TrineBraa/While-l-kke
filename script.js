// Lag en funksjon som generer 2 random tall så lenge tallene er ulike fra hverandre. Når de er like print ut teksten "Equal numbers found" - 
// samt hvilke tall det ble =)
// kan eventuelt også console.log() tallene for hver runde
// OBS: Nettleseren er ikke glad i å oppdatere view mens i en while-loop!


//Modell
let numberOne = 0;
let numberTwo = 1;
let Text = 'result of numbers';

//View
updateView()
function updateView() {
    document.getElementById("app").innerHTML = /*HTML*/ `
        <div id="firstNumber">${numberOne}</div>
        <div id="secoundNumber">${numberTwo}</div>
        <br/>
        <button onclick="giveSomeNumbers()">Generate Number</button>
        <br/>
        <br/>
        <div id="wordDiv">${Text}</div>   
    `;
}


//Control
function giveSomeNumbers() {
    numberOne = 0;
    numberTwo = 1;
    while (numberOne != numberTwo) {
        numberOne = makeRandomNumber()
        numberTwo = makeRandomNumber()
        console.log(numberOne)
        console.log(numberTwo)
    }
    if (numberOne == numberTwo) {
        Text = 'Equal Numbers Detected ' + numberOne + ' and ' + numberTwo;                //Ha en variabel som holder text, document.get... blir overkjørt av updateView funksjonen.
    }
    updateView()
}

function makeRandomNumber() {
    return Math.floor(Math.random() * 11);
}

// function numbersAreEqual() {
//     let EqualNumber = 'Equal Numbers Detected'
//     return document.getElementById("wordDiv").innerHTML = EqualNumber;
// }