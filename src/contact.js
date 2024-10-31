export const contact = () => {
    const container = document.createElement('div');
    container.classList.add('container');

    let header = document.createElement('h1');
    header.textContent = 'Contact Us';

    let contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');

    let phoneNumber = document.createElement('p');
    phoneNumber.textContent = 'Telephone: 555-111-2321';

    let email = document.createElement('p');
    email.textContent = 'Email: lavendercafe@example.com';

    container.appendChild(header);
    contactInfo.appendChild(phoneNumber);
    contactInfo.appendChild(email);
    container.appendChild(contactInfo);

    return container;
};