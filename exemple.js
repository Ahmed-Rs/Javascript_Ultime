/* Concaténer un tableau associatif */


let monTableauAssociatif = {
    'prenom' : 'Mark',
    'nom' : 'Zuckerberg',
    'poste' : 'PDG de Facebook'
}

// let chaine = '';

// for (const valeur in monTableauAssociatif) {

//     chaine += (valeur + ' : ' + monTableauAssociatif[valeur] + '\n');
    
// }
// console.log(chaine);


function concatener(tableau) {

    let chaine = '';

    for (const valeur in tableau) {

        chaine += (valeur + ' : ' + tableau[valeur] + '\n');
    
    }

    console.log(chaine);

    
}


concatener(monTableauAssociatif);




