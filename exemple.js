/* L'objet Set */

// Les set ne renvoient pas de valeurs doubles, et on peut y stocker tous types de données; entiers, strings, arrays...


let nombres = [10, 39, 69, 39, 19, 10];

// let monSet = new Set(nombres);
let monSet = new Set(nombres);



monSet.add(47);
monSet.delete(69);

console.log(monSet);
console.log('La taille de mon Set : ' + monSet.size);



























