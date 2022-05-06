//1

function reverseNumber(number) {
    number = number.toString().split('').reverse().join('');
    console.log(number);
}

reverseNumber(851);

//2

function divPar2(x) {
    switch (x % 2) {
        case 0:
            console.log(
                `Le num  est divisible par 2 ${x}:2 = ${x/2}`)
            break;
        case 1:
            console.log(
                "Ce nombre n'est pas divisible par 2")
            break;
        default:
            break;
    }
}

divPar2(4);
divPar2(5);

//3

function logIn() {
    let mdp = prompt("entrez le mdp");
    while (mdp != "mdp") {
        mdp = prompt("entrez le mdp")
    }
}

logIn();