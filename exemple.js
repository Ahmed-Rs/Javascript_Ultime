


let boutton = document.querySelector('#mode');
let textBtn = document.querySelector('span');

if(localStorage.getItem('theme')) {
    if(localStorage.getItem('theme') === 'sombre') {
        modeSombre();
    }
}


boutton.addEventListener('click', () => {

    if(document.body.classList.contains('dark')) {
        document.body.className = '';
        textBtn.textContent = "Thème sombre";
        localStorage.setItem('theme', 'clair');
    }
    else {
        modeSombre();
    }
});

function modeSombre() {
    document.body.className = 'dark';
    textBtn.textContent = "Thème clair";
    localStorage.setItem('theme', 'sombre');
}




// if(localStorage.getItem('prenom')) {    // Si l'élément existe déjà
//     document.body.append('Bonjour ' + localStorage.getItem('prenom')); // L'item existe déja donc on y fait simplement appel par localStorage.getItem[clé] et on l'attache a notre page html via body.append()
// }
// else {                              // Sinon
//     let prenom = prompt('Quel est votre prénom?');
//     localStorage.setItem('prenom', prenom);        // Si on avait fait sessionStorage, on perdrait la donnée à la fermeture de la fenêtre
//     document.body.append('Bonjour ' + prenom);
// }

// localStorage.clear(); 



















































