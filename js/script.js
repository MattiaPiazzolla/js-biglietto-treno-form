    // RECUPERO IL BOTTONE PER IL CALCOLO DEL PREZZO E IL BOTTONE ANNULLA
const calcBtn = document.getElementById('price-calculator');
const canBtn = document.getElementById('cancel');

calcBtn.addEventListener('click', function () {
    // RECUPERO I DATI DALLA FORM
    let fullName = document.getElementById('full-name').value;
    let km = document.getElementById('km').value;
    let fDE = document.getElementById('fde').value;

    console.log(fullName)
    console.log(km)
    console.log(fDE)
})