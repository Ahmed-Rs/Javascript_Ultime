/* Fonctions qui retournent qqch */


let nb1 = 4, nb2 = 7;


function addition(nbA, nbB) {
    
    let total = nbA + nbB;
    // console.log(total);      // Affiche un resultat.
    return total;               // La fct. RETOURNE une valeur.
    console.log('test');        // NB: Tout le code écrit après return; ne sera pas exécuté.

}

function division(nbA, nbB) {
    
    let total = nbA / nbB;
    return total;  
                 
}


let resultatAddition = addition(nb1, nb2);
let resultatDivision = division(nb1, nb2);

console.log(resultatAddition * resultatDivision);




