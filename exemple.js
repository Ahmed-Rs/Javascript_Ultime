/* L'objet Map */


// let monMap = new Map([
//     ['prenom' , 'John'],
//     ['nom'    , 'Neeson']
// ]);

// monMap.set('poste', 'Acteur');      //  Ajouter une clé , valeur
// monMap.delete('nom');               // Supprimer une clé, valeur

// console.log(monMap);



let utilisateurs = new Map();


utilisateurs.set('Mark Zukerberg', {        // Ici on entre une clé, valeurs, avec plusieurs valeurs, comme un tableau associatif.
    email: 'mark@gmail',
    poste: 'PDG',
});


utilisateurs.set('Bill Gates', {           // On recommence l'opération pour entrer un nouvel utilisateur.
    email: 'bill.com',
    poste: 'PDG',
});

console.log(utilisateurs);














