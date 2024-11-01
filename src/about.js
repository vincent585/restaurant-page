export const about = () => {
    const container = document.createElement('div');
    container.classList.add('container');

    let header = document.createElement('h1');
    header.textContent = 'About The Lavender Cafe';

    let paragraph = document.createElement('p');
    paragraph.classList.add('about');
    paragraph.textContent = `Nestled in the heart of the city, The Lavender Cafe is a warm, inviting haven where flavors
     and ambiance come together to create an unforgettable experience. 
     Inspired by the calming essence of lavender fields and a passion for fresh, locally-sourced ingredients, 
     we offer a menu of handcrafted dishes, artisanal pastries, and specialty coffees that bring comfort to every visit. 
     Whether you're here for a morning pick-me-up, a leisurely brunch, or a peaceful spot to unwind, 
     The Lavender Cafe is a place to savor good food and great company. Come in, take a seat, and let us make you feel at home.`;

    container.appendChild(header);
    container.appendChild(paragraph);

    return container;
};