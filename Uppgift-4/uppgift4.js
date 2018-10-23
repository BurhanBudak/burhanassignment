function sphere(){
    let r = prompt('Ange radien tack!');
    let v = Math.round((4*Math.PI*Math.pow(r,3))/3); // v=Avrundning((4*pi*r^3)/3)
    let a = Math.round(4*Math.PI*Math.pow(r,2));  //a = Avrundning((4*pi*r^2)
    return res = [v,a]; //returnerar två tal tack vare arrayen
}
sphere();
console.log(res);
alert('Sfärens volym är '+res[0]+' m3 och arean är '+res[1]+' m2'); //Jag bara valde en enhet för det ser finnare ut