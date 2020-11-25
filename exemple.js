/* Utilisons les requêtes asynchrones, Callbacks et Promises */

// Les promesses
// En cours / Honorée / Rompue
// Exemple Discord(), discuter en ligne par micro (video)

// const promesse = new Promise((resolve, reject) => {
//     // Tâches asynchrones

//     // Promesse honorée : resolve()

//     // Promesse rompue : reject()



// });

// On charge le script dans notre code html

// On déclare une fonction qu'on intègre directement dans une promesse grâce au mots clés new Promise
function chargerScript(script) {
    return new Promise((resolve, reject) => {

        // Créer un élément
        let element = document.createElement('script');
        // On ajoute le src
        element.src = script;
        // On attache l'élément à notre page html, dans le <head>
         document.head.append(element);

        // Deux possibilités:
        // resolve()    // Si la page se charge et que element est bien <head>, la fct. resolve() est appellée.
        element.onload = () => resolve('Fichier ' + script + ' a été chargé.');

        // reject()
        element.onerror = () => reject(new Error('Opération impossible pour le script ' + script));

    });
}

// // On déclare une constante qui contiendra notre fct. et la promesse
// const promesse = chargerScript('test.js');

// En passant le curseur au dessus de la const. promesse, il s'affiche qu'elle contient un objet de Promise, soit resolve ou reject. Affichons le:

// // Ici le then() signifie, une fois que la fct. est terminée
// promesse.then(
//     function (result) { // Ici le code renvoie le resolve()
//         console.log(result);
//     },
//     function (error) {  // Ici le code renvoie le reject()
//         console.log(error);
//     }
// );



// Ici on fait plus simple, on utilise le catch pour que le code renvoie l'erreur en cas de problème dans l'exécution du code.
chargerScript('test.js')    // Ici on appelle notre fct. et une fois que c'est terminé, s'il ya une erreur,
.catch(console.log);        // On fait un try catch, grâce à la promesse qu'il y'a à l'intérieur de la fct. chargerScript()




























