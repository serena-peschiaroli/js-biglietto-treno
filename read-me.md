### Esercizio

    Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
    Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65.


### Soluzione

**Dati**

    1. prompt: chiedere all'utente l'età;
    2. prompt: chiedere all'utente i km totali;

**Logica**

    1. Moltiplicare il nKm per 0.21 per ottenere il prezzo del biglietto; 
    2. Determinare se l'età dell'utente è <18 oppure >65 per applicare lo sconto; 
    2a. SE l'età dell'utente è <18: PrezzoBiglietto * 0.20 = scontoTotale1; poi, PrezzoBiglietto - scontoTotale1  = Prezzo con sconto

    Preparo il messaggio del prezzo finale. 

    2b. SE l'età dell'utente è >65: PrezzoBiglietto * 0.40 = scontoTotale2; poi, PrezzoBiglietto - ScontoTotale2 = Prezzo con sconto

    Preparo il messaggio con prezzo finale.

    2c. SE l'età dell'utente è >18 e <65, non c'è sconto.

    Preparo il messaggio del prezzo senza sconto.

**Output**

Stampo il messaggio con il prezzo. 
