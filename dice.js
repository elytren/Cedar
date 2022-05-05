//roll function: when clicked it "rolls" the dice on the screen populating random images
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

let diceSelection = [one, two, three, four, five];



let selectedDice = [];

let timesRolled = 0;
let turnNum = 0;

let reRollBut = document.createElement("button");
    reRollBut.id = "reRoll";
    reRollBut.innerText = "Re-roll";

let endTurnBut = document.createElement("button");
    endTurnBut.id = "endTurnBut";
    endTurnBut.innerText = "End Turn";

let randomRoll = diceface[Math.floor(Math.random()* diceface.length)]

function getRandomRoll(){
    return diceface[Math.floor(Math.random()* diceface.length)]
}

rollbutton.addEventListener('click', (e)=> {
    // let randomRoll1 = diceface[Math.floor(Math.random()* diceface.length)];
    // let randomRoll2 = diceface[Math.floor(Math.random()* diceface.length)];
    // let randomRoll3 = diceface[Math.floor(Math.random()* diceface.length)];
    // let randomRoll4 = diceface[Math.floor(Math.random()* diceface.length)];
    // let randomRoll5 = diceface[Math.floor(Math.random()* diceface.length)];
    one.src = getRandomRoll();
    two.src = getRandomRoll();
    three.src = getRandomRoll();
    four.src = getRandomRoll();
    five.src = getRandomRoll();
    // one.src = randomRoll1;
    // two.src = randomRoll2;
    // three.src = randomRoll3;
    // four.src = randomRoll4;
    // five.src = randomRoll5;

    timesRolled += 1;
    console.log(timesRolled)
    rollbutton.replaceWith((reRollBut), (endTurnBut));
    

    
    



    //needs to happen after first roll
    // if (timesRolled < 3){
    //     let turnDecision = prompt("End turn? or Re-roll?")
    //     if (turnDecision === "Re-roll"){
    //         rollbutton.innerHTML = "Re-roll"
    //         rollbutton.id = "reRoll"
    //         console.log(rollbutton.innerHTML)
    //         console.log(rollbutton.id)
    //         let reRollBut = document.getElementById("reRoll")
    //         // diceSelection.forEach.addEventListener('click', ()=> {
    //         //     //element selected will push into selectedDice array
    //         // })
    //         reRollBut.addEventListener('click', ()=> {

    //         })
            
    //     }
    //     else if (turnDecision === "End turn"){
    //         rollbutton.innerHTML = "End turn"
    //         rollbutton.id = "endTurn"
    //         let endTurnButton = document.getElementById("endTurn")
    //         endTurnButton.addEventListener('click', (e)=>{
    //             turnNum += 1;
    //             //return back to original state? 
    //             rollbutton.innerHTML = "Roll"
    //             rollbutton.id = "roll"
    //             console.log(turnNum)
    //             //reset the rolls
    //         })
            
            
    //     }
    // }



    // console.log(timesRolled)
    
    // for (let diceRoll=0; diceRoll<=3; diceRoll++){
    //     if (diceRoll < 3){
    //         console.log("nice roll")
    //     }
    //     else{
    //         console.log("turn over")
    //     }
    // }
    // let turnDecision = prompt("End turn? or Re-roll?")

    
});



reRollBut.addEventListener('click', (e)=>{
    timesRolled += 1;
    console.log(timesRolled)
    let reRollChoice = prompt("Which die do you want to re-roll", "one, two, three ...");
    
    if (timesRolled >= 3){
        alert("Out of re-rolls, must end turn");
        window.stop();
    }
    
    
    reRollChoice.split(",").forEach(function(diceNum){
        rollDice(diceNum);
    });
    function rollDice(diceNum){
        if (reRollChoice === "one"){
        one.src = getRandomRoll();
        }
        
        // else if(reRollChoice === "one, two"){
        //     one.src = getRandomRoll();
        //     two.src = getRandomRoll();
        // }
        // else if(reRollChoice === "one, two, three"){
        //     one.src = getRandomRoll();
        //     two.src = getRandomRoll();
        //     three.src = getRandomRoll(); 
        // }
        // else if(reRollChoice === "one, two, three, four"){
        //     one.src = getRandomRoll();
        //     two.src = getRandomRoll();
        //     three.src = getRandomRoll(); 
        //     four.src = getRandomRoll();
        // }
        else if (reRollChoice === "two"){
        two.src = getRandomRoll();
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
    }
})


endTurnBut.addEventListener('click', (e)=>{
    turnNum += 1;
    if (turnNum == 13){
        alert("Stop packing you're ready to go! Score " + Number(grandTot.innerHTML))
    }
    // endTurnBut.reset();
    console.log(turnNum)


})






 //once rolled dice will "roll", and two new buttons for re-roll or turn over pop up
    //function to select certain dice for re-roll (make dice images buttons/selections)
    //buttons that come up and ask if they want to re roll or end turn
    // - should only be able to re roll twice after original roll 
    //should only be allowed to have 13 turns before game ends 

//prompt for a re roll?

//promises for ansync operations for roll 

// Promise.resolve().then(function(){
//     rollbutton.addEventListener('click', (e)=> {
//         let randomRoll1 = diceface[Math.floor(Math.random()* diceface.length)];
//         let randomRoll2 = diceface[Math.floor(Math.random()* diceface.length)];
//         let randomRoll3 = diceface[Math.floor(Math.random()* diceface.length)];
//         let randomRoll4 = diceface[Math.floor(Math.random()* diceface.length)];
//         let randomRoll5 = diceface[Math.floor(Math.random()* diceface.length)];
//         die1.src = randomRoll1;
//         die2.src = randomRoll2;
//         die3.src = randomRoll3;
//         die4.src = randomRoll4;
//         die5.src = randomRoll5;
//     })
// }).then(function(){
//     let turnDescision = window.prompt("End turn? or Re-roll?");
//     console.log(turnDescision)
//     return turnDescision;
// })



