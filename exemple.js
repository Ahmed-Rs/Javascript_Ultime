/* Les Boucles */


// // While

// let i = 1;

// while (i < 7) {
//     console.log("ligne: " + i );
//     i++;
// }


// // Do While

// do {
    
//     var prenom = prompt("Quel est votre prénom?"); // En utilisant vr au lieu de let, on déclare ici une variable globale malgré qu'on ait fait cela à l'intérieur de la boucle.

// } while (prenom == "" || prenom == null);

// alert("Bonjour " + prenom);



// // Boucles For

// for (let i = 1; i < 8; i++) {
   
//     console.log("Ligne: " + i);
// }


// Break et continue

// let i = 0;

// while (i < 7) {

//     if (i == 4) {
//         break;                          // Le break sert à arrêter la boucle au niveau 4.
//     }

//     console.log("Ligne: " + i);
//     i++;
    
// }


let j = 0;

while (j < 7) {

    if (j == 4) {
        j++;                            // Le j++ sert à faire passer la valeur du j à 5, et la boucle ne reste plus bloquée dans le 2e if. En revanche, la valeur j == 4 ne saffichera pas dans la console car elle a été sautée.
        continue;                       // Si on met le "continue" sans l'incrémentation, le 2e if s'exécute à l'infini en lisant le "continue", car il reste bloqué la valeur autorisée '4'.
    }

    console.log("Ligne: " + j);

    j++;

}



