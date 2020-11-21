/* Devenez maîtres du temps */

// Récupérer la date actuelle

// 1er janvier 1970 à minuit UTC (Londres)

let dateActuelle = Date();
console.log(dateActuelle);  // norme ango-saxonne

let dateEnSecondes = Date.now();
console.log(dateEnSecondes);


// Utiliser l'Objet Date

let datePrecise = new Date(2020, 11, 3, 2);
console.log(datePrecise);



// Au-dessus :
//   - annee (obligatoire)
//   - mois (obligatoire) qui commence par 0

//   - jour (facultatif) qui commence par 1
//   - heure (facultatif) qui commence par 0
//   - minute (facultatif) qui commence par 0
//   - secondes (facultatif) qui commence par 0
//   - millisecondes (facultatif) qui commence par 0


/* Getter et Setter disponibles pour l'objet Date */

let dateEnCours = new Date();

console.log(dateEnCours.getFullYear()); // Récupère l'année en cours
console.log(dateEnCours.getDay());      // Récupère le numéro de jour de la semaine en cours, en commencant à compter à partir de dimanche à l'indexe 0.
console.log(dateEnCours.getDate());     // Récupère le numéro de jour dans le mois en commençant par 1.

console.log(dateEnCours.getUTCDate);    // Récupère le jour UTC du même moment.




dateEnCours.setFullYear(2030);          // Les Setter vont nous permettre de modifier les éléments souhaités dans la date en les écrivant simplement de cette manière.
console.log(dateEnCours.getFullYear);


















































