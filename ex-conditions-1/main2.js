//1
console.log(1 == 1);

//2

console.log(1 === 1);

//3

function name() {
    let userinput = prompt('quel est votre nom ?')

    if (userinput.length < 5) {
        alert('Ton nom est trop court');
    }
}

//name()

//4
function addition() {
    let number1 = Math.floor(Math.random() * 10);
    let number2 = Math.floor(Math.random() * 10);

    let resultat = number1 + number2;

    let reponse = prompt('combien font' + number1 + '+' + number2 + '?');

    if (reponse == resultat) {
        alert('bg !');
    } else {
        alert("c'est faux !");
    }
}

//5

function multiplication() {
    let number1 = Math.floor(Math.random() * 10);
    let number2 = Math.floor(Math.random() * 10);
    let resultat = number1 * number2;
    let reponse = prompt('combien font ' + number1 + '*' + number2 + '?');
    let difference = resultat - reponse;


    if (reponse == resultat) {
        alert('la réponse était bien ' + resultat);
    } else {
        alert("C'est dommage, tu n'étais qu'a " + difference + " unité(s) de la bonne réponse");
    }

}
// multiplication();

//6
function tableau() {
    let reponse = prompt('element1');
    let reponse2 = prompt('element2');
    let reponse3 = prompt('element3');

    let table = [reponse, reponse2, reponse3];
    console.log(table);
    if(table.length == 3){
        alert(table);
    }
}

// tableau()
