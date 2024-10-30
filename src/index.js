import "./styles.css"
import lavenderImage from "./lavender.jpg"

const content = document.querySelector(".content");
const image = document.createElement("img");

image.src = lavenderImage;
content.appendChild(image);
