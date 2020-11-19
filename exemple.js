/* Programmation Orientée Objet */

// Comprendre l'héritage


function Animal(nombreDePattes, poids) {
    this.nombreDePattes = nombreDePattes;
    this.poids         = poids;
}
Animal.prototype.presentation = function () {
    console.log("Cet animal possède "+ this.nombreDePattes + "pattes" + " et fait "+ this.poids + " Kg");
}


function Oiseau(nombreDePattes, poids, longueurDesAiles) {      // La fct. call() permet d'appeler une fct. constructeur: en 1er param. (this) on donne l'objet actuel, ensuite on donne les arg. de son constructeur(Animal)
    Animal.call(this, nombreDePattes, poids);                   // On insère dans la fct. Oiseau les mêmes param. que la fct. appelée, en plus de ses param. d'origine.
    this.longueurDesAiles = longueurDesAiles;
}


function Mammifere(nombreDePattes, poids, typeDePoils) {
    Animal.call(this, nombreDePattes,poids);
    this.typeDePoils = typeDePoils;
}


Oiseau.prototype = Object.create(Animal.prototype); // On fait en sorte que le prototype de la fct. Oiseau() soit le même que celui de la fct. Animal(), afin que Oiseau hérite du prototype de Animal(), et donc de la fct. presentation().
                                                    // Nous avons en quelques sortes inséré la fct. Animal() afin de faire profiter Oiseau() de son prototype et donc de sa méthode presentation();
// Le fait de changer de prototype fait que l'on ne voit plus le constructor Oiseau() qui est à l'origine de l'objet Oiseau. En effet en redéfinition de notre prototype supprime aussi son contenu antérieur, que l'on doit alors réécrire partiellement au besoin.
// Il faut le remettre avec le code suivant:

Oiseau.prototype.constructor = Oiseau;

var perroquet = new Oiseau(2, "1 Kg", "Grandes");
var vache     = new Mammifere(2, "400 Kg", "Cours");


console.log(perroquet);
perroquet.presentation(); // Le navigateur va aller chercher la fct. presentation() dans le prototype de la fct. Oiseau() (puisqu'il en a hérité maintenant).


// console.log(vache);














































