let nbr1 = +prompt("Ecrivez un nombre"); //le plus signifie au système que ce que nous récoltons est un nombre (voir exercice unary-op)
let operateur = prompt("operateur(+-/*)");
let nbr2 = +prompt("Ecrivez un nombre");

switch (operateur) {
    case "+":
        alert(nbr1 + nbr2);
        break;
    case "-":
        alert(nbr1 - nbr2);
        break;
    case "*":
        alert(nbr1 * nbr2);
        break;
    case "/":
        alert(nbr1 / nbr2);
        break;
    default:
        alert("houston we have a problem");
        break;
}