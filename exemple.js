
/* Les Tableaux */

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

// Accéder à un élément


// console.log(monTableau2D[0][1]);

// console.log(monTableauAssociatif["prenom"]);

// // Accéder au dernier élément

// console.log(monTableau2D[monTableau2D.length - 1]); // On fait .length-1 car on commence à compter à partir de 0.


// Ajouter un élément(push/unshift)

monTableau2D[1].unshift('test1');       // Ajout à la fin de la liste.
monTableau2D[1].push('test2');          // Ajout au début de la liste.
// console.log(monTableau2D);

// Ajouter dans un tableau associatif

monTableauAssociatif['nationalité'] = 'Russe';
console.log(monTableauAssociatif);