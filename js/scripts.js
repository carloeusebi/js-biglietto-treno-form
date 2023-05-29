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

    let basePrice = kilometers * pricePerKm;
    
    console.log(basePrice);

})