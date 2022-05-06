let diceface = [
    "/images/compass.jpeg",
    "/images/flashlight.jpeg",
    "/images/hatchet.png",
    "/images/flask.png", 
    "/images/tent.png",
    "/images/s'more.png"
];

const rollbutton = document.getElementById("roll")

let one = document.getElementById('die1');
let two = document.getElementById('die2');
let three = document.getElementById('die3');
let four = document.getElementById('die4');
let five = document.getElementById('die5');

let timesRolled = 0;
let turnNum = 0;

let reRollBut = document.createElement("button");
    reRollBut.id = "reRoll";
    reRollBut.innerText = "Re-roll";

let endTurnBut = document.createElement("button");
    endTurnBut.id = "endTurnBut";
    endTurnBut.innerText = "End Turn";

// const diceSel = {one, two, three, four, five}

function getRandomRoll(){
    return diceface[Math.floor(Math.random()* diceface.length)]
}

rollbutton.addEventListener('click', (e)=> {
    one.src = getRandomRoll();
    two.src = getRandomRoll();
    three.src = getRandomRoll();
    four.src = getRandomRoll();
    five.src = getRandomRoll();
    timesRolled += 1;
    console.log(timesRolled)
    rollbutton.replaceWith((reRollBut), (endTurnBut));
});



reRollBut.addEventListener('click', (e)=>{
    timesRolled += 1;
    console.log(timesRolled)
    
    let reRollChoice = prompt("Which die do you want to re-roll");
    
    reRollChoice.split(",").forEach(function(dice) {
        let trimmedDice = dice.trim();
      
        if (trimmedDice == "one") { 
          one.src = getRandomRoll()
        }
      
        if (trimmedDice == "two") {
          two.src = getRandomRoll()
        }
      
        if (trimmedDice == "three") {
          three.src = getRandomRoll()
        }
      
        if (trimmedDice == "four") {
          four.src = getRandomRoll()
        }
        if (trimmedDice == "five"){
            five.src = getRandomRoll()
        }
      });
    if (timesRolled >= 3){
        alert("Out of re-rolls, must end turn");
        window.stop();
    }
   
});


endTurnBut.addEventListener('click', (e)=>{
    turnNum += 1;
    timesRolled = 0;
    if (turnNum == 13){
        alert("Stop packing you're ready to go! Score " + Number(grandTot.innerHTML))
    };
    endTurnBut.remove();
    reRollBut.replaceWith(rollbutton);
    
   
    console.log(timesRolled)
    console.log(turnNum)

});