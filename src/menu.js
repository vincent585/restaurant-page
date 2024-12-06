export const menu = () => {
    const container = document.createElement('div');
    container.classList.add('container');

    let menuContainer = createMenuContainer();

    let header = document.createElement('h1');
    header.textContent = 'Menu';

    container.appendChild(header);
    container.appendChild(menuContainer);

    return container;
};

function createMenuItem(name) {
    let menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    let menuItemName = document.createElement('h3');
    menuItemName.textContent = name;

    let menuItemDescription = document.createElement('p');
    menuItemDescription.textContent = MENU[name].description;

    let menuItemPrice = document.createElement('p');
    menuItemPrice.textContent = `€${MENU[name].price}`;

    menuItem.appendChild(menuItemName);
    menuItem.appendChild(menuItemDescription);
    menuItem.appendChild(menuItemPrice);

    return menuItem;
}

function createMenuContainer() {
    let menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    let coffee = createMenuItem('Coffee');
    let wine = createMenuItem('Wine');
    let platDuJour = createMenuItem('Plat du Jour');
    let dessert = createMenuItem('Dessert');

    menuContainer.appendChild(coffee);
    menuContainer.appendChild(wine);
    menuContainer.appendChild(platDuJour);
    menuContainer.appendChild(dessert);

    return menuContainer;
}

const MENU = {
    'Coffee': {
        description : 'Kenya, Rwanda, China (Yunnan), Colombia',
        price: 2
    },
    'Wine': {
        description: 'Bordeaux, Alsace, Merlot, Provence, Sauvignon blanc, Beaujolais',
        price: 8
    },
    'Plat du Jour': {
        description: 'Variable, ask your server what this includes or see the specials board.',
        price: 15
    },
    'Dessert': {
        description: 'Creme brulee, chocolate cake, tiramisu',
        price: 6
    }
}