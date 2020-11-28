/* Géolocaliser un utilisateur */

// Vérifier que la géolocalisation soit disponible

if ('geolocation' in navigator) {

    // getCurrentPosition() ou watchPosition()
    // succes, error, options

    let options = {                     // Le param. 'options' est un objet littérale qui contient des options. On l'a déclaré à l'intérieur de notre condition pour être sûr qu'il soit appelé si la géolocalisation est disponible.
        enableHighAccuray: true,        // Par défaut la valeur est false, on essaie de limiter la consommation de batterie.
        maximumAge       : 0,           // En mettant 0, on oblige notre navigateur à actualiser notre position géographique; Or en mettant 10s par ex, on l'autorise à reprendre une position détectée dans les 10s passées. La val. par déf. est 0. On ne précise donc pas cela dans notre code pour économie de batterie. 
        timeOut          : 10000        // On définit le temps maximal pour que notre navigateur détecte notre position. Par déf. il est infini, on lui laisse un max de temps pour y parvenir. Si, ici au bout de 10s, il n'y parvient pas, la fct. error() sera alors appelée. Donc désactivation de toutes les fonctionnalités qui utilisent la géoloc.

    }



    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
    }, error, options);                                      // Deuxième param. error(qui est une fct.)

    function error() {
        alert("Vous avez refusé la géolocalisation.");
    }

    /*
  let watch = navigator.geolocation.watchPosition() ...
  navigator.geolocation.clearWatch(watch)   // On utilise clearWatch() pour arrêter l'actualisation de la géolocalisation.
  */

}
else {
    alert("La géolocalisation ne peut pas être utilisée.");
}

































