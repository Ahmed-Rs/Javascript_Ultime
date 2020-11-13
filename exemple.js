
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

// Retirer des éléments (pop/shift)

monTableau.shift();       // Retire le premier élm.
monTableau.pop();         // Retire le dernier élm.
//console.log(monTableau);


// Retirer d'un tableau 2D

monTableau2D[0].shift();  // Retire le premier élm. du premier tableau
//console.log(monTableau2D);


// Retirer d'un tableau associatif

delete(monTableauAssociatif.poste);
//console.log(monTableauAssociatif);












