//1

let personnage = {
    nom: 'dukin',
    prenom: 'aurore',
    age: 23,
    taille: 158,
    sePresenter(){
        console.log(`Bonjour je m'appelle ${this.prenom}`);
    }
}

personnage.sePresenter();

//2

let fruit = {
    nom: 'pamplemousse',
    categorie:'agrumes',
    age: 2,
    changeAge(){
        this.age = this.age + 1;
    },
}

fruit.changeAge();
alert(`${fruit.nom} a ${fruit.age} ans`);