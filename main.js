class Lieu {
    constructor(nom, personnes){
        this.nom = nom;
        this.personnes = personnes;
    }
}

let molengeek = new Lieu("MolenGeek", []);
let snack = new Lieu("Snack", []);
let maison = new Lieu("Maison", []);

class Personne {
    constructor(nom, prenom, argent,){
        this.nom = nom;
        this.prenom = prenom;
        this.argent = argent;
        this.seDeplacer = () => {
            stib.embarquer();
        }
    }
}

let tony = new Personne("Montana", "Tony", 25);

class Bus {
    constructor(personne, caisse){
        this.personne = personne;
        this.caisse = caisse;
        this.embarquer = () =>{
            if (tony.argent >= 2.80){
                tony.argent = tony.argent - 2.80;
                stib.caisse = stib.caisse + 2.80;
                this.personne.push(tony)
                alert("Vous pouvez rentrer dans le bus!")
            } else {
                alert("Vous n'avez pas assez d'argent pour prendre le bus!")
            }
        }
    }
}

let stib = new Bus([], 0)

let versMolengeek = confirm(`Bonjour ${tony.prenom}, il est 8h30 c'est l'heure d'aller en cours, souhaites-tu prendre le bus vers ${molengeek.nom}? (Tu as ${tony.argent}€ dans ton porte-monnaie)`)
if (versMolengeek === true){
    alert(`Super, allons à l'école!`)
    tony.seDeplacer();
    molengeek.personnes.push(tony);
    alert(`Tu es arrivé à Molengeek, tu as maintenant ${tony.argent}€ dans ton porte-monnaie!`);
} else{
    alert("Pas de souci, tu peux aussi rester à la maison, mais fait attention, tu risque de perdre ta place à MolenGeek!");
    maison.personnes.push(tony);
}

let mangeSnack = confirm(`Il est 12h45, souhaites-tu aller manger au ${snack.nom}? (Tu as ${tony.argent}€ dans ton porte-monnaie)`);
if (mangeSnack === true){
    alert(`Super, allons manger!`)
    tony.seDeplacer();
    snack.personnes.push(tony);
    alert(`Tu es arrivé au snack, tu as maintenant ${tony.argent}€ dans ton porte-monnaie!`);
} else{
    alert("Tu risque d'avoir faim, mais pas de souci, c'est ton choix");
    molengeek.personnes.push(tony);
}

let retourMolengeek = confirm(`Il est 13h30, il est temps de retourner à ${molengeek.nom} souhaites-tu rentrer à pied?`)
if (retourMolengeek === true){
    alert(`Super, marchons alors!`);
    molengeek.personnes.push(tony);
    alert(`Tu es arrivé à ${molengeek.nom}, tu n'as pas dépensé d'argent pour le transport donc il te reste toujours ${tony.argent}€ dans ton porte-monnaie!`);
} else{
    alert("Pas un bon choix, tu vas devoir dépenser pour le ticket de bus");
    tony.seDeplacer();
    molengeek.personnes.push(tony);
    alert(`Tu es arrivé à ${molengeek.nom}, il te reste maintenant ${tony.argent}€ dans ton porte-monnaie!`);
}

let rentreMaison = confirm(`Il est 17h10, il est temps de rentrer à la ${maison.nom} souhaites-tu rentrer en bus? (Tu as ${tony.argent}€ dans ton porte-monnaie)`)
if (rentreMaison === true){
    tony.seDeplacer();
    maison.personnes.push(tony);
    alert(`Tu es arrivé à la ${maison.nom}, il te reste maintenant ${tony.argent}€ dans ton porte-monnaie!`);
} else{
    alert("Bonne chance pour la marche!");
    maison.personnes.push(tony);
    alert(`Tu es arrivé à la ${maison.nom}, il te reste ${tony.argent}€ dans ton porte-monnaie!`);
}

console.log(maison);
console.log(molengeek);
console.log(snack);
console.log(stib);
console.log(tony);

