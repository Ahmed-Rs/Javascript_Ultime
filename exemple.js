/* L'objet WeakSet */

// Le WeakSet, n'accèpte que les Objets (propriété, valeur)


// let voitures = new WeakSet();


let voitureA = {
    marque: 'Mercedes',
    modele: 'SLK Gtr'
}


let voitureB = {
    marque: 'BMW',
    modele: 'Z3'
}


// voitures.add(voitureA); // On ajoute un objet
// voitures.add(voitureB);
// voitures.delete(voitureA); // On retire un objet
// Pour ne pas avoir à écrire plusieur 'add()', on peut déclarer le weakSet après les objets qu'il contiendra, afin de les lui faire passer en arguments.


let voitures = new WeakSet([voitureA, voitureB]);


console.log(voitures);


