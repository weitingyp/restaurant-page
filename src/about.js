import { heroDiv } from "./home";
import "./styles.css";

const aboutPage = document.createElement("div");
aboutPage.className = "page";

const cloneHeroDiv = heroDiv.cloneNode(true);

aboutPage.appendChild(cloneHeroDiv);

export default aboutPage;