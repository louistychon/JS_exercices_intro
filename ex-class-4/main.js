class Lieu {
    constructor(nom, personnes){
        this.nom = nom;
        this.personnes = personnes;
    }
}

// let MolenGeek = new Lieu("MolenGeek",[])
// let Snack = new Lieu("Snack",[]);
// let Maison = new Lieu("Maison",[]);
// let i = 0
// let places_person = [[], [], []];

class Personne {
    constructor(nom, prenom, argent){
        this.nom = nom;
        this.prenom = prenom;
        this.argent = argent;
        this.seDeplacer = () => {
            bus.embarquer();
            // for (let index = 0; index < 3; index++) {
            //     places_person[index].push(this.prenom);
            //     console.log(places_person[index]);
            //     break;
            // }            
        }
    }
}

let Faisal = new Personne("Marij", "Faisal", 10);
let Vanessa = new Personne("Marij", "Vanessa", 100);
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

let bus = new Bus([Faisal], 0)

//08h30
Faisal.seDeplacer();
console.log(Faisal.argent)
console.log(bus.caisse)
//12h45
Faisal.seDeplacer()
console.log(Faisal.argent)
console.log(bus.caisse)
//17h10

console.log(Faisal.argent)
console.log(bus.caisse)
