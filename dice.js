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

let die1 = document.getElementById('die1');
let die2 = document.getElementById('die2');
let die3 = document.getElementById('die3');
let die4 = document.getElementById('die4');
let die5 = document.getElementById('die5');

let diceSelection = [die1, die2, die3, die4, die5];

let selectedDice = [];

let timesRolled = 0;
let turnNum = 0;

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
    
    timesRolled += 1;

    //needs to happen after first roll
    if (timesRolled = 1){
        let turnDecision = prompt("End turn? or Re-roll?")
        if (turnDecision === "Re-roll"){
            rollbutton.innerHTML = "Re-roll"
            rollbutton.id = "reRoll"
            console.log(rollbutton.innerHTML)
            console.log(rollbutton.id)
            let reRollBut = document.getElementById("reRoll")
            // diceSelection.forEach.addEventListener('click', ()=> {
            //     //element selected will push into selectedDice array
            // })
            reRollBut.addEventListener('click', ()=> {

            })
            
        }
        else if (turnDecision === "End turn"){
            rollbutton.innerHTML = "End turn"
            rollbutton.id = "endTurn"
            let endTurnButton = document.getElementById("endTurn")
            endTurnButton.addEventListener('click', (e)=>{
                turnNum += 1;
                rollbutton.innerHTML = "Roll"
                rollbutton.id = "roll"
                console.log(turnNum)
                //reset the rolls
            })
            
            
        }
    }



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



