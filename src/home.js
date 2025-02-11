const page = document.createElement("div");
page.id = "home-page";
page.style.height = '100vh';
page.style.width = '100vw';

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
ctaDiv.className = "cta-banner";

const ctaBtn = document.createElement("button");
ctaBtn.className = "cta-btn";
ctaBtn.innerText = "Order Now";

ctaDiv.appendChild(ctaBtn);

// home page 

page.appendChild(heroDiv);
page.appendChild(ctaDiv);

export default page;