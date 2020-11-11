// /* Fonction sans paramètres */

// function direBonjour() {
//     alert('Bonjour Ahmed');         // alert(); est une fct. déjà intégrée à javascript. On lui a donné un param.
// }

// direBonjour();


/* Fonctions avec paramètres */

function addition(nbUn, nbDeux) {       // Les param. sont des variables automatiquement déclarées et modifiables.
    
    console.log(nbUn + nbDeux)

}

addition(5, 9.5);                       // On doit obligatoirement donner des param. à l'appel d'une fct. qu'on a déclarée avec des param.


function direBonjour(prenom) {
    alert('Bonjour ' + prenom);
}

direBonjour('Ahmed');

