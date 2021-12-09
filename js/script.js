// Variabile collegata al file html
const outputHtml = document.getElementById("output");
const button = document.getElementById('button');

// Constante applicativo, fissato in alto è più facile da modificare in futuro.
const pricePerkm = 0.21; 
const discount18 = 20;
const discount65 = 40;

// Chiedere i km della tratta
const km = parseInt(prompt("Inserisci il numero di km da percorrere:"));
// Chiedere l'età del passeggero
const age = parseInt(prompt("Inserisci la tua età:"));

//Check valori inseriti dall'utente
if (isNaN(km) || isNaN(age)) {
    alert('Attenzione inserisci un numero per i valori richiesti.')
} else {

}
 
// Prezzo del biglietto senza sconto
let price = pricePerkm * km;
console.log(price);


button.addEventListener('click', function() {
    // Prezzo del biglietto scontato (20% -> 0.8 || 40% -> 0.6)
    if (age < 18) {
        const discount = price * discount18 / 100;
        price = price - discount;
        outputHtml.innerHTML = "</br> È stato applicato uno sconto del 20% sul prezzo totale!";  
    }
    
    if (age >= 65) {
        const discount = price * discount65 / 100;
        price = price - discount;
        outputHtml.innerHTML += "</br> È stato applicato uno sconto del 40% sul prezzo totale!"; 
    } else {
        discount = price;
        outputHtml.innerHTML += "</br> NON è stato applicato alcuno sconto sul prezzo totale.";  
    }
    
    console.log(price);
    
    // Mostrare solamente due cifre decimali per specificare il costo del biglietto
    price = parseFloat(price.toFixed(2));
    console.log(price);
    
    outputHtml.innerHTML += `<br/>Il costo totale del biglietto è di ${price}€.`;
})

