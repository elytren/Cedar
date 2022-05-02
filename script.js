let diceface = [1,2,3,4,5,6]

const rollbutton = document.getElementById("roll")

rollbutton.addEventListener('click', (e)=> {
   let randomIndex = Math.floor(Math.random() * diceface.length);
   let randomNum = diceface[randomIndex];
   return randomNum; 
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
