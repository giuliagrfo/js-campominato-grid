/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */



// Creare una griglia 10x10 con js

// Seleziono elemento della DOM in cui inserire le celle con queryselector
const containerEl = document.querySelector('.container');

// Definisco una variabile con il markup per creare una cella
const cellEl = `<div class="cell"></div>`;
console.log(cellEl);

// Salvo in una variabile il numero delle celle 
const cellsNumber = 100;

// utilizzare una funzione e il ciclo for per inserire tutte le celle nel markup
cellGenerator(cellsNumber, containerEl, cellEl )

function cellGenerator(maxCell, containerElement, cellMarkup) {
    for(let i = 0; i < maxCell; i++){

        containerElement.innerHTML += cellMarkup;
    }
}

const cellsList = document.getElementsByClassName('cell');

clickOn(cellsList);

function clickOn(allCells) {
    for(let i = 0; i < allCells.length; i++) {
        const currentCell = allCells[i];
        currentCell.addEventListener('click', function(){
            console.log('Ho cliccato sulla casella');
            currentCell.classList.toggle('active');
        })
    }
}