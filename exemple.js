/* Utilisons les requêtes asynchrones, Callbacks et Promises */

// Async et Await



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

// On utilise la fct ci-dessus en mode async / await

async function resultat() {
    try {
        const scriptA = await chargerScript('test.js');
        console.log(scriptA);
        const scriptB = await chargerScript('autre.js');
        console.log(scriptB);
    } catch (error) {
        console.log(error);
        document.head.lastChild.remove();   // En cas d'erreur, on demande à enlever le dernier élément de <head> qui sera l'élément associé à l'erreur, ici, autre.js; car sinon il est ajouté automatiquement.
    }
}

resultat();


// async function direBonjour() {      // Mettre async avant une fct. lui fait return automatiquement une promesse, comme dans le chapitre pécédent.

//     const promesse = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Promesse tenue !'), 3000);            // Si la fct. se passe bien, la fct. resolve sera appelée au bout de 3s.
//     });

//     let resultat = await promesse;  // Le await nous permet de renvoyer le résultat du déroulement de la fct. directement dans la fct. et non en dehors comme précédemment.

//     console.log(resultat);          // On affiche le resultat du déroulement de la fct.

//   }

//   direBonjour();























