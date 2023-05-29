// Targeting dom elements
const elementName = document.getElementById('name');
const elementKm = document.getElementById('distance');
const elementAge = document.getElementById('age');

const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');

const ticket = document.querySelector('.ticket');

// declaring const variables
const pricePerKm = 0.21;
const discountJunior = 0.8;
const discountSenior = 0.6;

resetButton.addEventListener('click', function () {

    //reset errors
    resetErrors();

    //clear fields
    elementName.value = '';
    elementKm.value = '';
    elementAge.value = 'adulto';

    //hides ticket
    ticket.classList.add('hidden');

    //autofocus on name field
    elementName.focus();
})

submitButton.addEventListener('click', function () {

    // clean old errors
    resetErrors();

    // collect user inputs
    const passengerName = elementName.value.trim();
    const kilometers = parseInt(elementKm.value);
    const passengerAge = elementAge.value;

    // Validation
    let isValid = validateInputs(passengerName, passengerAge, kilometers);

    if (!isValid) {

        //if not valid hides old ticket
        ticket.classList.add('hidden');
    } else {

        // MAIN LOGIC

        let price = kilometers * pricePerKm;

        if (passengerAge === 'junior') price *= discountJunior;
        else if (passengerAge === 'senior') price *= discountSenior;

        const ticketNumber = generateRndNumber(100000, 999999);
        const cab = generateRndNumber(2, 9);
        const seat = generateRndNumber(1, 99);

        ticket.classList.remove('hidden'); //show ticket

        // collect dom elements and print outputs
        const ticketName = document.getElementById('ticket-name');
        const ticketType = document.getElementById('ticket-type');
        const ticketPrice = document.getElementById('ticket-price');
        const ticketCab = document.getElementById('ticket-cab');
        const ticketSeat = document.getElementById('ticket-seat');
        const ticketCode = document.getElementById('ticket-code');

        ticketName.innerText = passengerName;
        ticketType.innerText = passengerAge;
        ticketPrice.innerText = price.toFixed(2) + '€';
        ticketCode.innerText = ticketNumber;
        ticketCab.innerText = cab;
        ticketSeat.innerText = seat;
    }
})

function validateInputs(passengerName, passengerAge, kilometers) {

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

    return isValid;
}

function resetErrors() {
    elementName.classList.remove('is-invalid');
    elementKm.classList.remove('is-invalid');
    elementAge.classList.remove('is-invalid');
    document.getElementById('validate-name').style.display = 'none';
    document.getElementById('validate-km').style.display = 'none';
}

function generateRndNumber(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}