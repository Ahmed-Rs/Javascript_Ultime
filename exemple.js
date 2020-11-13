
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


// console.log(monTableau.join(" / "));

// Le join(); Nous renvoie toute la liste sélectionnée sous forme de chaîne de caractères.
// Il met des séparateurs personnalisés à cette dernière.
console.log(monTableau2D.join(" / "));


console.log(monTableau2D[1].join(" / "));



