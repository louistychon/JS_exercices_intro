//1
function tablemultiplication() {
    let multiplicateur = 5;
    let resultat;

    for (let index = 0; index <= 9; index++) {
        let multiple = index;
        resultat = multiplicateur * multiple;
        console.log(multiplicateur + " x " + multiple + " = " + resultat)
    }
}

//2
function tablemultiplication2() {
    for (let index = 0; index <= 9; index += 2) {
        let multiple = index;
        resultat = multiplicateur * multiple;
        console.log(multiplicateur + " x " + multiple + " = " + resultat)
    }
}

//3
function moins2depuisvingt() {
    let debut = 20;
    for (let i = 10; i > 0; i--) {
        console.log(debut -= 2);
    }
}

// 4 Créer un tableau avec les prénoms des gens de la classe
//Avec l'aide d'une boucle, mettre les prénoms ayant plus de 5 caractères dans un second tableau //qui se nomme 'longPrenoms'
//4
function triPrenoms() {
    let arr = ["Faisal", "Félicien", "Koumeil", "Sarah", "Maxime", "Yves", "Mounia", "Liri", "Sylvaine", "Zakaria", "Louis"];
    let longPrenoms = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 5) {
            longPrenoms.push(arr[i])
        }
    }
    console.table(longPrenoms);
}

//5 ##  Créer un tableau qui se nomme 'sommes' avec une multitude de valeurs numérique
//## créer un tableau qui se nomme 'grossesSommes'. Si la valeur excède 60, pousser les dans ce tableau et les retirer du tableau sommes
function grosmontants() {
    let sommes = [14, 7, 97, 65, 247, 67, 101, 4, 34, 78, 1, 900, 0, 11, 32, 23, 61];
    let grossesSommes = [];

    for (let i = 0; i < sommes.length; i++) {
        if (sommes[i] >= 60) {
            grossesSommes.push(sommes[i]);
            sommes.splice(i,1);
            i--;
        }
    }
    console.log(sommes);
    console.log(grossesSommes);
}

grosmontants();

//6 ## Triez le contenu du tableau donnees en verifiant le type de chaque donnée
// ## Creez 4 Tableaux : 'typeString' , 'typeNumber' , 'typeObject' , 'typeAutre.
// ## Videz le tableau "donnees" en redistribuant avec l'aide de condition et d'une function prédéfinie trouvé sur internet dans les bons tableaux.

let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];
let typeString = [],
typeNumber = [],
typeObject = [],
typeAutre = [];
donnees = donnees.sort();

for (let i = 0; i < donnees.length; i++) {
    if(typeof(donnees[i]) == "string"){
        typeString.push(donnees[i]);
        donnees.splice(i, 1);
        i--;
    }
    else if(typeof(donnees[i]) == "number"){
        typeNumber.push(donnees[i])
        donnees.splice(i, 1);
        i--;
    }
    else if(typeof(donnees[i]) == "object"){
        typeObject.push(donnees[i])
        donnees.splice(i, 1);
        i--;
    }
    else{
        typeAutre.push(donnees[i])
        donnees.splice(i, 1);
        i--;
    }
}
console.table(donnees); //vide donc ligne vide
console.log(typeString,typeNumber,typeObject,typeAutre)


