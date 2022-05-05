let userinput = prompt("Ecrivez un nombre");
let reste = userinput % 2
switch (reste) {
    case 0:
        alert("le nombre EST un multiple de 2");
        break;
    case 1:
        alert("Le nombre n'est PAS un multiple de 2");
        break;
    default:
        alert("Ceci n'est pas un nombre");
        break;
}