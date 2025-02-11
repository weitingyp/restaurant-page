import { heroDiv } from "./home";
import "./styles.css";
import "./about_styles.css";

const aboutPage = document.createElement("div");
aboutPage.className = "page";

const cloneHeroDiv = heroDiv.cloneNode(true);

const aboutBio = document.createElement("div");
aboutBio.id = "about-container";

const aboutBioTitle = document.createElement("h1");
aboutBioTitle.innerText = "About Us";

const aboutBioText = document.createElement("div");
aboutBioText.innerText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut quam metus. In turpis lacus, molestie vitae feugiat vel, rutrum id justo. Aenean cursus pellentesque massa, quis condimentum massa vehicula nec. Sed in ipsum sem. Pellentesque viverra volutpat erat, sit amet ultrices ante dignissim ac. Morbi lobortis dignissim tincidunt. Phasellus mauris est, luctus bibendum convallis a, luctus eget ligula. Phasellus lobortis orci ac dolor vulputate consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque in massa in mauris dapibus aliquam eget ac purus. Nulla a enim porttitor, tristique ligula id, efficitur nibh. Curabitur tempus velit lorem, ut mattis eros tincidunt vitae. Proin et sem id orci iaculis ultrices ac eget velit.

Cras nec venenatis leo. Vivamus augue libero, hendrerit a justo at, dictum volutpat purus. In dictum augue non tellus maximus dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque porta pulvinar purus, nec luctus ex eleifend sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus sed arcu placerat, accumsan diam ut, facilisis lacus. Phasellus et magna venenatis, lobortis nunc et, mollis felis. Ut vel blandit orci.

Integer finibus tempus lacinia. Donec at mauris nisl. Donec euismod lacus et mollis aliquam. Integer pharetra elementum auctor. Nunc nisl est, lacinia eu ante sit amet, tempor elementum odio. Suspendisse aliquam ullamcorper tristique. Proin porta ligula nec ipsum pretium sollicitudin. Suspendisse hendrerit justo eget iaculis hendrerit. Etiam suscipit ante odio, ut euismod felis sollicitudin a. Nunc ultricies lacinia massa, feugiat auctor nibh porttitor a. Aenean nec ante accumsan, scelerisque mauris eget, aliquet massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

Proin sapien nibh, vehicula finibus ante vitae, dignissim gravida sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam orci mauris, convallis sit amet dictum at, semper ut velit. Quisque vitae urna in justo sollicitudin posuere. Praesent nec quam quam. Nullam ut ipsum elit. Suspendisse ex lectus, congue eu malesuada in, efficitur in leo. Nam at ipsum lacus. Ut non felis sed metus venenatis suscipit. Quisque eu eros at nibh accumsan tristique. Quisque scelerisque mi sed libero elementum, ut dignissim purus mollis.

Fusce at augue quis neque tempus tincidunt. Ut id risus mollis neque ultricies blandit. Phasellus porttitor, nunc sit amet finibus ultricies, nulla urna dapibus metus, eget rutrum risus ligula in tortor. Aenean vehicula at lorem eu posuere. Nunc vehicula libero ut enim interdum, nec rutrum mauris dictum. In vel lacus leo. Donec mollis risus ut sagittis pulvinar. Vestibulum tempus eleifend nunc, et laoreet eros finibus sed. Morbi nec laoreet elit. Nam malesuada libero vitae ante volutpat, malesuada mollis ante condimentum. Phasellus lacinia quam ut arcu consectetur, eget sollicitudin felis vulputate. Duis dictum elit lobortis magna dignissim bibendum. Duis suscipit at risus et auctor. Pellentesque tincidunt felis sed dui cursus, sit amet faucibus nulla efficitur.
`;

aboutPage.appendChild(cloneHeroDiv);
aboutPage.appendChild(aboutBio);
aboutBio.appendChild(aboutBioTitle);
aboutBio.appendChild(aboutBioText);

export default aboutPage;