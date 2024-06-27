    // RECUPERO IL BOTTONE PER IL CALCOLO DEL PREZZO E IL BOTTONE ANNULLA
const calcBtn = document.getElementById('price-calculator');
const canBtn = document.getElementById('cancel');
    // RECUPERO IL VALORE DI FORM
const form = document.getElementById('form-ticket');

function priceCalculator() {
    // RECUPERO I DATI DALLA FORM
    let fullName = document.getElementById('full-name').value;
    let km = document.getElementById('km').value;
    let fDE = document.getElementById('fde').value;
    // CALCOLO IL PREZZO E LO ATTRIBUISCO AD UNA VARIABILE PRICE
    let price = km * 0.21;
    // DICHIARO LA VARIABILE CHE ANDRO A VISUALIZZARE NELL'OUTPUT E LE ASSEGNO IL PREZZO CALCOLATO IN PRECEDENZA
    let finalPrice = (price).toFixed(2)
    // DICHIARO LA VARIABILE MSG CHE ANDRO A MOSTRARE  NELL'OUTPUT
    let msg = `Il passeggero ${fullName} deve pagare il prezzo intero pari a ${finalPrice}€`   

    // DEFINISCO LA CARROZZA
    let cabin = Math.floor(Math.random() * 15 +1);

    // DEFINISCO LA CODICE CP
    let cpCode = Math.floor(Math.random() * 100000 +1);

    // DEFINISCO LA CATEGORIA DEL BIGLIETTO
    let ticketCategory = 'Biglietto Standard'
    // DEFINISCO LE CONDIZIONI NELLE QUALI APPLICARE LO SCONTO
    if(fDE === 'minorenne'){
        finalPrice = (price * 0.8).toFixed(2);
        msg = `Il passeggero ${fullName} ha diritto ad uno sconto del 20%, il prezzo del biglietto è di ${finalPrice}€`
        ticketCategory = 'Biglietto Junior'
    } else if (fDE === 'senior') {
        finalPrice = (price * 0.6).toFixed(2);
        msg = `Il passeggero ${fullName} ha diritto ad uno sconto del 40%, il prezzo del biglietto è di ${finalPrice}€`
        ticketCategory = 'Biglietto Senior'
    }
    document.getElementById('msg').innerHTML = `<p class="fs-6 text-secondary">${msg}</p>`
    

    // DEFINISCO L'OUTPUT DELLA CARD DEL BIGLIETTO 
    document.getElementById('ticket').innerHTML = `<h2 class="text-center text-white">IL TUO BIGLIETTO</h2>
                        <div class="card p-3">
                            <h4>DETTAGLIO PASSEGGERI</h4>
                            <div class="col-12">
                                <div class="container-fluid">
                                    <div class="row align-content-center justify-content-center">
                                        <div class="col-4 bg-gray ticket-height">
                                            <h4>NOME PASSEGGERO</h4>
                                            <p>${fullName}</p>
                                        </div>
                                        <div class="col-2 d-flex flex-column justify-content-between custom-border-tb">
                                            <p class="fw-bold">Offerta</p>
                                            <p>${ticketCategory}</p>
                                        </div>
                                        <div class="col-2 d-flex flex-column justify-content-between custom-border-tb">
                                            <p class="fw-bold">Carrozza</p>
                                            <p>${cabin}</p>
                                        </div>
                                        <div class="col-2 d-flex flex-column justify-content-between custom-border-tb">
                                            <p class="fw-bold">Codice CP</p>
                                            <p>${cpCode}</p>
                                        </div>
                                        <div class="col-2 d-flex flex-column justify-content-between custom-border-tb custom-border-end">
                                            <p class="fw-bold">Costo biglietto</p>
                                            <p>${finalPrice}€</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;
}

calcBtn.addEventListener('click', priceCalculator)

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        calculateTicketPrice();
    }
});


// ATTRIBUISCO LA FUNZIONE DI RESET AL BOTTONE ANNULLA
canBtn.addEventListener('click', function (){
    // RESETTO LE VARIABILI DEL FORM
    let fullName = document.getElementById('full-name').value = "";
    let km = document.getElementById('km').value = "";
    let fDE = document.getElementById('fde').value = "adult";
    //NASCONDO IL MESSAGGIO E LA CARD DEL BIGLIETTO
    document.getElementById('msg').innerHTML = '';
    document.getElementById('ticket').innerHTML = '';
})