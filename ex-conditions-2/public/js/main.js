//exercice 1 comparaison de nombres
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

//exercice 2 comparaison de nombres
function ex2() {
    let nombrex = prompt('Nombre x');
    let nombrey = prompt('Nombre y');
    let bool = (nombrex < nombrey);
    alert('Le nombre x et-il plus petit que le nombre y ? :' + bool);
}

//exercice 3 comparaison de nombres

function ex3() {
    let nombre1 = +prompt('Nombre x');
    let nombre2 = +prompt('Nombre y');
    let nombre3 = +prompt('Nombre z');

    let addition = nombre1 + nombre2;
    let bool = (addition > nombre3);
    console.log(bool);
    alert('La somme du nombre ' + nombre1 + 'et ' + nombre2 + ' est-elle plus grande que le nombre ' + nombre3 + ' ? : ' + bool);
}

// ex3();

//exercice 4 - longueur de phrase

function ex4() {
    let phrase = prompt('Ecrivez une phrase');

    let chars = prompt('Quelle est votre estimation du nombre de chars pour la phrase?' + phrase + '?')
    let difference = phrase.length - chars;

    if (chars == phrase.length) {
        alert('felicitations, c\'est le bon nombre de charactères :' + phrase.length)
    } else {
        alert('Incorrect, tu étais à ' + Math.abs(difference) + ' unités de la bonne réponse !')
    }
}

//ex4();

//exercice 5 - demande prénom

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

//exercice 6 - abonnement

function ex6() {

    let question = confirm('souhaitez-vous vous abonner ? oui/non')
    if (question == true) {
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
                let bool = confirm('Etes-vous certain de changer d\'avis? oui/non');
                if (bool == true) {
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
                default:
                    alert('Réponse non reconnue');
        }

    }
}

// ex6();

//exercice 7 - Quizz
function quizz() {
    let x = 1
    let rep1 = "reponse1"
    let rep2 = "reponse2"
    let q1 = prompt("q1")
    let q2 = prompt("q2")
    while (x == 1) {
        if (q1 == rep1 && q2 == rep2) {
            console.log("tout juste")
            x = 0

        } else if (q1 == rep1 && q2 != rep2) {
            console.log("rep q2 fausse")
            while (x == 1) {
                q2 = prompt("q2")
                if (q2 == rep2) {
                    x = 0
                }
            }
        } else if (q1 != rep1 && q2 == rep2) {
            console.log("rep q1 fausse")
            while (x == 1) {
                q1 = prompt("q1")
                if (q1 == rep1) {
                    x = 0
                }
            }
        } else if (q1 != rep1 && q2 != rep2) {
            console.log("tes nul")
            x = 0
        }
    }
}

//quizz();

//exercice 8 - cinéma
function cinema() {
    let question1 = prompt('Quel âge avez-vous ?');

    switch (question1) {
        case '0':
            alert('vous êtes mineur, l’accès est réservé aux grands');
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

//exercice 8 - cinéma avancé

function cinemaAvance() {
    //1 définir la date du jour 
    let today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //janvier = 0, on rajoute 1
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
    console.log(today);

    //2 récupérer la donnée via le prompt 

    let question1 = prompt('Date de naissance svp. Format: jj/mm/aaaa');
    if (question1 == '') {
        question1 = prompt('Réentrez votre date de naissance (Format: jj/mm/aaaa)');
    }
    let question1String = question1.toString(); //convert en string
    let table = question1String.split('/', 3); //split au niveau des /
    console.log(table); //check

    //3 soustraire les données pour avoir la diff d'age

    let yeardiff = table[2] - yyyy; // -28 ans -> attention nombre négatif
    let monthsdiff = table[1] - mm; // 5 mois
    let daysdiff = table[0] - dd; //19 jours 

    let absyeardiff = Math.abs(yeardiff);
    console.log(absyeardiff); // pour check de l'age en console (avec marge d'erreur d'un an).

    //4 définir si la personne est majeure

    if (yeardiff == -18 && monthsdiff == 0 && daysdiff <= 0) {
        alert('pouvez rentrer mais c’est tout juste, n\'oubliez pas que ce film peut être choquant.');
    } else if (yeardiff == -18 && monthsdiff == 0 && daysdiff >= 0) {
        alert('vous êtes mineur, l’accès est réservé aux grands');
    } else if (yeardiff == -18 && monthsdiff < 0) {
        alert('pouvez rentrer mais c’est tout juste, n\'oubliez pas que ce film peut être choquant.');
    } else if (yeardiff == -18 && monthsdiff > 0) {
        alert('vous êtes mineur, l’accès est réservé aux grands');
    } else if (yeardiff > 0 && absyeardiff >= 1) {
        alert('vous n’êtes même pas nés, n’essayez pas de tricher');
    } else if (yeardiff < -100) {
        alert('vous êtes encore vivant ? Évitez de voir ce film pour le rester.');
    } else if (yeardiff < -18) {
        alert('vous êtes majeur, vous pouvez réserver');
    } else if (yeardiff >= -17) {
        alert('vous êtes mineur, l’accès est réservé aux grands');
    } else {
        alert('le format de date que vous avez entré est mauvais');
    }
}

// cinemaAvance();

// exercice 9 - vacances

function vacances() {
    let question1 = prompt('est-ce que vous êtes riche ? (true/false)');
    let question2 = prompt('voulez-vous partir en vacance ? (true/false)');
    let question3 = prompt('est-ce que vous avez un chat ? (true/false)');
    
    if (question1 == "true" && question2 == "true" && question3 == "false") {
        alert('Tout est parfait, partez en vacance !');
    } else if (question1 == "true" && question2 == "false" && question3 == "false" || question1 == "true" && question2 == "false" && question3 == "true") {
        alert('pas de problème, ne partez pas en vacance');

    } else if (question1 == false || question3 == true) {
        alert('Même si vous le voulez, vous ne pouvez pas partir.');
    } else if (question1 == true && question3 == false) {
        alert('Vous pourriez partir en vacance si vous le voulez');
    }
}

vacances()

//exercice9 - vacances - v2 sans prompts;

function vacances2() {

    let question1 = confirm('est-ce que vous êtes riche ?');
    let question2 = confirm('voulez-vous partir en vacance ?');
    let question3 = confirm('est-ce que vous avez un chat ?');

    
    if (question1 == true && question2 == true && question3 == false) {
        alert('Tout est parfait, partez en vacance !');
    } else if (question1 == true && question2 == false && question3 == false || question1 == true && question2 == false && question3 == true) {
        alert('pas de problème, ne partez pas en vacance');

    } else if (question1 == false || question3 == true) {
        alert('Même si vous le voulez, vous ne pouvez pas partir.');
    } else if (question1 == true && question3 == false) {
        alert('Vous pourriez partir en vacance si vous le voulez');
    }
}
//vacances2()