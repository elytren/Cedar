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
    let reRollChoice = prompt("Which die do you want to re-roll", "one, two, three ...");
    
    if (timesRolled >= 3){
        alert("Out of re-rolls, must end turn");
        window.stop();
    }
    
    // reRollChoice.split(",").forEach(function(diceNum){
    //     rollDice(diceNum);
    // });
    // function rollDice(diceNum){
        if (reRollChoice === "one"){
        one.src = getRandomRoll();
        }
        else if(reRollChoice === "one, two"){
            one.src = getRandomRoll();
            two.src = getRandomRoll();
        }
        else if(reRollChoice === "one, two, three"){
            one.src = getRandomRoll();
            two.src = getRandomRoll();
            three.src = getRandomRoll(); 
        }
        else if(reRollChoice === "one, two, three, four"){
            one.src = getRandomRoll();
            two.src = getRandomRoll();
            three.src = getRandomRoll(); 
            four.src = getRandomRoll();
        }
        else if (reRollChoice === "two"){
        two.src = getRandomRoll();
        }
        else if (reRollChoice === "two, three"){
            two.src = getRandomRoll();
            three.src = getRandomRoll(); 
        }
        else if (reRollChoice === "two, three, four"){
            two.src = getRandomRoll();
            three.src = getRandomRoll(); 
            four.src = getRandomRoll();
        }
        else if (reRollChoice === "three"){
        three.src = getRandomRoll();
        }
        else if (reRollChoice === "four"){
        four.src = getRandomRoll();
        }
        else if (reRollChoice === "five"){
        five.src = getRandomRoll();
        }
        else if(reRollChoice === "all"){
            one.src = getRandomRoll();
            two.src = getRandomRoll();
            three.src = getRandomRoll(); 
            four.src = getRandomRoll();
            five.src = getRandomRoll();
        }
        else {
        alert("Did not select one of the die")
        };
    //};
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


