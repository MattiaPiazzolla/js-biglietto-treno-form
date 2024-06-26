esercizio di oggi: calcolo del prezzo del biglietto del treno
cartella/repo js-biglietto-treno-form
Descrizione: Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Questo è il primo esercizio suddiviso per milestone, quindi seguite le milestone nell'ordine: non passate alla successiva se non avete fatto la precedente
Numero minimo di push: 10
MILESTONE 0: Creare il file README.md
MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2: Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota: Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.

SCOMPOSIZIONE IN SOTTOPROBLEMI
>creo la struttura html a cui fare riferimento nel file js
>recupero il bottone per il calcolo del prezzo nel file js 
    >>attribuisco ad una const i lavore recuperato dal bottone
    >>dico al bottone di aspettare un'azione (click)
        >>>all'inesco di quest'azione (click), tramime una funzione, faccio in modo che recuperi le informazioni (nome completo, km e fascia di età ) inserite nel form (precedentemente strutturato in html)
            >>>>attribuisco ad dei let i lavori recuperati dal bottone 
>definisco una variabile price 
    >>attibuisco come valore il risultato del calcolo ottenuto moltiplicando il numero di chilometri da precorrere dall'utente con 0,21 
>definisco una variabile msg per l'output delle informazioni sul prezzo del biglietto (card del biglietto)
>definisco una variabile per il prezzo finale (in fase iniziale sarà uguale alla variabile price) 
>definisco delle condizioni che vadano ad applicare gli sconti nei casi in cui si verifichino delle condizioni 
    >>eseguo il calcolo per sottrarre il 20% del prezzo base al prezzo base e definire il prezzo scontato del 20% se il valore della fascia di età è uguale (===) a minorenne
        >>>attribuisco alla variabile msg una personalizzazione per questo caso specifico
    >>eseguo il calcolo per sottrarre il 40% del prezzo base al prezzo base e definire il prezzo scontato del 40% se il valore della fascia di età è uguale (===) a over 65
        >>>attribuisco alla variabile msg una personalizzazione per questo caso specifico
>inserisco mgn nel dom tramite innerHTML/innerText