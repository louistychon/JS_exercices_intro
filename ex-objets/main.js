//1
let personnage = {
    nom: 'tychon',
    prenom: 'louis',
    age: 24,
    taille: 168,
}
console.log(personnage.age);
//2

let personnage2 = {
    nom: 'dukin',
    prenom: 'aurore',
    age: 23,
    taille: 158,
}
//3
let personnage3 = {
    nom: personnage.nom,
    prenom: 'xxx',
    age: personnage2.age,
    taille: 137,
}

console.log(personnage3);



