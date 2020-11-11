/* Conversion de données */

function prévoirAge() {

    let age = prompt("Quel age avez vous?");            // Javascript stock les informations recueillies chez les utilisateurs sous forme de string.
    // age = parseInt(age);                                // La var. age a été transformée en entier le plus proche, de sorte à ce que l'addition se déroule bien dans le alert(); 
    // age = parseFloat(age);                              // Cette méthode permet de conserver le nombre tel quel, même avec virgule.
    age = Number(age);                                     // La solution number(); est la plus sûre.
    alert("Bientôt vous aurez " + (age + 1) + " ans.");
}

prévoirAge();



/* Convertir un nombre en string

nb = 45;
let nbEnString = nb + "";               // Cette 1ère méthode permet de convertir le nombre en chaîne de caractères.
let nbEnString = nb.toString();         // La 2e méthode consiste à utiliser la fct. toString().

*/