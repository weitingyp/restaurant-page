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

// top dishes div 
const topDishesDiv = document.createElement("div");
topDishesDiv.id = "top-dishes-content";

const topDishesCardContainer = document.createElement("div");
topDishesCardContainer.id = "top-dishes-card-container";

const topDishesTitle = document.createElement("h1");
topDishesTitle.innerText = "Top Dishes";

const topDishesCard = document.createElement("div");
topDishesCard.className = "top-dish-card";

const topDishName = document.createElement("div");
topDishName.className = "top-dish-name";
topDishName.innerText = "Good Ol' Pho"

const topDishImg = document.createElement("div");
topDishImg.className = "top-dish-img";

const topDishDesc = document.createElement("div");
topDishDesc.innerText = "Pho-king good family recipe.";

topDishesDiv.appendChild(topDishesTitle);
topDishesDiv.appendChild(topDishesCardContainer);
topDishesCardContainer.appendChild(topDishesCard);
topDishesCard.appendChild(topDishName);
topDishesCard.appendChild(topDishImg);
topDishesCard.appendChild(topDishDesc);

// home page 

page.appendChild(heroDiv);
page.appendChild(ctaDiv);
page.appendChild(topDishesDiv);
page.appendChild(ctaDiv.cloneNode(true));

export default page;