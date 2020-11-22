/* Utilier les API */

/* Récupérer le prix du Bitcoin (XMLHttp Request) */


const url = 'https://blockchain.info/ticker';


// Créer une requête
function req() {
    let requete = new XMLHttpRequest();  // Créer un objet
    requete.open('GET', url);            // Premier param. GET / POST, deuxième param. : url
    requete.responseType = 'json';       // Nous attendons du JSON
    requete.send();                      // Nous envoyons notre requête


    // Dès qu'on reçoit une réponse, cette fonction est executée 
    requete.onload = function() {
        if (requete.readyState === XMLHttpRequest.DONE) {  // Si l'état de notre requête à ce à quoi on attendait, c-à-d, si notre requête est terminée 
            if (requete.status === 200) {                  // On vérifie si la requête s'est bien passée, en vérifiant que le ocde d'erreur est 200
                let reponse = requete.response;            // On stock la réponse
                let prixEnEuros = reponse.USD.last;        // Créer une variable pour sélectionner ce que l'on souhaite comme information précise dans notre API
                document.querySelector("#price_label").textContent = prixEnEuros;
            }
            else {
                alert("Un problème est survenu, merci de revenir plutard.");
            }
        }
    }
    console.log("Prix actualisé");

}

req();

var inter = setInterval("req()", 1000);     // Le prix du Bitcoin s'affiche toute les secondes

clearInterval(inter);       // On stop l'intervalle.











