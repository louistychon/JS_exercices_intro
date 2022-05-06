let codingSchoolX = [];

function ajout(personne) {
    codingSchoolX.push(personne);
    console.log(codingSchoolX);
}

ajout("louis");
ajout("ls");

function retire(personne) {
    for (let i = 0; i < codingSchoolX.length; i++) {
        if(personne == codingSchoolX[i]){
            codingSchoolX.splice(i,1);
        }
    }
    console.log(codingSchoolX);
}

retire("ls");

