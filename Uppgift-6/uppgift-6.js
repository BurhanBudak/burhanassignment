let n = +prompt('Vad är fakulteten!')
function fakultet(n) {
    let f = 1;
    for (let i = 1; i <= n; i++) { //Exempel så börjas det med 1*1,1*2,2*3....osv
         f = f * i
    }
    if(f>Number.MAX_VALUE){
        document.getElementById('msg').innerHTML= 'Fakulteten är infinity för att '+n+'! är större än 1.7976931348623157e+308';
    }
    else{
    return document.getElementById('msg').innerHTML= 'Fakulteten av '+n+'! är '+f;
    }
}
let svar = fakultet(n);

console.log(svar);
