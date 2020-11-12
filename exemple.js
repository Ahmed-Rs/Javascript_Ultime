// /* Conditions if else */

// let age = prompt("Quel âge avez-vous?");

// if (age < 18) {
//     alert("Vous n'etes pas majeur")
// }

// else if (age < 21) {
//     alert("Vous etes majeur en france")
// }

// else {
//     alert("Vous etes majeur partout dans le monde")
// }


/* Switch */

// let article = "chocolat";

// switch (article) {                      

//     case "T-shirt":
//     case "Pantalon":
//     case "Veste":
//         console.log("Ceci est un vêtement.");
//         break;
    
//     case "Chaussure":
//     case "Sac":
//         console.log("Ceci est de la maroquinerie.");
//         break;
    
//     default:
//         console.log("Ceci n'est ni un vêtement ni de la maroquinerie.")

// }


/* Plusieurs Conditions et valeurs par défaut des var.*/

let gareDepart = "Campiègne";
let gareArrivée = prompt("Où souhaitez-vous aller?") || "Gare du Nord"; // Valeur par défaut, si l'utilisateur de choisit aucune gare.
let chauffeur = "Alfred";

if ((gareDepart != "" || gareArrivée != "") && chauffeur != "") {
    alert("Le train va démarrer à destination de " + gareArrivée + ".");

}
else {
    alert("Le train ne peut pas démarrer.");
}

// /* Conditions ternaires */


// let x = 5;

// [x > 3] ? [console.log("x est supérieur à 3")] : [console.log("x est inférieur à 3")];




