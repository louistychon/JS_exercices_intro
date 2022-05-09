class lieux {
    constructor(nom, contenu, ingredients) {
        this.nom = nom;
        this.contenu = contenu;
        this.ingredients = ingredients;
    }

}

let maison = new lieux("maison", [], "");
let epicerie = new lieux("epicerie", [], []);
let cuisine = new lieux("cuisine", [], []);

class ingredients {
    constructor(nom, etat, prix) {
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}

let poivron = new ingredients('poivron', 'entier', 1);
let oignon = new ingredients('oignon', 'entier', 2);
let oeuf = new ingredients('oeuf', 'entier', 4);
let epice = new ingredients('epice', 'moulu', 3.25);
let fromage = new ingredients('fromage', 'coupé', 1, 6);

class personne {
    constructor(nom, lieu, argent, panier) {
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.panier = panier;
        this.se_deplacer = (x) => {
            return "impossible, vous êtes dans le " + this.lieu
        }
        this.payer = (x) => {
            
        }
        this.couper = (x, y) => {

        }
    }
}

let personnage = new personne("Maxime", "Néant", 100, []);

console.log(personnage.se_deplacer())