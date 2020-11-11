/* Variables locales et globales*/

let cri = "Toujours plus bas!";      // Globale

function criDeGuerre() {

    let cri = "Toujours plus fort!"; // Locale
    console.log(cri); 

}

criDeGuerre();                      // La fct. n'affichera en priorité sa variable locale.

console.log(cri);                   // La console affichera la var. globale.






