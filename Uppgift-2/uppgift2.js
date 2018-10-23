let hypotens = function(){
    let kateter = prompt('Ange två kateter med , tecken mellan längderna:');
    let tal = kateter.split(','); //Omvandlar stringen till en array så att man bara använder en prompt().
    console.log(tal);
    return Math.sqrt(Math.pow(tal[0],2)+Math.pow(tal[1],2)); //returnernar
    //
}
alert('Hypotenusan är: '+Math.round(hypotens())); //Anrop till den anonyma funktionen. 