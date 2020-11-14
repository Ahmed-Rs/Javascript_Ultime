/* L'affectation par décomposition / Destructuring */


let informations = ['SuperSayen', '25', 'homme'];

// Sans décomposition
// let pseudo = informations[0];
// let age    = informations[1];   // En mettant les informations dans des variables, si on modifie celles-ci, celà ne modifiera pas les éléments du tab.
// let sexe   = informations[2];   // Contrairement à si on modifiait directement information[x].


// Avec décomposition

let [pseudo, age, sexe] = informations; // On met toutes ces variables dans une seule variable 'tableau' liée respectivement au tableau 'informations'
                                        // La console ira chercher la valeur en question dans le tableau.
console.log(pseudo);
console.log(age);
console.log(sexe);














