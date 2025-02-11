// hero content
const heroDiv = document.createElement("div");
heroDiv.id = "hero-content";

const heroTitle = document.createElement("h1");
heroTitle.id = "hero-title";
heroTitle.innerText = "Pho Nation";

const heroSubtitle = document.createElement("h3");
heroSubtitle.id = "hero-subtitle";
heroSubtitle.innerText = "Serving authentic vietnamese in the heart of San Francisco since 1991";

heroDiv.appendChild(heroTitle);
heroDiv.appendChild(heroSubtitle);

// order cta
const ctaDiv = document.createElement("div");



export default heroDiv;