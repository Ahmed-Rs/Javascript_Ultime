/* Ajouter des animations */

$('h1').hide();
$('h1').show();

//POST
$('p').click(() => {            
    // $('h1').toggle();       // toggle(); affiche et cache l'élément à mesure qu'on 'click'
    // $('h1').fadeToggle();   // fadeToggle(); ici fait la chose et son inverse.
    // $('h1').slideToggle();
    // $('h1').animate({        // Avec animate, on ne peut utiliser que des propriétés contenant des valeurs numériques, et on ne peut pas mettre d'unités (px, em...).
    //     opacity: 0.7,
    //     margin: 30
    // });
    $('h1').slideUp().slideDown().animate({ opacity: .7, margin: 30});
});




























