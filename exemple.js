
    function addition(nombreA, nombreB){
        return nombreA + nombreB;
    }

    function multiplication(nombreA, nombreB){
        return nombreA * nombreB;
    }

    function soustraction(nombreA, nombreB){
        return nombreA - nombreB;
    }

    function division(nombreA, nombreB){

        if(nombreB == 0){
            throw new Error("Impossible de diviser par 0");        
        }

        return nombreA / nombreB;
    }

let restart = false;

do{

    do {
        
        var choix = Number(prompt("Que souhaitez-vous faire?\n\n 1.Addition \n 2.Multiplication \n 3.Soustraction \n 4.Division"));



    } while (choix != 1 && choix != 2 && choix != 3 && choix != 4);


    do {
        
        var premierNombre = Number(prompt("Entrez le premier nombre."));
        var deuxiemeNombre = Number(prompt("Entrez le deuxieme nombre."));


    } while (isNaN(premierNombre) || isNaN(deuxiemeNombre) );


    var resultat;

    try {
        switch (choix) {
            case 1:
                resultat = addition(premierNombre, deuxiemeNombre);
                break;
            case 2:
                resultat = multiplication(premierNombre, deuxiemeNombre);
                break;
            case 3:
                resultat = soustraction(premierNombre, deuxiemeNombre);
                break;
            case 4:
                resultat = division(premierNombre, deuxiemeNombre);
                break;
                            
            default:
                throw new Error ("Une erreur est survenue.");
        }

        alert("Le resultat est de: " + resultat)


    } catch (error) {
                alert(error);
    }

    restart = confirm("Souhaitez-vous faire un nouveau calcul?");
}
while(restart)







