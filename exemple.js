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

    this.sePresenter = () => {                 // On ajoute une fct. anonyme dans une nouvelle propriété.
        console.log("Bonjour je m'appelle " + this.prenom + " " + this.nom + " et vous pouvez me joindre à l'adresse: "+ this.email + ".");
    }
}


var mark = new Utilisateur("Mark", "Zuckerberg", "mark.com");
var bill = new Utilisateur("Bill", "Gates", "bill.com");
// mark.sePresenter();        // Ne pas oublier d'initialiser la fct. à l'intérieur de l'objet.

mark.poste = "PDG de Facebook";  // On peut rajouter des éléments personnalisés à notre Objet mark.

// console.log(mark);

// console.log(bill);

// Utilisons un Objet comme paramètre dans un autre Objet

function Logement(type, annee, placeDeParking, propriétaire) {
    this.type           = type;
    this.annee          = annee;
    this.placeDeParking = placeDeParking;
    this.propriétaire   = propriétaire;
}

var appartementZ = new Logement("appartement", "2020", true, mark); // mark est un Objet

console.log(appartementZ.propriétaire.nom);     // On appelle la propriété nom, dans l'Objet Utilisateur(mark) contenu dans l'Objet Logement(appartementZ)

console.log(appartementZ);
























