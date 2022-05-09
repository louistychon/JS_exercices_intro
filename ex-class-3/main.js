class Objet {
    constructor(name, prix){
        this.name = name;
        this.prix = prix;
    }
}
let canne = new Objet("canne", 25);
let baton = new Objet("baton", 10);

let tableau = [canne, baton];

class Personnage{
    constructor(nom, sac, argent){
        this.nom = nom;
        this.sac = sac;
        this.argent = argent;
        this.prendre = (Objet) => {
            this.sac.push(Objet);
        } 
        this.acheter = (vendeur, Objet) => {
           if(this.argent >= Objet.prix){
               this.sac.push(Objet);
               vendeur.sac.splice(0,1);
               this.argent -= canne.prix;
               vendeur.argent += canne.prix;
           }
           else{
               console.log("pas moyen d'acheter cet objet" + this.personnage + " n'a pas assez d'argent")
           }
            
        }
    }
}

let zakaria = new Personnage("zakaria", [], 100);
let Faisal = new Personnage("Faisal", [], 50);
let personnages = [zakaria, Faisal];

// Faisal.prendre(canne);
// zakaria.prendre(baton);
// console.table(Faisal.sac);
// console.table(zakaria.sac);
// zakaria.acheter(Faisal, canne);
// console.table(Faisal.sac);
// console.table(zakaria.sac);
// console.table(zakaria.argent);
// console.table(Faisal.argent);
// console.table(Faisal.sac);
// Faisal.acheter(zakaria, canne);
// console.table(Faisal.sac);
// console.table(zakaria.argent);
// console.table(Faisal.argent);