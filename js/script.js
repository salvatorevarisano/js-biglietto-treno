
function calculatePrice() {
    // - chiedere all'utente quanti km deve percorrere
    var kmPercorsi = parseInt( document.getElementById('km-percorsi').value );
   // console.log(typeof(kmPercorsi), + kmPercorsi);

    // - chiedere l'età dell'utente
    var age = parseInt( document.getElementById('age').value );
    //console.log(typeof(age), + age);

    // - sapendo che 1 km = 0.21€ e che l'utente ha diritto allo sconto del 20% se è minorenne e del 40% se over 65, calcola il prezzo del biglietto
    costoKm = 0.21;

    if (age < 18) {
        sconto = ( (kmPercorsi * costoKm) * 0.2 );
    } else if (age > 65) {
        sconto = ( (kmPercorsi * costoKm) * 0.4 );
    } else {
        sconto = 0;
    }
    //console.log (sconto);

    prezzoBiglietto = ( (kmPercorsi * costoKm) - sconto ).toFixed(2);
    //console.log(prezzoBiglietto);

    // - scrivere risultato a schermo
    document.getElementById('price').innerHTML = prezzoBiglietto + '€';
}
