let tableau = ["coding 11", "coding 12", "coding 13"];
//Afficher les éléments de l'array
//méthode 1
console.table(tableau);
//méthode 2
tableau.map(e => console.log(e));
//méthode 3
console.log(tableau);

//Ajouter et afficher votre prenom a l'array
tableau.push("Louis");
console.table(tableau);

//Remplacer et afficher un élément de l'array par autre chose
tableau [2] = "coucou";
console.table(tableau);


//Effacer un élément de l'array
tableau.shift();
console.table(tableau);


//bonus

tableau.splice(1,2); //splice découpe le tableau à partir de l'index indiqué (ici 1) et supprime un certain nombre d'élements, ici 2
console.table(tableau);