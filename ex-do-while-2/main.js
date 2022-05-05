//1

// let table =["hervé", "norbert", "jean", "henri", "sici", "cole", "molie", "kilian", "lompe"];
// let i = 0;

// while( i < 9){
//     console.log('Bonjour ' + table[i]);
//     i++;
// };


//2

// let fruits = ["prune", "poire", "pomme", "banane", "fraise","melon"];
// let i = 0;

// while(i < fruits.length){
//     fruits.splice(i, 1);
//     i = 0;
// }
// console.log(fruits);

//3

// let panierLegumes = ["courgette", "poivron", "poireau", "haricot"];
// let caisseLegumes = [];
// let longueur = panierLegumes.length;
// let i = longueur;


// while (i < 0){
//     caisseLegumes.push(panierLegumes[i]);
//     panierLegumes.splice(i,1);
//     i--;
// }
// console.table(caisseLegumes);
// console.table(panierLegumes);

//4
// let reponse = prompt("Quelle est la capitale du pérou ? ")
// while(reponse !== "lima"){
//     reponse = prompt("Quelle est la capitale du pérou ? ")
// }
// alert('felicitations, c\'est la bonne réponse');


//5
// let reponse = prompt("Quelle est la capitale du pérou ?");
// do {
//     reponse = prompt("Quelle est la capitale du pérou ? ")
// } while (reponse != "lima")

// alert('felicitations, c\'est la bonne réponse');


//6
// //log l'annee courante
// let annee = new Date();
// annee = annee.getYear() + 1900;
// console.log(annee);


// //genère une année au hasard entre 1970 et 2018
// let initial = 1970;
// let nombreRandom = Math.floor(Math.random() * (annee - initial));
// let anneeRandom = initial + nombreRandom;
// // bonnereponse = différences entre année générée auto et 1970
// let bonneReponse = annee - anneeRandom;
// let response = prompt('si je suis né(e) en ' + anneeRandom + " , quel age ai-je aujourd’hui ? (3 essais)");
// let i = 0;

// while(i < 2){
//     if (response == bonneReponse){
//         alert('good job my friend');
//         break;
//     }
//     else {
//         response = prompt('si je suis né(e) en ' + anneeRandom + " , quel age ai-je aujourd’hui ? spoiler: " + bonneReponse);
//         alert('votre essai ' + (i+2) + ' est faux');
//     }
//     i++;
// }

//7

// let panierfruits = [];
// let i = 0;
// let userinput;
// while (i <= 8) {
//     userinput = prompt('entrez un fruit');
//     panierfruits.push(userinput)
//     i++;
// }
// alert(panierfruits);
// let retrait = prompt("désirez-vous retirer un fruit? lequel?");
// let index = 0;
// do{
//     if (retrait == panierfruits[index]) {
//         panierfruits.splice(index,1);
//         alert(panierfruits);
//         retrait = prompt("désirez-vous retirer un fruit? lequel?");
//     }
//     index++;
// }
// while (index < panierfruits.length)
// alert('Merci bon appetit');
// console.table(panierfruits);

// i = 0;
// for (let i = 0; i < panierfruits.length; i++) {
//     panierfruits[i] = panierfruits[i].charAt(0).toUpperCase() + panierfruits[i].slice(1);
// }
// alert(panierfruits);