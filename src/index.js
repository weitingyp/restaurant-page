import homePage from "./home.js";
import aboutPage from "./about.js";
import "./styles.css";

const content = document.querySelector("div#content");

// Page Navigation Buttons
const homeBtn = document.querySelector("#nav-home-btn");
const menuBtn = document.querySelector("#nav-menu-btn");
const aboutBtn = document.querySelector("#nav-about-btn");

// Load home by default
content.appendChild(homePage);

// Clear container
const resetContent = () => {content.innerHTML = ""};

// Load home on button 
const renderHome = ()=>{
    resetContent();
    content.appendChild(homePage);
}

homeBtn.addEventListener('click', renderHome);

// Load about on button click 
const renderAbout = ()=>{
    resetContent();
    content.appendChild(aboutPage);
}

aboutBtn.addEventListener('click', renderAbout);