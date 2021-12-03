// variabile collegata al file html
const outputHtml = document.getElementById("output")

// chiedere i km della tratta
let kilometers = prompt("Inserisci il numero di km da percorrere:");
// chiedere l'età del passeggero
let age = prompt("Inserisci la tua età:");


// Prezzo del biglietto senza sconto
let kmPrice = 0.21;
let ticketPrice = kilometers * kmPrice;
console.log(ticketPrice);


// Prezzo del biglietto scontato
let discountValue;
if (age < 18) {
    discountValue = ticketPrice * 0.8;
    outputHtml.innerHTML = "</br> È stato applicato uno sconto del 20% sul prezzo totale del biglietto!";  
} else if (age > 65) {
    discountValue = ticketPrice * 0.6; 
    outputHtml.innerHTML += "</br> È stato applicato uno sconto del 40% sul prezzo totale del biglietto!"; 
} else {
    discountValue = ticketPrice;
    outputHtml.innerHTML += "</br> NON è stato applicato alcuno sconto sul prezzo totale del biglietto.";  
}

outputHtml.innerHTML += `<br/>Il costo totale del biglietto è di ${discountValue}€`;


// Mostrare solamente due cifre decimali per specificare il costo del biglietto
// discountValue = discountValue.toFixed(2);

