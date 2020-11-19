/* Programmation Orientée Objet */

// Les class avec JavaScript

class Utilisateur {                         // On déclare une class dans laquelle on intègre un constructor et une méthode. On n'a pas besoin de passer la méthode en prototype comme avec les Objets de constructor.
    constructor(prenom, nom, email) {       // 
        this.prenom = prenom;
        this.nom    = nom;
        this.email  = email;
    }

    sePresenter() {
        console.log("Bonjour, je m'appelle " + this.prenom + ' ' + this.nom + " et vous pouvez me contacter à l'adresse: " + this.email);
    }
}

var mark = new Utilisateur("Mark", "Zuckerberg", "marc@facebook.com");
mark.sePresenter();

// Animal

class Animal {
    constructor(nombreDePattes, poids) {
        this.nombreDePattes = nombreDePattes;
        this.poids          = poids;
    }

    description () {
        console.log("Bonjour, cet animal possède " + this.nombreDePattes + " pattes et pèse " + this.poids + " Kg.");
    }
}


// var panthere = new Animal(4, "100");
// panthere.description();

/* L'héritage avec les class */

class Oiseau extends Animal {                   // Avec extends on fait hériter la class Oiseau de la class Animal 
    constructor(nombreDePattes, poids, longueurDesAiles) {   // On rajoute les arg. du constructeur de Animal au constructeur de Oiseau.
        super(nombreDePattes, poids);                        // La fct. super sert à appeler automatiquement la class Animal, de la même façon que le Call
        this.longueurDesAiles = longueurDesAiles;
    }

    voler() {
        console.log("L'oiseau vole avec des ailes d'une envergure de " + this.longueurDesAiles + ".");
    }
}

var perroquet = new Oiseau(2, "1", "40 cm");

console.log(perroquet);
perroquet.description();        // Grâce à l'héritage, on peut appeler la fct.description de la class Animal.
perroquet.voler();








