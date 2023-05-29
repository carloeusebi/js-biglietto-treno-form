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
    
    //TODO add validation

    // ! AFTER validation 'grab' all dom element

    const ticket = document.querySelector('.ticket');
    const ticketName = document.getElementById('ticket-name');
    const ticketType = document.getElementById('ticket-type');
    const ticketPrice = document.getElementById('ticket-price');
    const ticketCab = document.getElementById('ticket-cab');
    const ticketSeat = document.getElementById('ticket-seat');
    const ticketCode = document.getElementById('ticket-code');

    
    let price = kilometers * pricePerKm;
    
    if (passengerAge === 'junior') price *= discountJunior;
    else if (passengerAge === 'senior') price *= discountSenior;

    //TODO generate random ticket code, cab and seat;
    
    // # print on screen
    // show ticket
    ticket.classList.remove('hidden');

    ticketName.innerText = passengerName;
    ticketType.innerText = passengerAge;
    ticketPrice.innerText = price.toFixed(2) + '€';


})