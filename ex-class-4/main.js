class Lieu {
    constructor(nom, personnes){
        this.nom = nom;
        this.personnes = personnes;
    }
}

let MolenGeek = new Lieu("MolenGeek",[])
let Snack = new Lieu("Snack",[]);
let Maison = new Lieu("Maison",[]);

class Personne {
    constructor(nom, prenom, argent){
        this.nom = nom;
        this.prenom = prenom;
        this.argent = argent;
        this.seDeplacer = () => {
            bus.embarquer();
        }
    }
}

let Faisal = new Personne("Faisal", "Marij", 10);
let Vanessa = new Personne("Vanessa", "Marij", 100);
let prix_bus = 2.8;

class Bus {
    constructor(Personnes, caisse){
        this.Personnes = Personnes;
        this.caisse = caisse;
        this.embarquer = () => {
            for (let index = 0; index < this.Personnes.length; index++) {
                if(this.Personnes[index].argent >= prix_bus){
                    this.caisse += prix_bus;
                    this.Personnes[index].argent -= prix_bus;
                }
                else{
                    console.log("sortez, vous n'avez pas assez d'argent")
                }
            }
        }
    }
}

let bus = new Bus([Faisal, Vanessa], 0)

//08h30
Faisal.seDeplacer();
console.log(Faisal.argent)
console.log(bus.caisse)
//12h45
Faisal.seDeplacer();
console.log(Faisal.argent)
console.log(bus.caisse)
//17h10
Faisal.seDeplacer();
console.log(Faisal.argent)
console.log(bus.caisse)
