let meteo = prompt("quel temps fait-il ?");

switch (meteo) {
    case "beau" :
        alert("quand il fait beau on prend ses lunettes de soleil");
        break;
    case "moche" :
        alert('quand il fait moche on prend son parapluie et sa veste')
        break;
    default:
        alert("cette météo n'est pas reconnue par le système")
        break;
}