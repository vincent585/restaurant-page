import "./styles.css"
import { homepage } from "./homepage"
import { contact } from "./contact";
import { about } from "./about";
import { menu } from "./menu";

const content = document.querySelector('.content');

const navButtons = document.querySelectorAll('nav button');
navButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        clearContent();

        let btn = e.target;
        switch (btn.textContent) {
            case 'Home':
                content.appendChild(homepage());
                break;
            case 'Contact':
                content.appendChild(contact());
                break;
            case 'About':
                content.appendChild(about());
                break;
            case 'Menu':
                content.appendChild(menu());
            default:
                break;
        }
    });
});

content.appendChild(homepage());

function clearContent() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

