/* Créer des modules (import, export) */

// Inscription?  Par exemple la fonctionnalité inscription d'un site

// Attention besoin d'un serveur https pour utiliser les modules


// Le doosier Modules et le fichier index.js sont tous les deux à la racine de notre serveur.
// index.js
import { direBonjour } from './Modules/fichier.js';

direBonjour("John");
// On aura dans la console: Bonjour John


// Dossier modules;  Modules/fichier.js
export direBonjour(prenom) {            // On utilise export pour autoriser l'export de cette fct.
    console.log("Bonjour " + prenom);
}


// On doit préciser dans notre html qu'on utilise des modules pour que le navigateur nous permette d'utiliser un module dans notre code
<script type="module" src="exemple.js"></script>













