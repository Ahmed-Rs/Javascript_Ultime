/*L'opérateur de décomposition / spread operator */

// Exemple 1: fusionner plusieurs tableaux
let fruits = ['fraise', 'banane', 'poire'];
let aliments = ['chocolat', 'sucre', 'lait', ...fruits];

console.log(aliments);


// Exemple 2: découper une chaîne de caractères en plusieurs éléments

let phrase = 'Bonjour !';
let phraseTableau = [...phrase];

console.log(phraseTableau);


// Exemple 3: sélectionner un élément, et stocker les autres dans une varaible

let devises = ['dollar', 'euro', 'yen'];

let [premiereDevise, ...autres] = devises;

console.log(devises);
console.log(premiereDevise);
console.log(autres);























