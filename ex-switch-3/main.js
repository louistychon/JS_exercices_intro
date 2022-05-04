let userinput = prompt("Ecrivez un nombre");

switch (true) {
    case userinput%2 == 0:
        alert("le nombre est un multiple de 2");
        break;
    case userinput%2 > 0:
        alert("Le nombre n'est pas un multiple de 2");
        break;
    default:
        alert("Ceci n'est pas un nombre");
        break;
}