// //demo

// class Personnage {
//     constructor(nom, sante, force){
//         this.nom = nom;
//         this.sante = sante;
//         this.force = force;
//         this.bonjour = () =>{
//             return (`Bonjour je suis ${this.nom} et j'ai ${sante} points de vie et ${force} points de force`)
//         }
//     }
// };

// let jean = new Personnage('Jean', 100, 20);
// console.log(jean.bonjour());
// let marc = new Personnage('Marc',80,30);
// console.log(marc.bonjour());

/**** */

class personnage {
    constructor(age, nom, ville){
        this.age = age;
        this.nom = nom;
        this.ville = ville;
        this.sePresenter = () => {
            return `Bonjour je m'appelle ${this.nom}!`
        }
    }
}
let personnage1 = new personnage(24, 'Nicolas', 'Paris')
let personnage2 = new personnage(45, 'Josiane', 'Bruxelles')

console.log(personnage1.sePresenter())
console.log(personnage2.sePresenter())

//2

