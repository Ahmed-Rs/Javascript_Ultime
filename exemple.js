/* Ajouter des évènements */



// JavaScript
// document.querySelector('h1').addEventListener('click', () => {
//    document.querySelector('h1').style.color = 'orange';
// });


// Executer une fct. dès qu'on click sur un des 'p'.
// for(let i = 0; i < 2; i++) {
//     document.querySelectorAll('p')[i].addEventListener('click', () => {
//         document.querySelector('h1').style.color = 'green';
//     });  
// }



// jQuery                                                                             
// $('h1').click(() => {               
//     $('h1').css('color', 'blue');
// });

$('p').click(() => {                // Déclencher un évènement lorsqu'on click sur p et qu'il y'en a plusieurs, est plus facile à faire avec jQuery.
    $('h1').css('color', 'green');
});


// On peut réutiliser les évènement JavaScript qu'on a l'habitude d'utiliser, en faisant on().
$('h1').on('mouseover', () => {
    $('#monId').addClass('important');
});

$('h1').on('mouseout', () => {
    $('#monId').removeClass('important');
});





















