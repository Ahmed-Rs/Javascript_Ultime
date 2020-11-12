
try {

    let ustencile = prompt("Choisissez votre instrument: couteau, cuillère, fourchette.");
    let utilité;
    switch (ustencile){
        case "couteau":
            utilité = 40;                       // Le try s'exécute, et en cas d'erreur, c'est le catch qui s'exécute.
            break;                              // On crée et définit une situation d'erreur qui fera s'exécuter le catch.
        case "cuillère":                        // Ici on a utilisé le switch et définit des valeur pour lesquelles il ya erreur.
            utilité = 50;                       // On utilise le 'throw new Error' pour renvoyer directement vers le catch.
            break;                              // Dans le catch, le alert fera en sorte de mettre le contenu de l'Error dans une boîte de dialogue.
        case "fourchette":                      // On aurait pu aussi le mettre dans la console grâce à: console.log(erreur)
            utilité = 30;
            break;

        default: 
            throw new Error("Vous ne pouvez pas choisir cet instrument.");
    }

    alert("Vous avez choisi l'ustencile " + ustencile + " (utilité: " + utilité + ").");

} 

catch (erreur) {

    alert(erreur.stack);
    
}

finally {
    alert("Fin du programme.");         // Le finally, sert à faire s'exécuter un code à coups sûr.
}












