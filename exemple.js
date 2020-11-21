/* Devenez maîtres du temps */

// Mettre une date au format local


let dateActuelle = new Date();

// toLocaleDateString = jour, mois, année
// toLocaleTimeString = l'heure
// toLocaleString     = jour, mois, année, heure
// ON CHOISIT LES OPTINONS QU'ON VEUT

let dateLocale = dateActuelle.toLocaleString('fr-FR', {
    weekday: 'long', // short(3 premières lettres), narrow(première lettre), long(ttles lettres) (nom du jour)
    year: 'numeric', // numeric(xxxx), 2-digit(xx)
    month: 'long',   // short, narrow, long, numeric
    day: 'numeric',  // numeric, 2-digit
    // hour: 'numeric', // ...
    // minute: 'numeric',
    // second: 'numeric'
});

console.log(dateLocale);
console.log(navigator.language);    // Cela nous renvoie la langue locale de l'utilisateur
// En mettant navigator.language à la place de fr-FR, on aurait eu le même résultat.













































