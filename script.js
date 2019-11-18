function startGame (){
    let playPrompt = prompt ("Do you wanna play?");
    playPrompt = playPrompt.toLowerCase();
    if (playPrompt === "yes") {
    namePrompt = prompt("What is your name?");
    startCombat();
    }
    else if (playPrompt === "no") {
    console.log("Come back soon");
    }
    }
    
    function getDamage () {
    return Math.floor(Math.random() * 5) + 1;
        }
    
    function startCombat () {
        let userPoints = 40;
        let grantPoints = 10;
        let playWin = 0;
    while (userPoints>0 && playWin<=3){
    userPoints -= getDamage();
    grantPoints -= getDamage();
    
    console.log(`${namePrompt} has ${userPoints} health left.`);
    console.log(`Grant the Mighty Chicken has ${grantPoints} health left.`);
    
    if (grantPoints <= 0) {
      playWins += 1;
      grantPoints = 10;
    }
    if (playWin === 3) {
     console.log(`${namePrompt} won!`);
     }
     else if (userPoints <=0) {
    console.log(`${namePrompt} lost`);
     }
    let userDecision = prompt ("Would you like to attack or quit?");
     if (userDecision === "attack") {
         startCombat ();
     }
     else if (userDecision === "quit") {
         console.log("See you next time");
         break;
     }
    }
    }
    startGame();