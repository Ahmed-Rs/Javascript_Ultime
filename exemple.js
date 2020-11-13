/* Les fermetures/ Closures */


function bonjour(prenom) {

    let resultat = "Bonjour " + prenom; // Variable locale
    let maClosure = () => console.log(resultat); // La closure utilise la var. loc. resultat et la sauvegarde ainsi.

    return maClosure;   // Il faut que la fonction retourne la closure, afin que les var. locales soient sauvegardées et définies à l'extérieur de la fonction .
}



let maFonction = bonjour('Evan');   // Ici on stock la var. resultat, qui est locale. Ce n'est possible que grâce à la closure.
maFonction();
maFonction();


// A la fin de la fonction 'bonjour', les var. resultat et prenom sont normalement effacées, mais la closure les sauvegarde, avec leurs valeurs.



function bonjour_bis(prenom) {

    let resultat = "Bonjour " + prenom;
    console.log(resultat);
}

bonjour_bis('Nicolas'); // A la différence des closures, ici on doit tout le temps écrire la variable Nicolas pour que la fct. l'affiche.
                        // Or qu'avec les closures, la variables est sauvegardée et l'appel simple de la fct. suffit à l'afficher.
bonjour_bis('Nicolas');



function timer() {
    let secondes = 0;
    let maFctClosure = () => {
        return ++secondes;
    } 

    return maFctClosure;

}

let monTimer = timer();
console.log(monTimer());
console.log(monTimer());
console.log(monTimer());
console.log(monTimer());        // On lit bien sur la console que la valeur de secondes est incrémentée, ce qui montre que la closure a sauvegardé la valeur de la var. locale de la fct.

let monDeuxiemeTimer = timer(); // En créant une deuxieme var, On réinitialise la fct. 
console.log(monDeuxiemeTimer());
console.log(monDeuxiemeTimer());


console.log(monTimer());   // La première variable reste toujours sauvegardée pour lorsque la fct. monTimer(); sera appelée.












