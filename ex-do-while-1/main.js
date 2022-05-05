let classe = [];


while(classe.length < 5){
    let newStudent = prompt("entrez le nom d'un élève");
    classe.push(newStudent);
}

console.table(classe);