/* Une application météo */



window.onload = function() {

    let ville0 = "Paris";
    recevoirTemperature(ville0);

    let boutton = document.querySelector("#changer");
    boutton.addEventListener('click', () => {
        let villeChoisie = prompt("Veuillez taper le nom d'une ville.");
        recevoirTemperature(villeChoisie);
    });


    function recevoirTemperature(ville) {   

        const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=fb57a853ce1f2143b146f48c50216831&units=metric';

        let requete =  new XMLHttpRequest();
        requete.open('GET', url);
        requete.responseType = 'json';
        requete.send();

        requete.onload = function() {
            if (requete.readyState === XMLHttpRequest.DONE) {
                if (requete.status === 200) {
                    let reponse = requete.response;
                    let temperature = reponse.main.temp;
                    let ville = reponse.name;
                    document.querySelector("#ville").textContent = ville;
                    document.querySelector("#temperature_label").textContent = temperature;
                    console.log("La température à " + ville + " est " + temperature + " degrés Celcius");
                }
                else {
                    alert('Un problème est survenu, veillez revenir plutard.');
                }
            }
        }
    }




   
}












































