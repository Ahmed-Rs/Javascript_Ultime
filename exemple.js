// /* Exercice débutant */

// function abracadabra(){

//     let prenom = prompt("Quel est votre prénom?"),
//     nom        = prompt("Quel est votre nom?"),
//     age        = prompt("Quel age avez-vous?");

//     alert("Sapristi! On ne m'avait pas prévenu que c'était vous, " 
//     + prenom 
//     +"! Euh je veux dire... Monsieur le grand magicien " 
//     + nom 
//     + "! Cela fait déjà " 
//     + age 
//     + " ans que vous faites rayonner notre contrée!");
// }

// abracadabra();



/* Exercice avancé */



function calculerIMC(taille, poids) {

    let imc = poids / Math.pow((taille/100), 2);
    return imc;
}

let poids = prompt("Quel est votre poids?");
let taille = prompt("Quelle taille faites-vous? (en cm)");

let votreIMC = calculerIMC(taille, poids);

alert("Votre IMC est de: " + votreIMC + "!");

