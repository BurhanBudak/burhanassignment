function Person(namn,email,mobil,adress){
    this.namn = namn;
    this.email = email;
    this.mobil = mobil;
    this.adress = adress; //adress kommer sedan att laddas upp med new Adress vid anrop.
    this.print = function(){
        return(this.namn+'\n\n'+this.adress.gatuadress+ '\n'+this.adress.postnr+' '+this.adress.ort);    
    };   //this.internaAdress.externaAdress, är som ../ men för objekt. 
}
function Adress(gatuadress,postnr,ort){ //Kontruktor för this.adress.
    this.gatuadress = gatuadress;
    this.postnr = postnr;
    this.ort = ort;
};
//burhan.adress = new Adress('gata','postnr','stad') Gamla sättet för att ändra this.adress
let burhan = new Person('Burhan','b.b@gmail.com',07010203040, new Adress('Ymergatan 5', 19500,'Märsta'));
let budak = new Person('Budak','b.b@outlook.com','11414',new Adress('Ragnagatan 14',19999, 'Sigtuna'))
            //När man gör ett anrop till kontruktor funktionen så kommer funtionen att göra ett anrop till new Adress().
console.log(burhan.print());
console.log(budak.print());