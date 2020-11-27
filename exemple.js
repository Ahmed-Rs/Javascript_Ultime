/* Faire une requête AJAX avec jQuery et JavaScript */


// Avec JavaScript

// let requete = new XMLHttpRequest(); // Nous créons un objet qui nous permettra de faire des requêtes
// requete.open('GET', url); // Nous récupérons juste des données
// requete.responseType = 'json'; // Nous attendons du JSON
// requete.send(); // Nous envoyons notre requête

// // Dès qu'on reçoit une réponse, cette fonction est executée
// requete.onload = function() {
//    if (requete.readyState === XMLHttpRequest.DONE) {
//       if (requete.status === 200) {
//         let reponse = requete.response;
//         // console.log(reponse);
//         let temperature = reponse.main.temp;
//         let ville       = reponse.name;
//         // console.log(temperature);
//         document.querySelector('#temperature_label').textContent = temperature;
//         document.querySelector('#ville').textContent = ville;
//       }
//       else {
//         alert('Un problème est intervenu, merci de revenir plus tard.');
//       }
//     }
// }


// Avec jQuery


//GET
const url = 'https://blockchain.info/ticker';

$.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    success: (data) => {             // Récupère la response de notre API, stocker tout le json que notre API va nous envoyer
        // console.log(data);
        $('h1').text(data.EUR.last + "€");
    },
    error: () => {
        alert('Merci de revenir plus tard');
    }
});



//POST

const url_bis = 'https://lesoublisdelinfo.com/api.php';

$.ajax({
    url: url_bis,
    type: "POST",
    data: "prenom=John",             // On utilise data lorsqu'on envoie (POST)
    dataType: "json",
    success: (data) => {
        $('#monId').text(data.resultat);
    },
    error: () => {
        alert('Merci de revenir plus tard.');
    }
});















































