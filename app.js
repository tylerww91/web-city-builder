/* Imports */

/* Get DOM Elements */

const cityInput = document.getElementById('city-input');
const climateSelect = document.getElementById('climate-input');
const architectureSelect = document.getElementById('architecture-input');

const attractionsInput = document.getElementById('attractions-input');

/* State */

/* Events */
cityInput.addEventListener('input', () => {
    const city.name = cityInput.value,
    displayCity();
});

climateSelect.addEventListener('change', () => {
    const city.climate = climateSelect.value,
    displayCIty();
})

architectureSelect.addEventListener('change', () => {
    const city.architecture = architectureSelect.value,
    displayCIty();
})

/* Display Functions */

displayCity()

// (don't forget to call any display functions you want to run on page load!)
