// Targeting dom elements

const elementName = document.getElementById('name');
const elementKm = document.getElementById('distance');
const elementAge = document.getElementById('age');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const tempAnswer = document.querySelector('.temporary-answer');

const ticket = document.querySelector('.ticket');

// declaring const variables

const pricePerKm = 0.21;
const discountJunior = 0.8;
const discountSenior = 0.6;

resetButton.addEventListener('click', function () {
    //clear fields
    elementName.value = '';
    elementKm.value = '';
    elementAge.value = 'adulto';

    //resets errors (should use function :D)
    elementName.classList.remove('is-invalid');
    elementKm.classList.remove('is-invalid');
    elementAge.classList.remove('is-invalid');
    document.getElementById('validate-name').style.display = 'none';
    document.getElementById('validate-km').style.display = 'none';

    //hides ticket
    ticket.classList.add('hidden');

    //autofocus on name field
    elementName.focus();
})

submitButton.addEventListener('click', function () {
    // clean old errors
    elementName.classList.remove('is-invalid');
    elementKm.classList.remove('is-invalid');
    elementAge.classList.remove('is-invalid');
    document.getElementById('validate-name').style.display = 'none';
    document.getElementById('validate-km').style.display = 'none';

    // collect user inputs
    const passengerName = elementName.value.trim();
    const passengerAge = elementAge.value;
    const kilometers = parseInt(elementKm.value);

    //# Validation
    let isValid = true;

    if (!passengerName) {
        isValid = false;
        elementName.classList.add('is-invalid');
        document.getElementById('validate-name').style.display = 'block';
    }

    if (!kilometers || kilometers < 1 || kilometers > 5000) {
        isValid = false;
        elementKm.classList.add('is-invalid');
        document.getElementById('validate-km').style.display = 'block';
    }

    // it's VERY hard to mess a select but who knows :)
    if (passengerAge !== 'adulto' && passengerAge !== 'senior' && passengerAge !== 'junior') {
        isValid = false;
        elementAge.classList.add('is-invalid');
    }

    // ! AFTER validation 'grab' all dom element

    if (!isValid) {
        //if not valid hides old ticket
        ticket.classList.add('hidden');
    } else {

        const ticketName = document.getElementById('ticket-name');
        const ticketType = document.getElementById('ticket-type');
        const ticketPrice = document.getElementById('ticket-price');
        const ticketCab = document.getElementById('ticket-cab');
        const ticketSeat = document.getElementById('ticket-seat');
        const ticketCode = document.getElementById('ticket-code');

        let price = kilometers * pricePerKm;

        //apply discount
        if (passengerAge === 'junior') price *= discountJunior;
        else if (passengerAge === 'senior') price *= discountSenior;

        //# generate random ticket code, cab and seat;
        // ticket number is between 100000 and 999999
        const ticketNumber = Math.floor(Math.random() * 899999 + 100000);
        // cab is a number between 2 and 9
        const cab = Math.floor(Math.random() * 8 + 2);
        // seat is a number between 1 and 99
        const seat = Math.floor(Math.random() * 99 + 1);

        // # print on screen
        // show ticket
        ticket.classList.remove('hidden');

        ticketName.innerText = passengerName;
        ticketType.innerText = passengerAge;
        ticketPrice.innerText = price.toFixed(2) + '€';
        ticketCode.innerText = ticketNumber;
        ticketCab.innerText = cab;
        ticketSeat.innerText = seat;
    }
})