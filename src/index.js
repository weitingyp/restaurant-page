import homePage from "./home.js";
import "./styles.css";

const content = document.querySelector("div#content");
content.appendChild(homePage);
console.log(homePage);