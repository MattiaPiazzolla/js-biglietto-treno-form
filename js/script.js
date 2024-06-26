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

})