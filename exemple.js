/* Sélectionner et modifier un élément */

// JavaScript
document.querySelector('h1').textContent = "Bonjour avec JavaScript";
// document.querySelectorAll('p').textContent = "Ceci est mon parapgraphe."; // Sélectionner tous les p. On ne peut en revanche pas modifier tous les p d'un coup,
// Contrairement à ce que permet jQuery.  
document.querySelector('.maClass').innerHTML = "<p><b>HTML modifié</b></p>"; // Modification du HTML
document.querySelector('span').style.color = 'orange';      // Modifier le style
// document.querySelector('#monId').className = 'important';   // Ajout d'une classe
// document.querySelector('#monId').className = ''; // On ne peut pas supprimer une seule classe, on les supprime toutes
// document.querySelectorAll('p').style.color = 'purple'; / On ne peut pas modifier le style de TOUS les éléments sélectionnés par 'All'.

// jQuery                                                                             
$('h1').text('Bonjour avec jQuery'); // On donne le sélecteur CSS
$('p').html('<p><b>HTML modifié avec jQuery</b></p>');  // On sélectionne ici tous les éléments p. On peut modifier uniquement leur texte si on veut, ou sinon tout leur html.
$('span').css('color', 'green');     // On garde uniquement le 'color', si on veut juste appeler la propriété par ex. pour la ranger dans une variable.
$('#monId').addClass('important');   // Ajout d'une classe avec jQuery.
$('#monId').removeClass('important'); // On retire une seule classe à la fois.
$('p').css('color','purple');         // On peut par contre modifier le style de tous les éléments 'p' avec jQuery.































