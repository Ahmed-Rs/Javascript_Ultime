/* LocalStorage et SessionStorage */

// LocalStorage = Stocké dans le navigateur même après qu'il soit fermé
// SessionStorage = Stocké dans le navigateur pendant la session


// Les informations crées avec LocalStorage et SessionStorage ne seront jamais envoyées au serveur, contrairement à celles des cookies 

// setItem([clé], [valeur]) / getItem[clé] / removeItem[clé]
// clear() : supprimer tout
// key([index]) : obtenir la clé située à l'index donné
// length : obtenir le nombre d'éléments stockés


if(localStorage.getItem('prenom')) {    // Si l'élément existe déjà
    document.body.append('Bonjour ' + localStorage.getItem('prenom')); // L'item existe déja donc on y fait simplement appel par localStorage.getItem[clé] et on l'attache a notre page html via body.append()
}
else {                              // Sinon
    let prenom = prompt('Quel est votre prénom?');
    localStorage.setItem('prenom', prenom);        // Si on avait fait sessionStorage, on perdrait la donnée à la fermeture de la fenêtre
    document.body.append('Bonjour ' + prenom);
}

localStorage.clear();   // On supprime la donnée enregistrée, et le navigateur nous redemande le prénom à chaque actualisation

































































