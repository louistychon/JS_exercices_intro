//Supprimer le dernier élément de l'array

let monTab = ['pomme', 'fraise', 'melon', 'citron'];
//méthode 1
monTab = monTab.slice(0, -1);

//méthode 2 
//monTab = monTab.slice(3, 1);
//méthode 3
//monTab.pop();

console.table(monTab);

//Supprimer le premier élément de l'array

monTab.shift();
console.table(monTab);

// Ajouter un élément a la fin de l'array

monTab.push("prune");
console.table(monTab);

//Ajouter un élément au debut de l'array

monTab.unshift("courgette");
console.table(monTab);

//Mettre le deuxième élément en majuscule 

monTab[1] = monTab[1].toUpperCase();
console.table(monTab);

//Changer l'ordre de l'array -> trié par ordre ascii 

monTab.sort();
console.table(monTab);

//Ordonner les chiffres

let chiffres = [4, 5, 2, 1, 3];

// chiffres.sort();
// console.table(chiffres);

//Concaténer les chiffres en un string

let chiffres_text = chiffres.toString();
chiffres_text = chiffres_text.split(',').sort().join('-');
console.log(chiffres_text);

// Utiliser une méthode qui permet de revenir la chaine de caractères en un tableau +  ## Afficher l'array avec les chiffres ordonnées

array = chiffres_text.split('-');
console.table(array);

//Créez un tableau vide

table = [];

table.push("jordan", "mickael", "julien", "norman", "vivien", "Laurann", "Amélie", "Bernard", "Inez", "hervé")

//contenu de l'array

console.table(table);

//taille de l'array

console.table(table.length);

//Touvez l'index de chaque élément

console.table(table.indexOf("julien"));

//Utiliser une methode qui permet de supprimer un element grâce à l'index

let todelete = table.indexOf("julien")
table.splice(todelete, 1);
console.table(table);

//Créez un tableau vide et rajoutez toutes les personnes de la classe. Faite un console.log de quelqu'un aléatoirement dans le tableau

let eleves = [];
eleves.push("Faisal", "Félicien", "Koumeil", "Sarah", "Maxime", "Yves", "Mounia", "Liri", "Sylvaine", "Zakaria", "Louis", "Anis");

var randomID = eleves[Math.floor(Math.random() * eleves.length)];
console.log(randomID);

//En une ligne supprimer 'Anis' du tableau
eleves.splice(11);
console.table(eleves);

