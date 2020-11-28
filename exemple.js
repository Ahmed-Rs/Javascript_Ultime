/* Utiliser le mode strict */

// Le mode strict : début


// Le mode strict détecte les erreurs silencieuses, par ex. ne pas utiliser let ou vas

prenom = "John";
console.log(prenom);
"use strict";


direBonjour();
addition(7, 1);



function direBonjour() { 
    // "use strict";
    nom = "Max";
    console.log(nom);
}


function addition(nombreA, nombreB) {   // Détection de la ducplication du param.
    // "use strict";
    console.log(nombreA + nombreB);
}








































