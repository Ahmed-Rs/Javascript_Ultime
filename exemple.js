
/* Les Tableaux */

let monTableau = ['Banane', 'Pomme', 'Framboise', 'Abricot'];


// Tableau 2D

let monTableau2D = [        
    ['Khabib', 'Georges', 'Islam'],
    ['Nurma', 'SP', 'Makha']
];


//Tableau associatif

let monTableauAssociatif = {
    'prenom': 'Khabib',         // On associe un nom à chaque élément.
    'nom': 'Nurma',
    'poste': 'fighter'
};

// Splice();

// Avec Tableau 1D

monTableau.splice(0, 2, 'Mangue', 'Papaye');  // Le premier indice désigne l'emplacement dans l'array, le second, désigne le nbr d'éléments à supprimer à compter de cet emplacement(inclus), le troisième désigne les éléments à incorporer.
console.log(monTableau);                      // Si on met splice(0, 0, 'Mangue', 'Papaye'); aucun élément ne sera supprimer car dans l'indice n°2, on a mis un 0, il commence à supprimer à partir de 1.

// Avec Tableau 2D


//monTableau2D.splice(0, 1);          // Ici il supprime le premier sous-array, car on a mis 0, 1.
//monTableau2D[1].splice(1,1);         // Ici il supprime le deuxième élément du sous deuxième sous-array.


monTableau2D.splice(2, 0, ['40', '50', '60']);  // Ici on ajoute un array.

console.log(monTableau2D);










