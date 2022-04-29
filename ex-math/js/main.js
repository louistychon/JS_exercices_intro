let nombre = 8.56

//arrondit à l'entier le plus proche
console.log(Math.round(nombre));

//arrondit à l'entier vers le haut
console.log(Math.ceil(nombre));

//arrondit à l'entier vers le bas
console.log(Math.floor(nombre));


//Enlever toute la partie décimale
console.log(Math.trunc(nombre));

//Afficher un nombre aléatoire entre 0-1
console.log(Math.random());

//Afficher un nombre aléatoire entre 0-100
console.log(Math.random() * 100);

//--> utiliser Math.floor pour arrondir
console.log(Math.floor(Math.random()* 100));

//Afficher 8 puissance 2
console.log(Math.pow(8,2));

//Afficher racine carré de 9
console.log(Math.sqrt(9));

// Afficher la valeur absolue de -1
console.log(Math.abs(-1));

//Afficher la valeur la plus grande parmi -2, 1000, 8, 57

let nombres = [-2, 1000, 8, 57];
let max = Math.max(...nombres);
console.log(max);

//Afficher la valeur la plus petite parmi -2, 1000, 8, 57
min = Math.min(...nombres);
console.log(min);

