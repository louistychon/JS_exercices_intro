//1

function add(x, y) {
    console.log(x + y);
}

//2

function soustraire(x, y) {
    console.log(x - y);
}

//3

function mult(x, y) {
    console.log(x * y);
}

//4

function div(x, y) {
    console.log(x / y);
}

//5

function mod(x, y) {
    console.log(x % y);
}

//6

function square(x) {
    console.log(x * x);
}

//7

function exposant(x, y) {
    x = Math.pow(x, y);
    console.log(x);
}

//8

function capitalize(str) {
    str = str.charAt(0).toUpperCase() + str.slice(1);
    console.log(str);
}

//9

function calcul(nbr1, operator, nbr2) {
    let resultat;
    switch (operator) {
        case "+":
            resultat = nbr1 + nbr2;
            break;
        case "-":
            resultat = nbr1 - nbr2;
            break;
        case "*":
            resultat = nbr1 * nbr2;
            break;
        case "/":
            resultat = nbr1 / nbr2;
            break;
        default:
            break;
    }
    return resultat;
}

console.log(calcul(1, operateur, 24));