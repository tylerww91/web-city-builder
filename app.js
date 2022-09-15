/* Imports */

/* Get DOM Elements */

const cityInput = document.getElementById('city-input');
const climateSelect = document.getElementById('climate-select');
const architectureSelect = document.getElementById('architecture-select');

const attractionsInput = document.getElementById('attractions-input');
const attractionsList = document.getElementById('attractions-list');
const nameDisplay = document.getElementById('name-display');
const climateDisplay = document.getElementById('climate-display');
const architectureDisplay = document.getElementById('architecture-display');

/* State */
const city = {
    name: '',
    climate: 'desert',
    architecture: 'gothic',
    attractions: [],
};

/* Events */
cityInput.addEventListener('input', () => {
    city.name = cityInput.value;
    displayCity();
});

climateSelect.addEventListener('change', () => {
    city.climate = climateSelect.value;
    displayCity();
});

architectureSelect.addEventListener('change', () => {
    city.architecture = architectureSelect.value;
    displayCity();
});

/* Display Functions */

function displayControl() {
    cityInput.value = city.name;
    climateSelect.value = city.climate;
    architectureSelect.value = city.architecture;
}

// displayClimate() {

// }

function displayCity() {
    nameDisplay.textContent = city.name;
    climateDisplay.src = 'assets/' + city.climate + '-climate.jpg';
    architectureDisplay.src = 'assets/' + city.architecture + '-architecture.jpg';
}

function displayAttractions() {
    attractionsList.innerHTML = '';

    for (const attractions of city.attractions) {
        const li = document.createElement('li');
        li.textContent = attractions;
        attractionsList.append('li');
    }
}

// (don't forget to call any display functions you want to run on page load!)
displayControl();
displayCity();
displayAttractions();
