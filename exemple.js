/* Paramètres par défaut */




function cuisiner(nbGateaux, nbPreparation = 10, nbCuisson = 15) {          // On déclare ici 2 param. par défaut
    
    let total = nbGateaux * (nbPreparation + nbCuisson);
    return total;
    
}

let tChocolat = cuisiner(4);                          // Temps de péparation de 4 gâteaux au chocolat.
let tFraisier = cuisiner(1, 20);                      // t prép. 1 fraisier. On modifier respectivement les valeurs souhaitées.  

console.log(tFraisier + tChocolat);




