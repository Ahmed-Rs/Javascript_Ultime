/* Programmation Orientée Objet */

// Bind, Call, Apply

// Call et Apply permettent d'invoquer immédiatement une fonction


let gandalf = { titre: "Magicien"}      // Objet littéral

// La fct direBonjour() va utiliser this.titre grâce à l'appel de l'objet gandalf.

function direBonjour(arme, degats) {
    console.log("Bonjour " + this.titre + ", vous possédez " + arme + " qui donne " + degats + " points de dégats.");
}

// Avec call, on appelle l'objet gandalf et les autres arguments un à un.
direBonjour.call(gandalf, "un bâton", 75);

// Avec apply, on appelle aussi l'objet gandalf, mais les autres arguments seront appelés comme un tableau.
direBonjour.apply(gandalf, ["un bâton", 75]);


//Bind
// Objectif

this.valeur = "Window"; // Pour tous les navigateurs, this. écrit en dehors d'une fonction ou d'un objet vaut automatiquement "window" */


let monObjet = {
    valeur: "Objet",
    getValeur: function () {
        console.log(this.valeur);
    }
}

monObjet.getValeur();   // Ici, le navigateur nous affiche automatiquement la valeur de this.valeur dans le contexte de l'Objet littéral monObjet();


let maValeur = monObjet.getValeur; // On stock la fct. getValeur() dans une variable
maValeur(); // En exécutant cette variable,le nav. nous renvoie "window", car on est dans un contexte hors de la fct. monObjet(). Le this.valeur est celui du contexte global.

let maValeurAvecBind = monObjet.getValeur.bind(monObjet);   // Avec bind(), le contexte de 'monObjet.getValeur' est le contexte de l'objet monObjet();
maValeurAvecBind();                                         // Avec bind, on précise le contexte.

























