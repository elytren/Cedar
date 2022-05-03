//roll function: when clicked it "rolls" the dice on the screen populating random images

let diceface = ["/images/compass.jpeg","/images/flashlight.jpeg", "/images/hatchet.png", "/images/flask.png", "/images/tent.png", "/images/s'more.png"]

const rollbutton = document.getElementById("roll")

let die1 = document.getElementById('die1');
let die2 = document.getElementById('die2');
let die3 = document.getElementById('die3');
let die4 = document.getElementById('die4');
let die5 = document.getElementById('die5');


rollbutton.addEventListener('click', (e)=> {
    let randomRoll1 = diceface[Math.floor(Math.random()* diceface.length)];
    let randomRoll2 = diceface[Math.floor(Math.random()* diceface.length)];
    let randomRoll3 = diceface[Math.floor(Math.random()* diceface.length)];
    let randomRoll4 = diceface[Math.floor(Math.random()* diceface.length)];
    let randomRoll5 = diceface[Math.floor(Math.random()* diceface.length)];
    die1.src = randomRoll1;
    die2.src = randomRoll2;
    die3.src = randomRoll3;
    die4.src = randomRoll4;
    die5.src = randomRoll5;
    //once rolled dice will "roll", and two new buttons for re-roll or turn over pop up
    //function to select certain dice for re-roll
    //buttons that come up and ask if they want to re roll or end turn
    // - should only be able to re roll twice after original roll 
    //should only be allowed to have 13 turns before game ends 


});


//numbers inputed into upper section should auto populate a total for upper total score, auto puts number in lower upper section
//lower section auto populate total score
//grand total score calculates lower and upper combined 
let compassInput = document.getElementById('compasses').value;
let flashlightInput = document.getElementById('flashlights').value;
let hatchetInput = document.getElementById('hatchets').value;
let flasksInput = document.getElementById('flasks').value;
let tentsInput = document.getElementById('tents').value;
let smoresInput = document.getElementById('smores').value;

let totalScore1 = document.getElementById('totScor')
let bonusPoints = document.getElementById('bonScor')
let upperSecTot = document.getElementsByClassName('upTot')

let threeKindInput = document.getElementById('3kind')
let fourKindInput = document.getElementById('4kind')
let fullPackInput = document.getElementById('fullP')
let smInput = document.getElementById('smP')
let lgInput = document.getElementById('lgP')
let cedarInput = document.getElementById('cedar')
let lowSecTot = document.getElementById('lowSecTot')
let grandTot = document.getElementById('granTot')

let calc1Button = document.getElementById('calc1')

calc1Button.addEventListener('click', (e)=>{
    let sum = (compassInput + flashlightInput + hatchetInput + flasksInput + tentsInput + smoresInput)
    totalScore1.innerText = sum
    console.log(sum)
});


//function to check for bonus score

// bonusSection(){
    
// }


//show ending score on page



