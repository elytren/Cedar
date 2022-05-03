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
});



//roll function: when clicked it "rolls" the dice on the screen populating random images
//once rolled dice will "roll", and two new buttons for re-roll or turn over pop up
//function to select certain dice for re-roll
//buttons that come up and ask if they want to re roll or end turn
// - should only be able to re roll twice after original roll 
//should only be allowed to have 13 turns before game ends 
//numbers inputed into upper section should auto populate a total for upper total score, auto puts number in lower upper section
//function to check for bonus score
//lower section auto populate total score
//grand total score calculates lower and upper combined 
//show ending score on page
