/* WeakMap */


// Le WeakMap prend en clé un objet, et en valeur n'importe quel type de donnée

let voitures = new WeakMap();

let index = {
    id : 1
}

let voitureA = {
    constructeur: 'Tesla',
    modèle: 'F5'
}


voitures.set(index, voitureA);
// voitures.delete(index);     // Retirer un élément.

console.log(voitures);






































