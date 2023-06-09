// Targeting dom elements
const elementName = document.getElementById('name');
const elementKm = document.getElementById('distance');
const elementAge = document.getElementById('age');

const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');

const ticket = document.querySelector('.ticket');

const ticketName = document.getElementById('ticket-name');
const ticketType = document.getElementById('ticket-type');
const ticketPrice = document.getElementById('ticket-price');
const ticketCode = document.getElementById('ticket-code');
const ticketCab = document.getElementById('ticket-cab');
const ticketSeat = document.getElementById('ticket-seat');

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
    const isValid = validateInputs(passengerName, passengerAge, kilometers);

    if (!isValid) {

        //if not valid hides old ticket
        ticket.classList.add('hidden');
    } else {

        // MAIN LOGIC

        let price = kilometers * pricePerKm;

        if (passengerAge === 'junior') price *= discountJunior;
        else if (passengerAge === 'senior') price *= discountSenior;

        const ticketCode = generateRndNumber(100000, 999999);
        const cab = generateRndNumber(2, 9);
        const seat = generateRndNumber(1, 99);

        ticket.classList.remove('hidden'); //show ticket

        // collect dom elements and print outputs
        ticketName.innerText = passengerName;
        ticketType.innerText = passengerAge;
        ticketPrice.innerText = price.toFixed(2) + '€';
        ticketCode.innerText = ticketCode;
        ticketCab.innerText = cab;
        ticketSeat.innerText = seat;
    }
})

/**
 * validates three inputs, gives an error on screen for each input if not valid and return true if all inputs are valid, otherwise it returns false
 * @param {string} passengerName the passenger name inserted by the user
 * @param {string} passengerAge the age category selected by the user
 * @param {number} kilometers the kilometer value inserted by the user
 * @returns true if all inputs are valid, false if one of the inputs fails validation
 */

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

/**
 * resets all errors
 */
function resetErrors() {
    elementName.classList.remove('is-invalid');
    elementKm.classList.remove('is-invalid');
    elementAge.classList.remove('is-invalid');
    document.getElementById('validate-name').style.display = 'none';
    document.getElementById('validate-km').style.display = 'none';
}

/**
 * returns a random number, for given min and max values
 * @param {number} min the minimum value the random number can be
 * @param {number} max the maxmimum value the random number can be
 * @returns random number between given min and max
 */

function generateRndNumber(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}