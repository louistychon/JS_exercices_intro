//création class Lieu

class Lieu {
    constructor(nom, personnes){
        this.nom = nom;
        this.personnes = personnes;
    }
}



let MolenGeek = new Lieu("MolenGeek",[])
let Snack = new Lieu("Snack",[]);
let Maison = new Lieu("Maison",[]);
let places_person = [[], [], []];
let i = 0


class Personne {
    constructor(nom, prenom, argent){
        this.nom = nom;
        this.prenom = prenom;
        this.argent = argent;
        this.seDeplacer = () => {
            bus.embarquer();
            if(i > 1)
            places_person[i].push(this.prenom);
            i++;
        }
    }
}

let Faisal = new Personne("Marij", "Faisal", 50);
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
Faisal.seDeplacer() // Faisal se retrouve donc dans le 3 eme lieu
console.log(Faisal.argent) // il a dépense 3x 2.80 = 8.40
console.log(bus.caisse) // la caisse du bus a été augmentée de 8.40

console.log(places_person)
