//1

let personnage = {
    prenom: 'François',
    panier: ["huile","tomate","pain", "lait"],
    derober(){
        this.panier.push(personnage2.panier[0], personnage2.panier[1]);
        personnage2.panier.splice(0,1);
        personnage2.panier.splice(0,1);
    }
}

let personnage2 = {
    prenom: 'Sergio',
    panier: ["huitres","salade","courgette", "or"],
}

console.table(personnage)
console.table(personnage2)
personnage.derober();
console.table(personnage2)
console.table(personnage)
// personnage.derober();
// console.table(personnage2)
// console.table(personnage)