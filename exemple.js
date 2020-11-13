/* Récursivité */


// function timer(secondes) {

//     if (secondes > 0) {                     // Une fct. qui s'appelle elle-même.

//         console.log(secondes);
//         timer(secondes - 1);
        
//     } else {
//         console.log(secondes);
//     }
    
// }

// timer(10);


function somme(nombre) {

    if (nombre == 1) {              // Valeur 1 d'arrivée
        return 1;
    }

    return nombre + somme(nombre - 1); // La fonction s'execute en boucle: Elle dépose un 'nombre' et ensuite va se réexécuter jusqu'à ce que nombre == 1.
}
 
console.log(somme(5));




