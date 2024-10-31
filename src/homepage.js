export const homepage = () => {
    return createMainContainer();
}

const SCHEDULE = {
    'Sunday': '11:00 - 16:00',
    'Monday': '09:00 - 18:00',
    'Tuesday': '09:00 - 18:00',
    'Wednesday': '09:00 - 18:00',
    'Thursday': '09:00 - 18:00',
    'Friday': '09:00 - 18:00',
    'Saturday': '10:00 - 19:00',
};

const STREET_ADDRESS = '111 Rue de la Fontaine';
const AREA_ADDRESS = '75007 Paris, FRA';

function createMainContainer() {
    let container = document.createElement('div');
    container.classList.add('container');

    let header = document.createElement('h1');
    header.textContent = 'The Lavender Cafe';
    container.appendChild(header);

    let tagline = document.createElement('div');
    tagline.classList.add('tagline');
    let paragraph = document.createElement('p');
    paragraph.textContent = 'A world-class cafe serving only the finest wines, coffees, and sweet treats to the finest ' +
        'of customers.';

    tagline.appendChild(paragraph);
    container.appendChild(tagline);
    container.appendChild(createInfoContainer());

    return container;
}

function createInfoContainer() {
    let infoContainer = document.createElement('div');
    infoContainer.classList.add('info-container');

    infoContainer.appendChild(createHoursSection());
    infoContainer.appendChild(createLocationSection());

    return infoContainer;
}

function createHoursSection() {
    let hoursSection = document.createElement('div');
    hoursSection.classList.add('hours');

    let header = document.createElement('h2');
    header.textContent = 'Hours';
    hoursSection.appendChild(header);

    for (let day in SCHEDULE) {
        let paragraph = document.createElement('p');
        paragraph.textContent = `${day}: ${SCHEDULE[day]}`;

        hoursSection.appendChild(paragraph);
    }

    return hoursSection;
}

function createLocationSection() {
    let locationSection = document.createElement('div');
    locationSection.classList.add('location');

    let header = document.createElement('h2');
    header.textContent = 'Location';
    locationSection.appendChild(header);

    let addressLine1 = document.createElement('p');
    let addressLine2 = document.createElement('p');
    addressLine1.innerText = STREET_ADDRESS;
    addressLine2.innerText = AREA_ADDRESS;

    locationSection.append(...[addressLine1, addressLine2]);

    return locationSection;
}