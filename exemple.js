/* Programmation Orientée Objet */

// Constructeurs


// let mark = {
//     prenom: "Mark",
//     nom: "Zuckerberg",
//     email: "mark.com",
    
//     sePresenter : function(){
//         console.log("Bonjour, je m'appelle" + mark.prenom);
//     }

// }

// console.log(mark);

function Utilisateur(prenom, nom, email) {      // On initilialise une fct. constructor qui prend en paramètres des identifiants
    this.prenom = prenom;
    this.nom    = nom;
    this.email  = email;
}

// On retire la méthode 'sePresenter' de notre constructeur pour la mettre dans le prototype de ce dernier.

Utilisateur.prototype.sePresenter = function() {                 // On ajoute une fct. anonyme dans une nouvelle propriété.
    console.log("Bonjour je m'appelle " + this.prenom + " " + this.nom + " et vous pouvez me joindre à l'adresse: "+ this.email + ".");
}


// On crée un Objet
var mark = new Utilisateur("Mark", "Zuckerberg", "mark.com");
var bill = new Utilisateur("Bill", "Gates", "bill.com");

console.log(mark);  // On voit que JavaScript ajoute une propriété __proto__ et constructor

mark.sePresenter();  // On rajoute la fct. sePresenter dans le prototype du constructeur Utilisateur, ainsi ils pourront aussi en hériter.
                     // Bill aussi peut se présenter


/*Créer un objet avec Object(); */

var monObjet = new Object();
monObjet.titre = "Le titre de l'objet";

// console.log(monObjet);

// Lorsque le navigateur va lire la fct. sePresenter(); il la cherchera d'abord dans le constructeur, ensuite dans la propriété __proto__ de l'Objet que nous avons créé(mark), puis dans la __proto__ (prototype) du constructeur Objet() (JS) qui a créé notre constructeur,
// jusqu'à tomber sur la propriété constructor de notre Object() JS; S'il ne trouve pas la fct. sePresenter, il va afficher un message d'erreur. Celà s'appelle remonter ma chaîne des prototypes.



















