// Exo 1

let nombreanimaux = 5;
let tabExo = ["perroquet", 5, true, 25, 32];

// Exo 2

console.log(tabExo.length);

// Exo 3

tabExo.pop();
console.table(tabExo);

// Exo 4
tabExo.shift();
console.table(tabExo);

// Exo 5
tabExo.push("coucou", "nnnn");
console.table(tabExo);

// Exo 6
tabExo.unshift("xxx", "zzz", 5464);
console.table(tabExo);

// Exo 7

tabExo.reverse();
console.table(tabExo);

// Exo 8

boiteElias = ["premierobjet"];
boiteElias.push("deuxiemeobjet");

console.table(boiteElias);
//alert(boiteElias);
boiteElias.unshift("troisiemeobjet");
boiteElias.push("objetfondun", "objetfonddeux", "objetfondtrois");
//alert(boiteElias);
console.table(boiteElias);
boiteElias.push("encoreun", "encore2","encore3");
console.table(boiteElias);
//alert(boiteElias);
boiteElias.splice(0, 3);
console.table(boiteElias);
boiteElias.push("rajout");
console.table(boiteElias);
//alert(boiteElias.length);
//splice débute à la fin du tableau par défaut
boiteElias.splice(-2);
console.table(boiteElias);
boiteElias.splice(0, 2);
console.table(boiteElias);
//alert(boiteElias);
boiteElias.sort();
console.table(boiteElias);


//attention la fonction sort ne trie pas les tableaux en fonction de tous leurs chiffres mais uniquement en fonction du premier chiffre

let tableau2 = [21, 358, 565689, 54, 55654654];
tableau2.sort();
console.table(tableau2);

//pour bien trier les tableaux de chiffres, il faut utiliser le bubble sort.
