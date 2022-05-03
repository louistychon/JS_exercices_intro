//1. ### Via un console.log() vérifie l'egalité entre 1 et "1"
console.log(1 == 1);
//2. ### Via un console.log() vérifie l'egalité STRICTE entre 1 et "1"
console.log(1 === 1);
//3. ### Créer un programme qui demande le prénom d'une personne, si le prénom de la personne comporte moins de 5 caractères, affichée une alerte avec comme message " Ton nom est trop court "
function nom() {
    let name = prompt("Quel est votre nom?");
    if (name.length < 5) {
        alert('Ton nom est trop court')
    }
}



//4. ### Affiche une addition a l'utilisateur et demande lui de résoudre l'addition, si il répond juste, félicitez le, sinon dite lui que c'est incorrect.

function addition() {
    let number1 = Math.floor(Math.random() * 100);
    let number2 = Math.floor(Math.random() * 100);
    let userresponse = prompt('Combien vaut ' + number1 + "+ " + number2 + "?");

    let resultat = number1 + number2;

    if (userresponse == resultat) {
        alert('tu es le boss');
    } else {
        alert('réponse incorrecte');
    }
}

//5. ### Affiche une multiplication à l'utilisateur et demande lui de la résoudre, si il répond juste félicitez le "la réponse était bien xx" sinon dite lui, à combien d'unité il était de la réponse exemple si la réponse etait 35 et qu'il répont 40 renvoyez lui une alerte avec "C'est dommage, tu n'étais qu'a 5 unité de la bonne réponse"

function multiplication() {
    let number1 = Math.floor(Math.random() * 10);
    let number2 = Math.floor(Math.random() * 10);
    let userresponse = prompt('Combien vaut ' + number1 + "* " + number2 + "?");

    let resultat = number1 * number2;

    if (userresponse == resultat) {
        alert('la réponse était bien ' + resultat);
    } else {
        alert("C'est dommage, tu n'étais qu'à " + Math.abs(resultat - userresponse) + " unité(s) de la bonne réponse");
    }
}


//6. ### Créer un programme qui permet d'ajouter des elements dans un tableau via des prompts quand le tableau contient 3 éléments, renvoyez une alerte avec le contenu du tableau

function ajouttab(){
    let x1 = prompt("entrez un élement");
    let x2 = prompt("entrez un deuxième élement");
    let x3 = prompt("entrez un troisième élement");

    let tableau = [x1, x2, x3];

    if (x1 != null && x2 != null && x3 != null){
        alert(tableau);
    }
}

//7. ### Créer un programme qui permet a l'utilisateur de mettre des chiffres dans des bacs, si le chiffre est plus grand ou égal à 12 il va dans le bac "grandNombres" si il est plus petit que 12 il va dans le bac "petitNombres" affiche ensuite une seule alerte avec le contenu des deux bacs

function chiffresDansBacs(){
    let p = prompt('Donnez un nombre');
    let p1 = prompt('Donnez un nombre');
    let p2 = prompt('Donnez un nombre');

    let nombresuser = [p, p1, p2];

    let petitsNombres = [];
    let grandsNombres = [];

    for(let n = 0; n < nombresuser.length; n++){
        if(nombresuser[n] >= 12){
            grandsNombres.push(nombresuser[n]);}
        else{
            petitsNombres.push(nombresuser[n]);
        }
    }

    alert("Petits nombres : " + petitsNombres + "\nGrands nombres : " + grandsNombres)

}
// chiffresDansBacs();

//8. ### Invente un exercice avec ce que tu as appris en Javascript jusqu'a maintenant en incluant des conditions

function conversion(){
    let taux = 1.05;
    let euros = prompt('Combien d euros voulez vous convertir ?');
    let conversion = euros * taux;

    alert('Vos euros valent ' + conversion + "$");
}