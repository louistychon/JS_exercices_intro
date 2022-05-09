let vieille_dame = {
    age: 94,
    prenom: "jocelyne",
    nom: "trudeau",
    moral: "mal",
    objet: "canne",
    parler(){
        if(this.moral === "mal"){
            console.log("Vous me dérangez! **et le frappe avec sa " + this.objet)
        }
        else if(this.moral === "bien"){
            console.log("bonjour " + vieil_homme.nom)
        }
    }
}

let vieil_homme = {
    nom: "hervé",
    adoucir(){
        vieille_dame.moral = "bien";
    },
}

vieille_dame.parler();
vieil_homme.adoucir();
vieille_dame.parler();

