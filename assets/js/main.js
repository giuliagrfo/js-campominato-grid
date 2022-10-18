/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */



// Creare una griglia 10x10 con js

// Seleziono elemento della DOM in cui inserire le celle con queryselector
const containerEl = document.querySelector('.container');

// Definisco una variabile con il markup per creare una cella
// const cellEl = `<div class="cell"></div>`;
// console.log(cellEl);

// Salvo in una variabile il numero delle celle 
const cellsNumber = 100;


// const buttonEl = document.querySelector('button');

// buttonEl.addEventListener('click', function() {
//     campGenerator(cellsNumber, containerEl)
    
// })

campGenerator(cellsNumber, containerEl)


// utilizzare una funzione per creare le celle
function cellGenerator(n) {
    const cellEl = document.createElement('div');
    cellEl.className = "cell";
    cellEl.innerText = n;
    return cellEl

}

// utilizzare una funzione e il ciclo for per inserire tutte le celle nel markup
function campGenerator(numberOfCells, markupEl) {
    for(let i = 1; i <= 100; i++){
        const currentCell = `${i}`;
        const cellElement = cellGenerator(currentCell);
        markupEl.insertAdjacentElement('beforeend', cellElement);
        cellGenerator(i)
    }
}


const cellsList = document.querySelectorAll('.cell');

clickOn(cellsList);
// utilizzo una funzione per rendere le celle cliccabili
function clickOn(allCells) {
    for(let i = 1; i < allCells.length; i++) {
        const currentCell = allCells[i];
        currentCell.addEventListener('click', function(){
            console.log('Ho cliccato sulla casella');
            currentCell.classList.toggle('active');
            // currentCell.insertAdjacentHTML('beforeend', `${i}`)
            console.log(i);
            
        })
    }
}



