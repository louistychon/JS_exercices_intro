//1
function ex1() {
    let nombrex = prompt('Nombre x');
    let nombrey = prompt('Nombre y');
    if (nombrex == nombrey) {
        egalite = true;
        alert("Le nombre x et le nombre y sont-ils égaux? " + egalite);
    } else {
        egalite = false;
        alert("Le nombre x et le nombre y sont-ils égaux? " + egalite);
    }
}

//2
function ex2() {
    let nombrex = prompt('Nombre x');
    let nombrey = prompt('Nombre y');
    let bool;
    if (nombrex < nombrey) {
        bool = true;
        alert('Le nombre x et-il plus petit que le nombre y ? :' + bool);
    }
}

//3

function ex3() {
    let nombre1 = prompt('Nombre x');
    let nombre2 = prompt('Nombre y');
    let nombre3 = prompt('Nombre z');

    let addition = nombre1 + nombre2;

    if (addition > nombre3) {
        bool = true;
        alert('La somme du nombre x + le nombre y est-elle plus grande que le nombre z ? : ' + bool);
    }
}

// ex3();

//4

function ex4() {
    let phrase = prompt('Ecrivez une phrase');
    let length = phrase.length;

    let chars = prompt('Quelle est votre estimation du nombre de chars ?')
    let difference = length - chars;

    if (chars == length) {
        alert('felicitations, c\'est le bon nombre de charactères :' + length)
    } else {
        alert('Incorrect, tu étais à ' + Math.abs(difference) + ' unités de la bonne réponse !')
    }
}

// ex4();

//5

function ex5() {
    let prenom = prompt('Quel est votre prénom ?');

    if (prenom == '') {
        prenom = prompt("Attention vous devez remplir le champs ci-dessous, Quel est votre prénom ?");
        alert('Bonjour ' + prenom);
    } else {
        alert('Bonjour ' + prenom);
    }
}

// ex5();

//6

function ex6() {

    let question = prompt('souhaitez-vous vous abonner ? oui/non')
    if (question == "oui") {
        abonnement()
    } else {
        alert('a+')
    }

    function abonnement() {
        let reponse = prompt('Quel abonnement choisissez-vous ?');
        switch (reponse) {
            case 'Luxe':
                alert('félicitations vous avez choisi la formule Luxe');
                break;
            case 'Normal':
                alert('Merci pour votre abonnement');
                break;
            case '':
                let bool = prompt('Etes-vous certain de changer d\'avis? oui/non');
                if (bool == "oui") {
                    alert('dommage, on vous souhaite une bonne journée');
                } else {
                    reponse = prompt('Quel abonnement choisissez-vous ?');
                    switch (reponse) {
                        case 'Luxe':
                            alert('félicitations vous avez choisi la formule Luxe')
                            break;
                        case 'Normal':
                            alert('Merci pour votre abonnement');
                            break;
                    }
                }
        }
    }
}

// ex6();

//7
function quizz() {
    let question1 = prompt('De quelle couleur est le ciel ?');
    let question2 = prompt('le citron est-il un agrume ?')

    let reponse1 = "bleu";
    let reponse2 = "oui";

    if (question1 == reponse1 && question2 == reponse2) {
        alert('bravo bg !');
    } else if (question1 == reponse1 && question2 != reponse2 || question1 != reponse1 && question2 == reponse2) {
        alert('tu y es presque');
    } else if (question1 != reponse1 && question2 != reponse2) {
        alert('tu es nul, tu as échoué');
    }
}

//quizz();

//8
function cinema() {
    let question1 = prompt('Quel âge avez-vous ?');

    switch (question1) {
        case '0':
            alert('vous n’êtes même pas nés, n’essayez pas de tricher');
            break;
        case "18":
            alert('pouvez rentrer mais c’est tout juste, n\'oubliez pas que ce film peut être choquant.');
            break;
        default:
            if (question1 > 100) {
                alert('vous êtes encore vivant ? Évitez de voir ce film pour le rester.');
            } else if (question1 > 18) {
                alert('vous êtes majeur, vous pouvez réserver');
            } else if (question1 < 0) {
                alert('vous n’êtes même pas nés, n’essayez pas de tricher');
            } else {
                alert('vous êtes mineur, l’accès est réservé aux grands');
            }
    }
}

// cinema();

//8 avancé

function cinemaAvance() {
    //1 définir la date du jour 
    let today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
    console.log(today);

    //2 récupérer la donnée via le prompt 

    let question1 = prompt('Date de naissance svp. Format: dd/mm/yyyy');
    let question1String = question1.toString(); //convert en string
    let table = question1String.split('/', 3); //split au niveau des /
    console.log(table); //check

    //3 soustraire les données pour avoir la diff d'age

    let yeardiff = table[2] - yyyy; // -28 ans
    let monthsdiff = table[1] - mm; // 5 mois
    let daysdiff = table[0] - dd; //19 jours

    let absyeardiff = Math.abs(yeardiff);
    console.log(absyeardiff); // pour check de l'age en console.

    if (absyeardiff == 18) {
        alert('pouvez rentrer mais c’est tout juste, n\'oubliez pas que ce film peut être choquant.');
    } else if (yeardiff > 0 && absyeardiff >= 1) {
        alert('vous n’êtes même pas nés, n’essayez pas de tricher');
    } else if (absyeardiff > 100) {
        alert('vous êtes encore vivant ? Évitez de voir ce film pour le rester.');
    } else if (absyeardiff > 18) {
        alert('vous êtes majeur, vous pouvez réserver');
    } else {
        alert('vous êtes mineur, l’accès est réservé aux grands');
    }
}

// cinemaAvance();

//9

let question1 = prompt('est-ce que vous êtes riche ?');
let question2 = prompt('voulez-vous partir en vacance ?');
let question3 = prompt('est-ce que vous avez un chat ?');

if (question2 != "oui"){
    alert('pas de problème, ne partez pas en vacance');
}

else if (question1 != "oui" || question3 == "oui"){
    alert('Même si vous le voulez, vous ne pouvez pas partir.');
}

else if (question1 == "oui" && question3 != "oui"){
    alert('Vous pourriez partir en vacance si vous le voulez');
}

else if (question1 == "oui" && question3 != "oui" && question2 == "oui"){
    alert('Tout est parfait, partez en vacance !');
}