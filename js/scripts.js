// Targeting dom elements

const elementName = document.getElementById('name');
const elementKm = document.getElementById('distance');
const elementAge = document.getElementById('age');
const button = document.querySelector('button');
const tempAnswer = document.querySelector('.temporary-answer');

// declaring const variables

const pricePerKm = 0.21;
const discountJunior = 0.8;
const discountSenior = 0.6;

button.addEventListener('click', function(){
    const passengerName = elementName.value.trim();
    const passengerAge = elementAge.value;
    const kilometers = parseInt(elementKm.value);
    
    console.log(passengerName, passengerAge, kilometers);

    //TODO add validation

    // ! AFTER validation 'grab' all dom element

    const ticket = document.querySelector('.ticket');
    const ticketName = document.getElementById('ticket-name');
    const ticketType = document.getElementById('ticket-type');
    const ticketCab = document.getElementById('ticket-cab');
    const ticketSeat = document.getElementById('ticket-seat');
    const ticketCode = document.getElementById('ticket-code');

    console.log(ticket, ticketName, ticketType, ticketCab, ticketSeat, ticketCode);

    // show ticket
    ticket.classList.remove('hidden');

    let basePrice = kilometers * pricePerKm;
    let discountedPrice = null;
    
    console.log('Base price: ' + basePrice);

    if (passengerAge === 'junior') discountedPrice = basePrice * discountJunior;
     else if (passengerAge === 'senior') discountedPrice = basePrice * discountSenior;

    if (discountedPrice) console.log('Discount: ' + discountedPrice);
})