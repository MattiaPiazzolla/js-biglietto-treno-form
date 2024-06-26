    // RECUPERO IL BOTTONE PER IL CALCOLO DEL PREZZO E IL BOTTONE ANNULLA
const calcBtn = document.getElementById('price-calculator');
const canBtn = document.getElementById('cancel');

calcBtn.addEventListener('click', function () {
    // RECUPERO I DATI DALLA FORM
    let fullName = document.getElementById('full-name').value;
    let km = document.getElementById('km').value;
    let fDE = document.getElementById('fde').value;
    // CALCOLO IL PREZZO E LO ATTRIBUISCO AD UNA VARIABILE PRICE
    let price = km * 0.21;
    // DICHIARO LA VARIABILE CHE ANDRO A VISUALIZZARE NELL'OUTPUT E LE ASSEGNO IL PREZZO CALCOLATO IN PRECEDENZA
    let finalPrice = price
    // DICHIARO LA VARIABILE MSG CHE ANDRO A MOSTRARE  NELL'OUTPUT
    let msg = `Il passeggero ${fullName} deve pagare il prezzo intero pari a ${finalPrice}€`   

    // DEFINISCO LE CONDIZIONI NELLE QUALI APPLICARE LO SCONTO
    if(fDE === 'minorenne'){
        finalPrice = price * 0.8;
        msg = `Il passeggero ${fullName} ha diritto ad uno sconto del 20%, il prezzo del biglietto è di ${finalPrice}€`
    } else if (fDE === 'senior') {
        finalPrice = price * 0.6;
        msg = `Il passeggero ${fullName} ha diritto ad uno sconto del 40%, il prezzo del biglietto è di ${finalPrice}€`
    }
    console.log(msg)
})