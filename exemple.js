/*REST parameter */

// L'ajout des 3 points avant la variable de la fonction permet de lui indiquer qu'elle pourra prendre, sans limite, toutes les variables qu'on lui assignera lors de son appel.


function addition(...nombre){

    let resultat = 0;
    
    nombre.forEach( nombre => {
        resultat += nombre;

    });

    console.log(resultat);

}


addition(25, 67, 32, 5);














































