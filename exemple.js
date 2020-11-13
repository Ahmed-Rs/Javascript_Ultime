/*Boucles pour tableaux*/


let panier = ['Banane', 'Fraise', 'Poire'];

for (const fruit in panier) {
    // console.log(fruit);             // Ici la boucle forin renvoie les indexes des éléments du tableau
    // console.log(panier[fruit]);     // Cela nous renvoie donc un à un les éléments du tableau.
    panier[fruit] = 'Pomme';           // On modifie les éléments du tableau ainsi.
}

console.log(panier);





