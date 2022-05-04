//numbers inputed into upper section should auto populate a total for upper total score, auto puts number in lower upper section
//lower section auto populate total score
//grand total score calculates lower and upper combined 
let compassInput = document.getElementById('compasses');
let flashlightInput = document.getElementById('flashlights');
let hatchetInput = document.getElementById('hatchets');
let flasksInput = document.getElementById('flasks');
let tentsInput = document.getElementById('tents');
let smoresInput = document.getElementById('smores');

let totalScore1 = document.getElementById('totScor')
let bonusPoints = document.getElementById('bonScor')
let upperSecTot = document.getElementsByClassName('upTot')

let threeKindInput = document.getElementById('3kind')
let fourKindInput = document.getElementById('4kind')
let fullPackInput = document.getElementById('fullP')
let smInput = document.getElementById('smP')
let lgInput = document.getElementById('lgP')
let cedarInput = document.getElementById('cedar')
let lmpInput = document.getElementById('lastMinP')

let lowSecTot = document.getElementById('lowSecTot')
let grandTot = document.getElementById('granTot')

let calc1Button = document.getElementById('calc1')

calc1Button.addEventListener('click', (e)=>{
    let num1 = compassInput.value;
    let num2 = flashlightInput.value;
    let num3 = hatchetInput.value;
    let num4 = flasksInput.value;
    let num5 = tentsInput.value;
    let num6 = smoresInput.value;
    let result = Number(num1) + Number(num2) + Number(num3) 
    + Number(num4) + Number(num5) + Number(num6);
    totalScore1.innerHTML = result;

    totalScore1.innerHTML >= 63 ? bonusPoints.innerHTML = 35: 
    bonusPoints.innerHTML = 0;
   
    Array.from(upperSecTot).forEach(function(totalsecelement){
        let tot1 = totalScore1.innerHTML
        let tot2 = bonusPoints.innerHTML
        
        totalsecelement.innerHTML = Number(tot1) + Number(tot2)
    });
   
});

let calc2Button = document.getElementById('calc2')
let upperSecTot2 = document.getElementById('upTot2')

calc2Button.addEventListener('click', (e)=>{
    let num1 = threeKindInput.value;
    let num2 = fourKindInput.value;
    let num3 = fullPackInput.value;
    let num4 = smInput.value;
    let num5 = lgInput.value;
    let num6 = cedarInput.value;
    let num7 = lmpInput.value;
    let result = Number(num1) + Number(num2) + Number(num3) 
    + Number(num4) + Number(num5) + Number(num6) + Number(num7);
    
    lowSecTot.innerHTML = result;
    grandTot.innerHTML = Number(lowSecTot.innerHTML) + Number(upperSecTot2.innerHTML)
});





//show ending score on page