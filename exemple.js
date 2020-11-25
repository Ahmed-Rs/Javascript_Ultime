/* Les cookies */

// Créer un cookie
document.cookie = 'prenom=John';

// Afficher tous les cookies
// alert(document.cookie);

// Modifier un cookie
document.cookie = 'prenom=Mark';

// Supprimer un cookie
document.cookie = 'prenom=';

// Options


document.cookie = 'prenom=John; path=/admin'; // On précise l'emplacement où notre cookie est accessible. Si on ne précise rien, cela veut dire qu'il est disponible sur l'ensemble de notre site. Ici, il sera disponible sur tous les url qui commencent par /admin, ex: /admin/connexion
document.cookie = 'prenom=John; path=/admin; domain=believemy.com'; // On précise que ce cookie sera disponible uniquement sur ce site internet

// Avec expires, on rajoute la date UTC et le nombre de millisecondes qui correspondent à sa durée de vie (ici un an).
let date = new Date(Date.now() + 31536000000);
// On est tout de même obligés de convertir la date d'expiration en date UTC
date = date.toUTCString();
document.cookie = 'prenom=John; path=/admin; domain=believemy.com; expires' + date;

// Avec max-age, on rajoute uniquement le nbr de millisecondes pour sa durée de vie, à compter de la date UTC
document.cookie = 'prenom=John; path=/admin; domain=believemy.com; max-age=31536000000';

// On rajoute l'option secure pour que le cookie ne soit utilisé que sur les sites sécurisés https
document.cookie = 'prenom=John; path=/admin; domain=beliemy.com; max-age= 31536000000; secure';



















































