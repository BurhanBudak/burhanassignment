let cirkel = function(){
    let radie = prompt('Hur lång cirkelns är radie? Knappa ner tack.');
    let omk = Math.floor(Math.PI*2*radie); //omk = Avrundningner(Pi*2*radie)
    let area = Math.floor(Math.PI*Math.pow(radie,2)); // area= Avrundningner(Pi*(radie)^2)
    return [omk,area]; //returnerar omkrets och area som en array.
}
let result =cirkel(); //resultat blir en array efter att man gör ett anrop
alert('Cirkelns omkrets är '+result[0]+'\n och arean är '+result[1]);