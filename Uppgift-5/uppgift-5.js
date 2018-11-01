/*DICE*/
function randomDice(){
    let dice = []; //Arrayen som lagrar alla tal
    for (let i = 1; i <= 1000; i++) {
        dice.push(Math.floor(Math.random()*6)+1); //Valfritt tal mellan 1-6
    }
    return dice;
}

function print() {
    let dice = randomDice();  //IIFE, anropet görs direkt efter att print aktiveras
    //Man kan inte ha anropet efter sorterings loopen då är dice.lenght undefined
        let antal = [0,0,0,0,0,0]; //Poäng system
        for (let i = 0; i < dice.length; i++) {
            switch (dice[i]) {//sortering, varje gång case är lika === elementet i arrayen så händer det en inkrement i antal[]
            case 1: antal[0]++ ; break;
            case 2: antal[1]++ ; break;
            case 3: antal[2]++ ; break;
            case 4: antal[3]++ ;break;
            case 5: antal[4]++ ;break;
            case 6: antal[5]++ ;break;
            default:
            break;
        }//switch
    } //forloop
    console.log('Antal 1 kast:'+antal[0]+'\tAntal 2 kast:'+antal[1]+'\tAntal 3 kast:'+antal[2]
    +'\tAntal 4 kast:'+antal[3]+'\tAntal 5 kast:'+antal[4]+'\tAntal 6 kast:'+antal[5]);
} 
print(); //Anrop av print