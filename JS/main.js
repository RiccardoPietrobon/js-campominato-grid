//L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
//Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Quando l'utente clicca su ogni cella,
// la cella cliccata si colora di azzurro ed emetto un messaggio in
// console con il numero della cella cliccata.

//Bonus
//Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
//- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
//- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
//- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;



/************     CODICE     ********* */

const my_button = document.getElementById("push");


my_button.addEventListener(
    "click",
    function () {

        const my_grid = document.getElementById("box");

        const chose = document.getElementById("tipo_di_griglia").value;


        generazione_griglia(my_grid, chose);

    }
)

/*********** FUNZIONI **********/

function generazione_griglia(grid, dimensione_grid) {

    //griglia vuota
    grid.innerHTML = "";

    //ciclo per generare il numero di celle desiderato
    for (let i = 0; i < dimensione_grid; i++) {

        //numeri da inserire
        const square_text = [i + 1];
        //console.log(square_text);

        //aggiungo un div
        const my_square = document.createElement("div");

        //aggiungo le classi desiderate
        my_square.classList.add("square10");

        //aggiungo il numero
        my_square.append(square_text);

        //funzione click
        my_square.addEventListener(
            "click",
            function () {
                this.classList.toggle("square_active");
                console.log("La casella è la n° " + square_text);
            }
        )

        grid.append(my_square);
    }

}