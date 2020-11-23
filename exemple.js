/* Utilier les API */

/* Utiliser une API: envoyer des données */

const url = "https://lesoublisdelinfo.com/api.php"

let requete = new XMLHttpRequest();

// GET
// requete.open('GET', url);
// requete.responseType = "json";
// requete.send();


// POST
requete.open("POST", url);
requete.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
requete.responseType = 'json';
requete.send('prenom=John');

requete.onload = function() {
    if(requete.readyState === XMLHttpRequest.DONE) {    // Si la requête est terminée: si l'API ne nous envoie plus d'informations
        if (requete.status === 200) {
            let reponse = requete.response;
            console.log(reponse);
        }
        else {
            alert("Un problème est survenu, merci de revenir plutard.");
        }
    }
}














































